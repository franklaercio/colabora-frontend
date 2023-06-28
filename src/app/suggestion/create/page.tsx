"use client";
import { api } from "@/services/api";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function CreateSuggestion() {
  const [title, setTitle] = useState("");
  const [categories, setCategory] = useState([]);
  const [categorySelected, setCategorySelected] = useState<string>();
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const categoryData = await api.get("/category?name=" + categorySelected);

      const response = await api.post("/suggestion", {
        body: JSON.stringify({
          title: title,
          content: description,
          authorId: "649a62c035347be1ac105dc8",
          categoryId: categoryData.data.name,
        }),
        mode: "no-cors",
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        toast.success("Sugestão submetida com sucesso!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        toast.error("Não foi possível cadastrar a sugestão!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      toast.error("Não foi possível cadastrar a sugestão!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    api.get("/category").then((response) => {
      console.log(response);
      setCategory(response.data.categories);
    });
  }, []);

  return (
    <main className="mt-2 max-w-screen-xl m-auto h-screen p-4 md:p-6 lg:p-8">
      <div className="text-center font-bold text-5xl mb-4 mt-4 sm:mb-4 md:mb-6">
        <p>Submeter Proposta</p>
      </div>
      <div className="flex flex-col items-center justify-center w-full pb-10 sm:mt-20">
        <form
          id="form-login"
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 lg:w-5/6"
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium">Título</label>
            <input
              type="text"
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
              value={title}
              placeholder="Proposta de aumento de seguranças"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-2 font-medium">
              Categoria
            </label>
            <select
              id="category"
              value={categorySelected}
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              onChange={(e) => setCategorySelected(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Controle de Receitas">Controle de Receitas</option>
              <option value="Manutenção Predial">Manutenção Predial</option>
              <option value="Gestão de Contratos">Gestão de Contratos</option>
              <option value="Comunicação Interna">Comunicação Interna</option>
              <option value="Conformidade Jurídica">
                Conformidade Jurídica
              </option>
              {/* {categories?.map((category: any) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))} */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 font-medium">
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
      <ToastContainer />
    </main>
  );
}
