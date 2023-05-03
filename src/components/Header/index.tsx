import Image from "next/image";

import { ActiveLink } from "../ActiveLink";
import Link from "next/link";

export function Header() {
  return (
    <header className="h-20 border-b border-b-zinc-800">
      <div className="flex min-w-screen flex-row max-w-screen-xl h-20 m-auto p-8 items-center justify-between">
        <Image src="/logo.svg" alt="cola.bora" width={120} height={100} />
        <nav className="ml-20">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
        </nav>
        <button>Entrar</button>
      </div>
    </header>
  );
}
