"use client";
import Image from "next/image";

import Link from "next/link";
import { SignInButton } from "../SignInButton";

export function Header() {
  return (
    <header
      id="header"
      className="border-b border-b-zinc-800 justify-center p-2 sm:pr-4 pl-4 lg:p-6"
    >
      <div className="flex flex-row items-center max-w-screen-xl m-auto justify-between">
        <div className="flex flex-row items-baseline justify-between">
          <Link href="/" className="pr-10">
            <Image
              src="/logo.svg"
              alt="cola.bora"
              width={110}
              height={100}
              className="mr-20 select-none"
            />
          </Link>
          <nav className="hidden w-3/4 font-sans text-sm select-none md:block lg:block">
            <Link href="/" className="pr-10">
              Página Inicial
            </Link>
            <Link href="/posts" className="pr-10">
              Submeter Proposta
            </Link>
            <Link href="/posts">Sobre</Link>
          </nav>
        </div>
        <SignInButton />
      </div>
    </header>
  );
}
