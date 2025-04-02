"use client"
import { approvePost, deletePost } from '@/lip/action'
import React, { useState } from 'react'

function ApproveForm({ id, adminId, approve }: { id: string, adminId: string, approve: string }) {
    const [status, setStatus] = useState(approve);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, actionType: string) => {
        e.preventDefault();

        if (actionType === "approve") {
            await approvePost(id, adminId);
            setStatus("APPROVED");
        } else if (actionType === "delete") {
            await deletePost(id);
            setStatus("DELETED");
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, status === "PENDING" ? "approve" : "delete")}>
                {status === "PENDING" ? (
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-all"
                    >
                        Approve
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-all"
                    >
                        Delete
                    </button>
                )}
            </form>
        </div>
    );
}

export default ApproveForm;
