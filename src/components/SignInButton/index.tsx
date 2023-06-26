"use client";
import { Fingerprint, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignInButton() {
  const { data: session } = useSession();
  const router = useRouter();

  return session ? (
    <button type="button" onClick={() => signOut()}>
      <User className="bg-yellow" />
      {session.user?.name}
    </button>
  ) : (
    <button
      className="flex flex-row items-center align-middle rounded-full bg-slate-700 border-0 p-2 box-border h-8"
      type="button"
      onClick={() => router.push("/login")}
    >
      <Fingerprint className="pr-3 text-yellow" size={40} />
      <span className="font-sans font-bold">Entrar</span>
    </button>
  );
}
