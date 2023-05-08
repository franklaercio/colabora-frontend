interface CardProps {
  title: string;
  content: string;
}

export function CardFunction({ title, content }: CardProps) {
  return (
    <div className="bg-yellow text-black px-6 py-4 max-w-xs rounded overflow-hidden shadow-lg m-3">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base font-serif text-justify">
        {content}
      </p>
    </div>
  );
}
