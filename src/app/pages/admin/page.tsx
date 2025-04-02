export default function AdminDashboard() {
    return (
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <div className="bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-lg font-medium">Total Users</h2>
            <p className="text-xl font-bold">1,245</p>
          </div>
          <div className="bg-white p-5 shadow-md rounded-lg">
            <h2 className="text-lg font-medium">Total Posts</h2>
            <p className="text-xl font-bold">3,567</p>
          </div>
        </div>
      </div>
    );
  }
  