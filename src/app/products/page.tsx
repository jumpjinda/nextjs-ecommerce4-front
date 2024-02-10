"use client";

import Link from "next/link";

const ProductPage = async () => {
  const postData = async () => {
    const username = "jumpjinda";
    const email = "jumpjinda@gmail.com";
    const role = "admin";

    console.log({ username, email, role });

    const res = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        role,
      }),
    });

    const result = await res.json();
    console.log("this is result", result);
  };

  return (
    <div>
      <h1>This is Products page</h1>
      <div>
        <button onClick={postData}>Post data</button>
      </div>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default ProductPage;
