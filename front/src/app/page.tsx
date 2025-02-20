import React from "react";
import Header from "./components/header";
import Content from "./content";
import Footer from "./components/footer";

const Page = async () => {
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
};

export default Page;