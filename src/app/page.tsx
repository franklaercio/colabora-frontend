"use client";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";

import { AnimatedOnScroll } from "../components/AnimetedOnScroll";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <main className="mt-24">
      <section className="h-screen min-h-screen">
        <div className="flex flex-row max-w-screen-xl m-auto max-sm font-bold text-6xl p-8 leading-none justify-between">
          <div>
            <p>Acompanhe as</p>
            <p>propostas que</p>
            <p>
              <span className="text-yellow">mudam</span> a
            </p>
            <p>vida das pessoas</p>
          </div>
          <div>
            <Image
              src="/images/landing.svg"
              alt="people in a common park"
              width={418}
              height={355}
              className="select-none"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <button className="bg-yellow text-black hover:bg-orange text-withe font-bold py-2 px-4 rounded">
            Junte-se à nossa comunidade agora e faça parte da mudança!
          </button>
          <motion.div
            animate={{ y: [-10, 10] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <div className="mt-20 w-1/5 h-10 text-yellow">
              <ChevronsDown size={60} />
            </div>
          </motion.div>
        </div>
      </section>
      <section className="h-screen min-h-screen">
        <div className="m-auto text-center font-sans font-bold text-5xl">
          <AnimatedOnScroll
            id="title-functions-colabora"
            hiddenX={0}
            hiddenY={30}
          >
            Conheça as ferramentas que vão tornar
          </AnimatedOnScroll>
          <AnimatedOnScroll
            id="subtitle-functions-colabora"
            hiddenX={0}
            hiddenY={30}
          >
            sua participação em votações mais fácil e acessível
          </AnimatedOnScroll>
        </div>
        <div className="flex flex-col max-w-screen-xl m-auto max-sm items-center justify-between">
          <div className="flex flex-row m-3 mt-20">
            <div className="bg-yellow text-black px-6 py-4 max-w-xs rounded overflow-hidden shadow-lg m-3">
              <div className="font-bold text-xl mb-2">Votações ativas</div>
              <p className="text-gray-700 text-base font-serif">
                Acesse todas as votações ativas do seu grupo e participe
                ativamente delas. Veja as opções de voto e entenda as questões
                em discussão.
              </p>
            </div>
            <div className="bg-yellow text-black px-6 py-4 max-w-xs rounded overflow-hidden shadow-lg m-3">
              <div className="font-bold text-xl mb-2">Acompanhamento</div>
              <p className="text-gray-700 text-base font-serif">
                Acompanhe todas as votações que você participou, veja os
                resultados e entenda como seus votos influenciaram na decisão
                final.
              </p>
            </div>
            <div className="bg-yellow text-black px-6 py-4 max-w-xs rounded overflow-hidden shadow-lg m-3">
              <div className="font-bold text-xl mb-2">
                Histórico de votações
              </div>
              <p className="text-gray-700 text-base font-serif">
                Tenha acesso ao seu histórico completo de votações, incluindo
                aquelas em que você não pôde participar. Analise os resultados e
                veja como as decisões foram tomadas.
              </p>
            </div>
          </div>

          <div className="flex flex-row m-3">
            <div className="bg-yellow text-black px-6 py-4 max-w-xs rounded overflow-hidden shadow-lg m-3">
              <div className="font-bold text-xl mb-2">
                Notificações e lembretes
              </div>
              <p className="text-gray-700 text-base font-serif">
                Receba notificações e lembretes sobre as votações ativas e
                prestes a se encerrarem. Assim, você nunca mais perderá a
                oportunidade de participar de uma votação importante.
              </p>
            </div>
            <div className="bg-yellow text-black px-6 py-4 max-w-xs rounded overflow-hidden shadow-lg m-3">
              <div className="font-bold text-xl mb-2">Sistema seguro</div>
              <p className="text-gray-700 text-base font-serif">
                Contamos com um sistema de segurança avançado que garante a
                integridade das votações e impede qualquer tipo de fraude ou
                interferência.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
