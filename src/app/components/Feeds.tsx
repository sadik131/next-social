import React from 'react';
import Post from './Post';
import { User } from '@prisma/client';
import prisma from '@/lip/client';

async function Feeds({ currentUser }: { currentUser?: User }) {
  let posts: any[] = [];

  try {
    if (!currentUser) {
      posts = await prisma.post.findMany({
        include: {
          likes: true,
          _count: {
            select: { comment: true }
          },
          user: {
            select: {
              id: true,
              name: true,
              surname: true,
              username: true,
              avatar: true
            }
          }
        },
        orderBy: {
          createdAt: "desc"
        }
      })
    } else {
      posts = await prisma.post.findMany({
        where: { userId: currentUser.id },
        include: {
          likes: true,
          _count: {
            select: { comment: true }
          },
          user: true
        },
        orderBy: {
          createdAt: "desc"
        }
      })
    }
  } catch (error) {
    console.log(error);
  }

  if (!posts || posts.length === 0) return <h1>Feed is empty</h1>;

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feeds;
