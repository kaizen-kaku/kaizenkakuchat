import { ArrowTopRightIcon } from '@radix-ui/react-icons'; // Importing Radix Icon
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { auth } from '@/app/(auth)/auth';

export default async function Page(props: { params: Promise<any> }) {
  const session = await auth();

  if (!session || !session.user) {
    return notFound();
  }

  return (
    <div className="p-4 sm:p-8 lg:p-36 flex flex-col min-h-screen">
      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-12 font-semibold">Administration Console</h2>

      {/* Options */}
      <section className="mb-12 sm:mb-16">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-1">
          <Link href="/administration/models" className="flex items-center hover:underline">
            <span>Models</span>
            <ArrowTopRightIcon color="black" className="ml-2 sm:ml-0 transition-transform" />
          </Link>
        </h3>
        <p className="text-sm sm:text-lg text-gray-700 mb-2">
          Manage the models your Org has access to
        </p>
      </section>

      {/* Back to home link */}
      <div className="mt-auto text-xs sm:text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}
