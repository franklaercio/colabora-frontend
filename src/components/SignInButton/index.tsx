"use client";
import { Fingerprint, User } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button type="button" onClick={() => signOut()}>
      <User className="bg-yellow" />
      {session.user?.name}
    </button>
  ) : (
    <button
      className="flex flex-row font-sans rounded-full bg-slate-700 border-0 p-2 text-center justify-center font-bold box-border"
      type="button"
      onClick={() => signIn("github")}
    >
      <Fingerprint className="pr-3 w-3/5 h-3/5 text-yellow" />
      Entrar
    </button>
  );
}
