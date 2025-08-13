import Head from 'next/head';
import Layout from '@/components/Layout';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Get in touch" />
      </Head>
      
      <Layout>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-2xl text-gray-900 mb-8">Contact</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-900 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="border border-gray-300 text-gray-700 px-6 py-2 hover:bg-gray-50"
            >
              Send
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}
