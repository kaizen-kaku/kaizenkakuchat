import { ArrowTopRightIcon } from '@radix-ui/react-icons'; // Importing Radix Icon
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { auth } from '@/app/(auth)/auth';

export default async function Page(props: { params: Promise<any> }) {
  const session = await auth();

  if (!session || !session.user) {
    return notFound();
  }

  const models = [
    {
      name: 'Llama 3.2',
      description: 'Manage the models your Org has access to',
      parameters: ['3b', '1b'],
      features: ['tools'],
    },
    {
      name: 'Llama 3.1',
      description: 'Manage the models your Org has access to',
      parameters: ['8b', '70b', '405b'],
      features: ['tools'],
    },
    {
      name: 'qwen2.5',
      description: 'Pretrained on Alibaba`s latest large-scale dataset',
      parameters: ['0.5b', '1.5b', '3b', '7b', '14b', '32b', '72b'],
      features: ['tools'],
    },
    {
      name: 'llama3',
      description: 'A powerful model for language understanding',
      parameters: ['8b', '70b'],
      features: ['tools'],
    },
  ];

  return (
    <div className="p-4 sm:p-8 lg:p-36 flex flex-col min-h-screen">
      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl mb-3 font-semibold">Models</h2>
      <hr></hr>

      {/* Models Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {models.map((model, index) => (
          <Link
            key={index}
            href="/administration/models"
            className="flex flex-col items-left shadow-lg rounded-xl p-6 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Model Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{model.name}</h3>

            {/* Parameters */}
            <div className="flex space-x-2 mb-2">
              {model.parameters.map((param, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 py-1 px-3 text-xs rounded-full opacity-80"
                >
                  {param}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="flex space-x-2 mb-2">
              {model.features.map((feature, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-700 py-1 px-3 text-xs rounded-full opacity-80"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Model Description */}
            <p className="text-sm sm:text-base text-gray-600 text-left">{model.description}</p>
          </Link>
        ))}
      </div>

      {/* Back to home link */}
      <div className="mt-16 text-xs sm:text-sm text-gray-500">
        <Link href="/administration" className="hover:underline">
          Back to Administration Portal
        </Link>
      </div>
    </div>
  );
}
