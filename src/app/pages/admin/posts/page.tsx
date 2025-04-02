import ApproveForm from "@/app/components/admin/ApproveForm";
import prisma from "@/lip/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function PostsPage() {
    
    const { userId } = auth();
    if (!userId) throw new Error("user is not authenticated");

    const user = await prisma.user.findFirst({
        where: { clerkId: userId },
    });
    if (!user) throw new Error("user not found");
    if (user.role !== "ADMIN") throw new Error("user is not admin");

    const posts = await prisma.post.findMany({
        include: {
            user: true,
        },
    });

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-semibold mb-6">Approve Posts</h1>

            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="w-full border-collapse">
                    {/* Table Header */}
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="p-4 text-left w-1/4">User</th>
                            <th className="p-4 text-left w-2/4">Content</th>
                            <th className="p-4 text-left w-1/4">Status</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="border-b bg-gray-50 hover:bg-gray-100 transition-all">

                                {/* User Column */}
                                <td className="p-4 flex items-center gap-3">
                                    <Image
                                        height={50}
                                        width={50}
                                        className="h-12 w-12 rounded-full border"
                                        src={post.user.avatar || "/default-avatar.png"}
                                        alt={post.user.name!}
                                    />
                                    <span className="font-medium">{post.user.name}</span>
                                </td>

                                {/* Content Column */}
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        {post.img && (
                                            <Image
                                                height={50}
                                                width={50}
                                                className="h-12 w-12 rounded-md border"
                                                src={post.img}
                                                alt="Post Image"
                                            />
                                        )}
                                        <span className="text-gray-700">{post.desc}</span>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <ApproveForm approve={post.status} id={post.id} adminId={user.id}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
