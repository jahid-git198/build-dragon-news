import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { Link } from "react-router";

function Newscard({ card }) {
  const {
    id,
    category_id,
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
    tags,
    others,
  } = card;

  const { number, badge } = rating;
  const { name, published_date, img } = author;
  const { is_today_pick, is_trending } = others;

  const [Time, setTime] = useState(new Date());
  const Clock = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  };
  const pad = (n) => n.toString().padStart(2, "0");
  return (
    <div className="card bg-base-100 shadow-md border">
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img src={img} alt="author" className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">
              {pad(Time.getDate())}-{pad(Time.getMonth() + 1)}-
              {Time.getFullYear()} | {pad(Time.getHours())}:
              {pad(Time.getMinutes())}:{pad(Time.getSeconds())}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <span>
            <CiBookmark />
          </span>
          <span>
            <IoMdShare />
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img src={image_url} alt="news" className="rounded-lg w-full" />
      </figure>

      {/* Details */}
      <div className="px-4 text-accent">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link
              to={`/NewscardDetales/${id}`}
              className="text-primary font-semibold cursor-pointer hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center gap-2 text-orange-500">
          <FaStar />
          <span>{number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default Newscard;
