import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-5">
          <h2 className="text-lg font-semibold">Admin Panel</h2>
          <nav className="mt-5 space-y-2">
            <Link href="/pages/admin" className="block py-2 px-3 rounded-md hover:bg-gray-700">Dashboard</Link>
            <Link href="/pages/admin/users" className="block py-2 px-3 rounded-md hover:bg-gray-700">Users</Link>
            <Link href="/pages/admin/posts" className="block py-2 px-3 rounded-md hover:bg-gray-700">Posts</Link>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-5 overflow-y-auto">
          {children}
        </main>
      </div>
    );
  }
  