"use client";
import { Facebook } from "lucide-react";
import SuggestionCardList from "@/components/SuggestionCardList";

async function getSuggestions() {
  const data = await fetch(process.env.API_URL + "/suggestion");

  if (!data.ok) {
    return [];
  }

  const suggestions = await data.json();

  const suggestionsFormated = await Promise.all(
    suggestions.suggestions.map(async (suggestion: any) => {
      const userName = await getUserName(suggestion.authorId);
      const categoryName = await getCategoryName(suggestion.categoryId);

      return {
        ...suggestion,
        userName: userName,
        categoryName: categoryName,
        dataFormated: new Date(suggestion.createdAt).toLocaleDateString(
          "pt-BR",
          {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }
        ),
      };
    })
  );

  return suggestionsFormated;
}

async function getUserName(authorId: string) {
  const data = await fetch(process.env.API_URL + "/user/" + authorId);
  const user = await data.json();
  return user.data.name;
}

async function getCategoryName(categoryId: string) {
  const data = await fetch(process.env.API_URL + "/category/" + categoryId);
  const category = await data.json();
  return category.data.name;
}

export default async function Suggestions() {
  const data = await getSuggestions();

  return (
    <main className="mt-2 max-w-screen-xl m-auto h-screen p-4 sm:p-6 md:p-8">
      <div className="inline-table justify-between sm:flex flex-row">
        <div className="flex flex-col font-sans font-bold md:flex text-2xl">
          <p>Olá, Frank!</p>
          <p>Acompanhe as propostas da sua comunidade.</p>
        </div>
        <div className="hidden md:flex items-center">
          <button
            className="flex flex-row items-center align-middle rounded-md bg-white border-0 p-2 box-border h-8"
            type="button"
          >
            <Facebook className="pr-3 text-blue" size={40} />
            <span className="font-sans font-bold text-black">COMUNIDADE</span>
          </button>
        </div>
      </div>
      <div className="pt-12 pb-12">
        <SuggestionCardList suggestions={data} />
      </div>
    </main>
  );
}
