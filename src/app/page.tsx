"use client";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

import { AnimatedOnScroll } from "../components/AnimetedOnScroll";
import Link from "next/link";
import { CardFunction } from "@/components/CardFunction";
import { useEffect } from "react";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.pageYOffset;

      if (scrollPosition >= scrollPosition * 0.3) {
        controls.start({ opacity: 1 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <main id="#main" className="mt-2 p-4 md:p-6 lg:p-8">
      <section id="home">
        <div className="inline-block max-w-screen-xl m-auto max-sm leading-none md:flex flex-row justify-between mt-6 xl:mt-20">
          <div className="font-bold text-4xl sm:text-6xl ">
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
              className="select-none mt-4 text-center sm:mt-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-40 lg:mt-20">
          <button className="bg-yellow text-black hover:bg-orange text-withe font-bold py-2 px-4 rounded">
            Junte-se à nossa comunidade agora e faça parte da mudança!
          </button>
        </div>
        <div className="hidden sm:flex flex-col items-center">
          <motion.div
            animate={{ y: [-10, 10] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <div className="mt-28 w-1/5 h-10 text-yellow ">
              <Link href="#functions">
                <ChevronsDown size={60} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <section id="functions" className="mt-10 mb-32 sm:mb-40">
          <div className="font-sans font-bold text-3xl text-left ml-2 sm:text-5xl md:text-center">
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
          <div className="flex flex-col max-w-screen-xl m-auto max-sm sm:items-center justify-between">
            <div className="block md:flex flex-row mt-20">
              <CardFunction
                title="Votações ativas"
                content="Acesse todas as votações ativas do seu grupo e participe
                ativamente delas. Veja as opções de voto e entenda as questões
                em discussão."
              />
              <CardFunction
                title="Acompanhamento"
                content="Acompanhe todas as votações que você participou, veja os
              resultados e entenda como seus votos influenciaram na decisão
              final."
              />
              <CardFunction
                title="Histórico de votações"
                content="Tenha acesso ao seu histórico completo de votações, incluindo
              aquelas em que você não pôde participar. Analise os resultados e
              veja como as decisões foram tomadas."
              />
            </div>

            <div className="block mt-0 md:flex flex-row">
              <CardFunction
                title="Notificações e lembretes"
                content="Receba notificações e lembretes sobre as votações ativas e
              prestes a se encerrarem. Assim, você nunca mais perderá a
              oportunidade de participar de uma votação importante."
              />
              <CardFunction
                title="Sistema seguro"
                content="Contamos com um sistema de segurança avançado que garante a
              integridade das votações e impede qualquer tipo de fraude ou
              interferência."
              />
            </div>
          </div>
        </section>
      </motion.div>
      <section className="h-3/5 pb-24 pt-24 min-h-fit border-t-[1px] border-y-zinc-800">
        <div className="block max-w-screen-xl m-auto max-sm justify-between sm:flex flex-row">
          <div className="flex flex-col">
            <h3 className="font-bold font-sans text-xl pb-6">
              Impactando a vida de milhares de pessoas
            </h3>
            <h4 className="font-sans">Colabora 2023</h4>
            <h4 className="font-sans">Todos os direitos reservados</h4>

            <AnimatedOnScroll
              id="social-media-container"
              hiddenX={-5}
              hiddenY={0}
            >
              <div className="flex flex-row w-2/3 pt-5 justify-between">
                <Facebook className="text-yellow" size="25" />
                <Instagram className="text-yellow" size="25" />
                <Twitter className="text-yellow" size="25" />
                <Linkedin className="text-yellow" size="25" />
                <Youtube className="text-yellow" size="25" />
              </div>
            </AnimatedOnScroll>
          </div>
          <div className="hidden sm:flex flex-col">
            <h3 className="font-sans font-bold text-xl pb-6">Menu</h3>
            <Link href="#header">Página Inicial</Link>
            <Link href="#functions">Funcionalidades</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
