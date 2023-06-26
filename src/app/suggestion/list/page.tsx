"use client";

import SuggestionCard from "@/components/SuggestionCard";
import { useRouter } from "next/navigation";
import { Facebook } from "lucide-react";

export default function Suggestions() {
  const router = useRouter();

  return (
    <main className="mt-2 max-w-screen-xl m-auto h-screen p-8 md:mt-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col font-sans font-bold md:flex text-2xl">
          <p>Olá, Frank!</p>
          <p>Acompanhe as propostas da sua comunidade.</p>
        </div>
        <div className="flex items-center">
          <button
            className="flex flex-row items-center align-middle rounded-md bg-white border-0 p-2 box-border h-8"
            type="button"
            onClick={() => router.push("/login")}
          >
            <Facebook className="pr-3 text-blue" size={40} />
            <span className="font-sans font-bold text-black">COMUNIDADE</span>
          </button>
        </div>
      </div>
      <div className="mt-12">
        <SuggestionCard
          title="Modernização da Área de Lazer"
          resume="Propõe-se investir na modernização da área de lazer do condomínio, com o objetivo de oferecer mais opções de entretenimento e lazer para os moradores."
          author="Frank Laércio"
          date="2023/06/26"
        />
        <SuggestionCard
          title="Implantação de Medidas de Sustentabilidade"
          resume="Nesta proposta, sugere-se a implementação de medidas de sustentabilidade para reduzir os impactos ambientais do condomínio e promover uma consciência ecológica entre os moradores."
          author="Frank Laércio"
          date="2023/06/26"
        />
        <SuggestionCard
          title="Melhorias na Segurança e Monitoramento"
          resume="Esta proposta visa aprimorar a segurança e o monitoramento do condomínio, garantindo um ambiente tranquilo e seguro para os moradores."
          author="Frank Laércio"
          date="2023/06/26"
        />
      </div>
    </main>
  );
}
