import React, { use } from "react";
import PromisNav from "./PromisNav";

const catagoridata = fetch("categories.json").then((res) => res.json());
function Catagoris() {
  const Promisdata = use(catagoridata);

  return (
    <div>
      <h1>All Categories {Promisdata.length}</h1>

      <ul className="flex flex-col gap-3 w-full">
        {Promisdata.map((Promis) => (
          <PromisNav key={Promis.id} Promis={Promis} />
        ))}
      </ul>
    </div>
  );
}

export default Catagoris;
