"use client"
import React, { useState } from 'react'

function UserTable({ user }: any) {
    const [selectedUser, setSelectedUser] = useState<any>(null);

    return (
        <>
            <tr key={user?.id}
                onClick={() => setSelectedUser(user)}
                className="border-b">
                <td className="p-3">{user?.name}</td>
                <td className="p-3">{user?.email}</td>
                <td className="p-3">
                    <select
                        className="border p-2"
                        value={user.role}
                    // onChange={e => updateRole(user.id, e.target.value)}
                    >
                        <option value="USER">User</option>
                        <option value="TEACHER">Teacher</option>
                    </select>
                </td>
            </tr>

            {selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
                        <button
                            className="absolute top-2 right-3 text-gray-600 hover:text-gray-800"
                            onClick={() => setSelectedUser(null)}
                        >
                            ✖
                        </button>
                        <div className="flex flex-col items-center">
                            <img
                                src={selectedUser.avatar}
                                alt="User Avatar"
                                className="w-20 h-20 rounded-full mb-3"
                            />
                            <h2 className="text-xl font-bold">{selectedUser.name} {selectedUser.surname}</h2>
                            <p className="text-gray-600">{selectedUser.email}</p>
                            <p className="text-gray-500">Role: {selectedUser.role}</p>
                        </div>
                        <hr className="my-4" />
                        <div>
                            <p><strong>City:</strong> {selectedUser.city}</p>
                            <p><strong>School:</strong> {selectedUser.school}</p>
                            <p><strong>Work:</strong> {selectedUser.work}</p>
                            <p><strong>Description:</strong> {selectedUser.description}</p>
                            <p><strong>Created At:</strong> {new Date(selectedUser.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserTable