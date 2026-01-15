import type { SchemaOrg } from '@/lib/types';

interface SchemaGeneratorProps {
  schemas: SchemaOrg[];
}

/**
 * Component to inject JSON-LD structured data into the page
 * Accepts multiple schemas and renders them as separate script tags
 */
export function SchemaGenerator({ schemas }: SchemaGeneratorProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
    </>
  );
}

/**
 * Inline schema generator for use in page components
 * Returns the script tag as a React element
 */
export function InlineSchema({ schema }: { schema: SchemaOrg }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 0),
      }}
    />
  );
}
