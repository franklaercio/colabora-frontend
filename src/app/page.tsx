import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex max-w-screen-xl m-auto p-8 mt-24 justify-between">
      <section className="max-sm font-sans font-bold text-6xl leading-none">
        <p>Acompanhe as</p>
        <p>propostas que</p>
        <p>
          <span className="text-yellow">mudam</span> a
        </p>
        <p>vida das pessoas</p>
      </section>
      <Image
        src="/images/landing.svg"
        alt="people in a common park"
        width={418}
        height={355}
      />
    </main>
  );
}
