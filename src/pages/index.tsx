import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="A personal blog about web development and technology." />
      </Head>
      
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-normal text-gray-900 mb-6">
              My Blog
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thoughts on web development, design, and technology.
            </p>
            <Link 
              href="/blog"
              className="inline-block border border-gray-300 text-gray-700 px-6 py-2 hover:bg-gray-50 transition-colors"
            >
              Read Posts
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
