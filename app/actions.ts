'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { prisma } from './utils/db';
import { redirect } from 'next/navigation';

export async function handleSubmit(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect('/api/auth/register');
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const url = formData.get('image') as string;
  await prisma.blogPost.create({
    data: {
      title,
      content,
      imageUrl: url,
      authorId: user?.id as string,
      authorImage: user?.picture as string,
      authorName: user?.given_name as string,
    },
  });
  return redirect('/dashboard');
}
