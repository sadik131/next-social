// "use client";

import UserTable from "@/app/components/admin/UserTable";
import prisma from "@/lip/client";
// import { useState, useEffect } from "react";

export default async function UsersPage() {
  // const [selectedUser, setSelectedUser] = useState(null);

  const users = await prisma.user.findMany({}) 
  // console.log(user, "user")
    // const [users, setUsers] = useState([
    //     { id: "u1", name: "John Doe", email: "john@example.com", role: "USER" },
    //     { id: "u2", name: "Alice Smith", email: "alice@example.com", role: "TEACHER" },
    //     { id: "u3", name: "Michael Brown", email: "michael@example.com", role: "USER" },
    // ]);


  // const updateRole = async (id: string, role: string) => {
  //   await fetch(`/api/admin/users/${id}/updateRole`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ role }),
  //   });

  //   setUsers(users.map(user => (user.id === id ? { ...user, role } : user)));
  // };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Manage Users</h1>
      <table className="w-full bg-white mt-5 shadow-md rounded-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <UserTable key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  );
}
