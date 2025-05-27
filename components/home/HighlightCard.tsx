import { ReactNode } from "react";

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function HighlightCard({
  icon,
  title,
  description,
}: HighlightCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-rose-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-rose-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
