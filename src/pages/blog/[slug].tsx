import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import { PostData } from '@/lib/posts';
import { format } from 'date-fns';

interface BlogPostProps {
  postData: PostData;
}

export default function BlogPost({ postData }: BlogPostProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.excerpt} />
      </Head>
      
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <article>
            <header className="mb-8">
              <time className="text-sm text-gray-500">
                {format(new Date(postData.date), 'MMM d, yyyy')}
              </time>
              <h1 className="text-2xl text-gray-900 mt-2 mb-4">
                {postData.title}
              </h1>
              <p className="text-gray-600">
                {postData.excerpt}
              </p>
            </header>

            <div 
              className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-code:text-gray-800 prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
            />
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blog"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              ← Back to posts
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
