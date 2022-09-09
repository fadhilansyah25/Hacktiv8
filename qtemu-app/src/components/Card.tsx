import React from "react";

type Props = {
  id: number;
  topic: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
};

export default function Card({
  id,
  topic,
  title,
  date,
  description,
  imageUrl,
}: Props) {
  return (
    <div
      key={id}
      className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
    >
      <img src={imageUrl} className="object-cover w-full h-48" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {topic}
          </a>
          <span className="text-gray-600"> — {date}</span>
        </p>
        <a
          href="/"
          aria-label="Category"
          title="Visit the East"
          className="inline-block mb-3 text-xl font-semibold leading-6 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {title}
        </a>
        <p className="mb-2 text-gray-700 text-sm">{description}</p>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-600 hover:text-purple-800"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
