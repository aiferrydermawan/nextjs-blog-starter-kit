import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import { PostData } from '@/lib/posts';
import { format } from 'date-fns';

interface BlogProps {
  allPostsData: PostData[];
}

export default function Blog({ allPostsData }: BlogProps) {
  return (
    <>
      <Head>
        <title>Posts - My Blog</title>
        <meta name="description" content="All blog posts" />
      </Head>
      
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-2xl text-gray-900 mb-8">Posts</h1>

          <div className="space-y-8">
            {allPostsData.map((post) => (
              <article key={post.id}>
                <div className="mb-2">
                  <time className="text-sm text-gray-500">
                    {format(new Date(post.date), 'MMM d, yyyy')}
                  </time>
                </div>
                <h2 className="text-xl text-gray-900 mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-gray-600">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          {allPostsData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts yet.</p>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
