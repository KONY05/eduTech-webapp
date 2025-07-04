import { headers } from 'next/headers';

export default function ServerPathnameExample() {
  // This is a Server Component by default (no "use client" directive)
  const headersList = headers();
  
  // Get the pathname from the x-pathname header
  // Next.js automatically adds this header with the current pathname
  const pathname = headersList.get('x-pathname') || 'No pathname found';
  
  // Get the full URL from the x-url header
  const url = headersList.get('x-url') || 'No URL found';
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Server Component Pathname Example</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Current Pathname:</h2>
          <p className="p-2 bg-gray-100 rounded">{pathname}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Full URL:</h2>
          <p className="p-2 bg-gray-100 rounded">{url}</p>
        </div>
      </div>
    </div>
  );
}