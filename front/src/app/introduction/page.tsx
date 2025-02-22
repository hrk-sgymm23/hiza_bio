import React from "react";
import Image from 'next/image';
import Header from "../components/header";
import Footer from "../components/footer";

const Introduction = async () => {
  return (
    <>
      <Header></Header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:pl-8 sm:py-8">
                    <div className="relative sm:w-32 sm:h-32 h-20 w-20 sm:mr-20 inline-flex rounded-full flex-shrink-0">
                        <Image src='/images/introduction.png' alt="Introduction" className="m-4 justify-center items-center shadow-2xl sm:w-32 sm:h-32 rounded object-cover" width={200} height={200} />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 mr-4 ml-4 text-gray-900 text-lg">Haruki Sugiyama</h2>
                      <h2 className="font-medium title-font mb-4 mr-4 ml-4 text-gray-900 text-lg">(h12a/HIZA)</h2>
                    </div>
                </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">
                  Hello, my name is Haruki. I am a cloud infrastructure engineer specializing in AWS, Terraform, and Python. With a strong background in DevOps and cloud automation, I focus on building scalable and reliable systems. I’m passionate about improving development workflows and optimizing infrastructure to enhance efficiency. I look forward to collaborating with like-minded professionals.
                  </p>
              </div>
            </div>
          </div>
        </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default Introduction;