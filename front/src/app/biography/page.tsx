import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Introduction = async () => {
  return (
    <>
    <Header></Header>
    <section className="mr-12 ml-12 mt-3 mb-3 text-gray-600 body-font overflow-hidden">
    {/* 1段目 */}
    <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">M Corporation</span>
                    <span className="mt-1 text-gray-500 text-sm">July 2023 ~</span>
                </div>
                <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Data analytics infrastructure Build/maintain/operate (Google Cloud / Python)
                </h2>
                <p className="leading-relaxed">
                    A data pipeline was built, maintained and operated to import data sucked from IoT devices into BigQuery through ETL processing in GoogleCloud.
                    Technology stack is GoogleCloud (Dataflow, GCS, BigQuery, DataTransfer).IaC is Terraform.
                </p>
            </div>
        </div>
        {/* 2段目 */}
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">M Corporation</span>
                <span className="mt-1 text-gray-500 text-sm">July 2022 ~ July 2023</span>
            </div>
            <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Subscription services New feature development/operation and maintenance
            </h2>
            <p className="leading-relaxed">
            Defects were identified and suggestions for improvement were made, and negotiations were held with management staff to identify needs, improve functions and develop new functions.
            Technology stack is Ruby on Rails, Vue.js(v2), AWS(ECS, RDS). IaC is Terraform.
            </p>
            </div>
        </div>
        {/* 3段目 */}
        <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">Kanazawa Institute of Technology</span>
                <span className="text-sm text-gray-500">2018 April ~ 2022 March</span>
            </div>
            <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Research and development of media informatics learning/AR apps.</h2>
                <p className="leading-relaxed">
                    A comprehensive study of media informatics was conducted. (CG/programming/mathematics).In addition, for her graduation project, she developed an AR application using Swift to access past graduation project data.
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