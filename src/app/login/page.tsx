"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Lógica de autenticação aqui
  };

  return (
    <main className="mt-2 max-w-screen-xl m-auto h-screen md:mt-8">
      <div className="text-center font-bold text-5xl mb-4 mt-8 sm:mb-4 md:mb-6">
        <p>
          Faça <span className="text-yellow">login </span>
          <span className="hidden md:inline">
            ou crie <span className="text-yellow"> sua conta</span>
          </span>
        </p>
        <p className="md:hidden">
          crie <span className="text-yellow">sua conta</span>
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="hidden md:flex justify-center w-full leading-none lg:pl-16">
          <Image
            src="/images/login.svg"
            alt="people heart"
            width={418}
            height={355}
            className="select-none mt-4 text-center"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full sm:mt-20">
          <form
            id="form-login"
            onSubmit={handleSubmit}
            className="w-5/6 md:w-2/3"
          >
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                value={email}
                placeholder="email@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-medium">
                Senha:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
                value={password}
                placeholder="Digite sua senha..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow text-black hover:bg-orange text-withe font-bold rounded"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col items-center">
            <div className="text-xl pt-4">
              <p>ou</p>
            </div>
            <div className="text-xl underline pt-4">
              <Link href="/login">Criar conta</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
