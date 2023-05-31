import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

export default function Navbar() {
  return (
    <Link href="/">
      <Image src={logo} height={25} width="auto" className="m-2" alt="logo" aria-label="Click here to return to homepage"/>
    </Link>
  );
}
