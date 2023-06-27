"use client";
import { useState } from "react";

export default function CreateSuggestion() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Lógica de autenticação aqui
  };

  return (
    <main className="mt-2 max-w-screen-xl m-auto h-screen p-4 md:p-6 lg:p-8">
      <div className="text-center font-bold text-5xl mb-4 mt-4 sm:mb-4 md:mb-6">
        <p>Submeter Proposta</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full sm:mt-20">
        <form
          id="form-login"
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 lg:w-5/6"
        >
          <div className="mb-4">
            <label htmlFor="text" className="block mb-2 font-medium">
              Título
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
              value={title}
              placeholder="Proposta de aumento de seguranças"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block mb-2 font-medium">
              Categoria
            </label>
            <input
              type="text"
              id="text"
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
              value={category}
              placeholder="Segurança"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block mb-2 font-medium">
              Descrição
            </label>
            <textarea
              id="description"
              rows={8}
              className="flex items-start w-full px-3 py-4 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
              value={description}
              placeholder="Escreva um texto para sua proposta..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow text-black hover:bg-orange text-withe font-bold rounded"
          >
            Enviar Proposta
          </button>
        </form>
      </div>
    </main>
  );
}
