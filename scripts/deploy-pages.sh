#!/usr/bin/env bash
#
# Publish the static export to the `gh-pages` branch, which GitHub Pages serves.
#
# The build runs on this machine, not in CI — that is deliberate. The site is a
# pure static export (`output: 'export'` in next.config), so there is nothing a
# hosted runner does here that a laptop cannot, and it keeps the project off
# GitHub Actions entirely.
#
# `main` never carries build output: `out/` stays gitignored, and the published
# files live only on the orphan `gh-pages` branch.
#
# Usage:  npm run deploy
set -euo pipefail

BRANCH="gh-pages"
OUT="out"
REMOTE="origin"
DOMAIN="leaftok.app"

cd "$(dirname "$0")/.."

# Refuse to publish a build made from a dirty tree — the deploy commit records
# the source SHA it came from, and that claim has to be true.
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
    echo "error: working tree has uncommitted changes." >&2
    echo "       Commit or stash them so the deployed build matches a real commit." >&2
    exit 1
fi

SOURCE_SHA="$(git rev-parse --short HEAD)"
SOURCE_BRANCH="$(git rev-parse --abbrev-ref HEAD)"

echo "==> Building from ${SOURCE_BRANCH} (${SOURCE_SHA})"
npm run build

if [ ! -d "$OUT" ]; then
    echo "error: build produced no ${OUT}/ directory." >&2
    exit 1
fi

# Custom domain: Pages reads CNAME from the published root, so it has to be part
# of the artifact. Without it the domain reverts to *.github.io on every deploy.
echo "$DOMAIN" > "$OUT/CNAME"
# Stop Pages running the output through Jekyll, which would drop _next/.
touch "$OUT/.nojekyll"

WORKTREE="$(mktemp -d)"
cleanup() {
    git worktree remove --force "$WORKTREE" 2>/dev/null || true
    rm -rf "$WORKTREE"
}
trap cleanup EXIT

echo "==> Staging ${BRANCH}"
git fetch --quiet "$REMOTE" "$BRANCH" 2>/dev/null || true

if git show-ref --verify --quiet "refs/remotes/${REMOTE}/${BRANCH}"; then
    git worktree add --quiet "$WORKTREE" -B "$BRANCH" "${REMOTE}/${BRANCH}"
else
    # First deploy: start the branch with no history so it never carries source.
    git worktree add --quiet --orphan -B "$BRANCH" "$WORKTREE"
fi

# Replace the published tree wholesale so deleted pages actually disappear.
# `git rm` rather than `rm` keeps the index honest about removals.
git -C "$WORKTREE" rm -rq --ignore-unmatch . 2>/dev/null || true
cp -R "$OUT"/. "$WORKTREE"/

git -C "$WORKTREE" add --all
if git -C "$WORKTREE" diff --cached --quiet; then
    echo "==> No change in built output; nothing to publish."
    exit 0
fi

git -C "$WORKTREE" commit --quiet -m "deploy: site built from ${SOURCE_BRANCH} ${SOURCE_SHA}"
git -C "$WORKTREE" push --quiet "$REMOTE" "$BRANCH"

echo "==> Published ${SOURCE_SHA} to ${REMOTE}/${BRANCH}"
echo "    https://${DOMAIN}/ updates within a minute or two."
