import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';

export default function ServerPathnameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // These hooks work in both Server and Client Components
  const segment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();
  
  // Construct the pathname from segments
  const pathname = segments.length > 0 ? `/${segments.join('/')}` : '/server-pathname-example';
  
  return (
    <div className="min-h-screen">
      <div className="bg-blue-100 p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Layout Component</h2>
        <div className="space-y-2">
          <div>
            <strong>Current Segment:</strong> {segment || 'None (root)'}
          </div>
          <div>
            <strong>All Segments:</strong> {segments.length > 0 ? segments.join(' / ') : 'None'}
          </div>
          <div>
            <strong>Constructed Pathname:</strong> {pathname}
          </div>
        </div>
        <div className="mt-4 space-x-4">
          <Link href="/server-pathname-example" className="text-blue-600 hover:underline">
            Root Example
          </Link>
          <Link href="/server-pathname-example/test" className="text-blue-600 hover:underline">
            Dynamic Example (/test)
          </Link>
          <Link href="/server-pathname-example/test?query=value" className="text-blue-600 hover:underline">
            With Query Params
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}