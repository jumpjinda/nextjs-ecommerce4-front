"use client";

import Link from "next/link";

const ProductPage = async () => {
  const postData = async () => {
    const username = "jumpjinda";
    const email = "jumpjinda@gmail.com";
    const role = "admin";

    console.log({ username, email, role });

    const res = await fetch("http://localhost:3000/api", {
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
  };

  return (
    <div>
      <h1>This is User page</h1>
      <div>
        <button onClick={postData}>Create User</button>
      </div>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default ProductPage;
