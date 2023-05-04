import Image from "next/image";

import { ActiveLink } from "../ActiveLink";
import Link from "next/link";
import { SignInButton } from "../SignInButton";

export function Header() {
  return (
    <header className="h-20 border-b border-b-zinc-800">
      <div className="flex min-w-screen flex-row max-w-screen-xl h-20 m-auto p-8 items-center justify-between">
        <Image src="/logo.svg" alt="cola.bora" width={110} height={100} />
        <nav className="w-3/4 font-sans text-lg">
          <Link href="/" className="pr-10">
            Página Inicial
          </Link>
          <Link href="/posts" className="pr-10">
            Submeter Proposta
          </Link>
          <Link href="/posts">Sobre</Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
