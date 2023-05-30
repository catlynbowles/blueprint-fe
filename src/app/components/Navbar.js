import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Link href="/">
      <button className="p-5 text-2xl drop-shadow-md text-off-white font-extrabold">blueprint</button>
    </Link>
  );
}
