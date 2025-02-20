import React from "react";
import Image from 'next/image';
import Link from "next/link";

const Content = async () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* 一段目 */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-12 mb-12 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-20 inline-flex items-center justify-center rounded-full flex-shrink-0">
                <Image src='/images/introduction.png' alt="Introduction" className="shadow-2xl sm:w-32 sm:h-32 rounded object-cover" width={200} height={200} />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Introduction</h2>
              <p className="leading-relaxed text-base">Briefly describe your personal life and hobbies.</p>
              <Link href="/introduction">
                <span className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          {/* 二段目 */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-12 mb-12 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-20 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <Image src='/images/biography.png' alt="BioGraphy" className="shadow-2xl sm:w-32 sm:h-32 rounded object-cover" width={200} height={200} />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">BioGraphy</h2>
              <p className="leading-relaxed text-base">Briefly describe my work history.</p>
              <Link href="/introduction">
                <span className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          {/* 三段目 */}
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-12 mb-12 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-20 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <Image src='/images/blog.png' alt="Blog" className="shadow-2xl sm:w-32 sm:h-32 rounded object-cover" width={200} height={200} />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Blog</h2>
              <p className="leading-relaxed text-base">Occasional updates.</p>
              <Link href="/introduction">
                <span className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Content;