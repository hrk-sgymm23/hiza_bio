import React from "react";
import Link from "next/link";

const Header = async () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <span className="ml-3 text-xl">HIZA</span>
            </Link>
        </div>
      </header>
    </>
  );
};

export default Header;