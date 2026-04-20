import React from "react";
import Header from "../Componet/Header/Header";
import Rigth from "../Rigth/Rigth";
import { useLoaderData, useParams } from "react-router";
import SingleNewscard from "./SingleNewscard";

export default function NewscardDetales() {
  const { id } = useParams();
//   const num = parseInt(id);

  const SingleNews = useLoaderData();

  return (
    <div>
      <header className="mt-5">
        <Header></Header>
      </header>
      <main className=" mx-auto w-11/12 grid grid-cols-12 gap-10 mt-10  mb-20">
        {/*  section  */}
        <section className=" col-span-9">
          <h1>Dragon News</h1>
           {
             SingleNews.filter( news => news.id === id ).map( news => <SingleNewscard key={news.id} news={news} /> )
           }
        </section>
        {/* asite  */}
        <aside className="col-span-3">
          <Rigth></Rigth>
        </aside>
      </main>
    </div>
  );
}
