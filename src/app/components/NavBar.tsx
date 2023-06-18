import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTelegram, FaGithub, FaInstagram } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl text-center flex mx-auto justify-between flex-col sm:flex-row ">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 hover:text-white no-underline "
          >
            Pouriya Moshfegh
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl">
          {/* _______      linkedin   ________ */}
          <Link
            target="_blank"
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/pouriya-moshfegh-2b5715196/"
          >
            <FaLinkedin />
          </Link>
          {/* _______      Instagram   ________ */}

          <Link
            className="text-white/90 hover:text-white"
            href="https://www.instagram.com/pouriyams"
          >
            <FaInstagram />
          </Link>
          {/* _______      Github    ________ */}
          <Link
            target="_blank"
            className="text-white/90 hover:text-white"
            href="https://github.com/pouriya-moshfegh"
          >
            <FaGithub />
          </Link>
          {/* _______      Twitter    ________ */}

          <Link
            target="_blank"
            className="text-white/90 hover:text-white"
            href="https://t.me/pouriyams"
          >
            <FaTelegram />
          </Link>
        </div>
      </div>
    </nav>
  );
}
