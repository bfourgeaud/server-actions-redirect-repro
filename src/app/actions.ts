"use server"

import { redirect } from 'next/navigation';

export async function redirectAction() {
  const newPost = await new Promise<{ id: string }>((res, rej) => setTimeout(() => res({ id: "1" }), 2000))
  redirect(`/posts/${newPost.id}`)
}

export async function redirectErrorAction() {
  try {
    const newPost = await new Promise<{ id: string }>((res, rej) => setTimeout(() => res({ id: "1" }), 2000))
    redirect(`/posts/${newPost.id}`)
  } catch(err) {
    console.log(err)
    return { error: "An error occured" }
  }
}