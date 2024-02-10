import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <Link href={"/products"}>Products page</Link>
      <Link href={"/user"}>User Page</Link>
    </div>
  );
};

export default Home;
