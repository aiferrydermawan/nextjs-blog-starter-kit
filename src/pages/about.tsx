import Head from 'next/head';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About me" />
      </Head>
      
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-2xl text-gray-900 mb-8">About</h1>
          
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Hello! I&apos;m a web developer who loves creating things for the web.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              I write about web development, design, and technology on this blog.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Feel free to reach out if you&apos;d like to connect.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
