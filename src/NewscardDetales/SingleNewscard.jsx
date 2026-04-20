import React from "react";
import { useNavigate } from "react-router";

function SingleNewscard({ news }) {
  const { title, description, image_url, details, author } = news;
  const { img } = author;

  const navigate = useNavigate();
  return (
    <div className="max-w-xl mt-3 p-5 mx-auto bg-white shadow-md rounded-lg border">
      {/* Image */}
      <div className="w-full rounded-lg overflow-hidden">
        <div className="w-full aspect-[16/9]">
          <img src={ image_url} alt="news" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>

        <p className="text-sm text-gray-500 mb-2">Wednesday, August 24, 2022</p>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">{details}</p>

        <button
          onClick={ () => navigate("/")}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          ← All news in this category
        </button>
      </div>
    </div>
  );
}

export default SingleNewscard;
