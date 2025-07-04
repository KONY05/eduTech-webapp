// This is a Server Component by default (no "use client" directive)
export default function DynamicServerPathnameExample({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Get the current segment from params
  const currentSegment = params.slug;
  
  // Construct the pathname manually
  const pathname = `/server-pathname-example/${currentSegment}`;
  
  // Get query parameters
  const queryString = Object.entries(searchParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  
  // Full URL with query parameters
  const fullUrl = queryString ? `${pathname}?${queryString}` : pathname;
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dynamic Server Component Pathname Example</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Current Segment:</h2>
          <p className="p-2 bg-gray-100 rounded">{currentSegment}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Constructed Pathname:</h2>
          <p className="p-2 bg-gray-100 rounded">{pathname}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Full URL with Query Parameters:</h2>
          <p className="p-2 bg-gray-100 rounded">{fullUrl}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">All Search Params:</h2>
          <pre className="p-2 bg-gray-100 rounded overflow-auto">
            {JSON.stringify(searchParams, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}