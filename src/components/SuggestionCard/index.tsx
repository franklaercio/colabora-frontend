import { AnimatedOnScroll } from "../AnimetedOnScroll";
import { User, AlarmClock } from "lucide-react";

interface SuggestionProps {
  title: string;
  resume: string;
  author: string;
  date: string;
}

export default function SuggestionCard({
  title,
  resume,
  author,
  date,
}: SuggestionProps) {
  return (
    <div className="bg-white text-black px-6 py-4 rounded overflow-hidden shadow-lg mb-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <div className="text-gray-700 text-base font-serif text-justify">
        <AnimatedOnScroll
          id="description-card-function-wrapper"
          hiddenX={-10}
          hiddenY={0}
        >
          {resume}
          <hr className="mt-4 mb-4" />
          <div className="flex flex-row font-mono font-bold">
            <div className="flex col mr-4 md:mr-6">
              <User className="text-black mr-2" size="20" />
              {author}
            </div>
            <div className="flex col">
              <AlarmClock className="text-black mr-2" size="20" />
              {date}
            </div>
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}
