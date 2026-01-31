"use client";

import Link from "next/link";

export default function HeaderLink() {
  return (
    <Link
      href="/"
      className="text-lg font-bold hover:opacity-90 block"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "/";
      }}
    >
      PhilNITS FE AM Mock Exam
    </Link>
  );
}
