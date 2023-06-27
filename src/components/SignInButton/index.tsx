"use client";
import { Fingerprint, UserCircle } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignInButton() {
  const { data: session } = useSession();
  const router = useRouter();

  return session ? (
    <button
      className="flex items-center align-middle rounded-full border-0 box-border md:p-1"
      type="button"
      onClick={() => signOut()}
    >
      <UserCircle className="text-yellow" size={35} />
    </button>
  ) : (
    <button
      className="flex flex-row items-center align-middle rounded-full bg-slate-700 border-0 p-1 box-border h-8 md:p-2"
      type="button"
      onClick={() => router.push("/login")}
    >
      <Fingerprint className="text-yellow md:pr-3" size={30} />
      <span className="font-sans font-bold hidden md:flex">Entrar</span>
    </button>
  );
}
