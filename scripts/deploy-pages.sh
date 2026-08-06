#!/usr/bin/env bash
#
# Build locally and publish to Cloudflare Pages.
#
# The build runs on this machine, not in CI — deliberately. The site is a pure
# static export (`output: 'export'` in next.config), so a hosted runner adds
# nothing a laptop cannot do, and it keeps the project off GitHub Actions.
#
# We moved off GitHub Pages in August 2026: GitHub stopped allocating build
# capacity to the LeafTok org on 2026-07-24, which silently broke every deploy.
# Cloudflare already fronts the domain, so Pages removes GitHub from the path
# entirely.
#
# `main` never carries build output — `out/` stays gitignored.
#
# Usage:  npm run deploy
set -euo pipefail

PROJECT="leaftok-site"
OUT="out"
# This login has access to more than one account, so wrangler cannot pick in a
# non-interactive shell. leaftok.app's zone lives in this one.
export CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-fd2cc36742a3310940462a70e396603b}"

cd "$(dirname "$0")/.."

# Refuse to publish a build made from a dirty tree — the deployment is labelled
# with the source SHA it came from, and that claim has to be true.
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

echo "==> Publishing to Cloudflare Pages project '${PROJECT}'"
# --branch main marks this as the production deployment; anything else would
# publish to a preview URL and leave the live site untouched.
npx wrangler pages deploy "$OUT" \
    --project-name "$PROJECT" \
    --branch main \
    --commit-hash "$(git rev-parse HEAD)" \
    --commit-dirty=false

echo "==> Published ${SOURCE_SHA}"
echo "    https://leaftok.app/ updates within a minute or two."
