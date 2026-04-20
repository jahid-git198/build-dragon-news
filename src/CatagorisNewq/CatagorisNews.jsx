import { useLoaderData, useParams } from "react-router";
import Newscard from "./Newscard";

function CatagorisNews() {
  const { id } = useParams();
  // const num = parseInt(id)

  const Newsdata = useLoaderData() || [];
 

  let filterdata = [];

  if (id === "0") {
    filterdata = Newsdata;
  } else if (id === "1") {
    filterdata = Newsdata.filter((news) => news.others?.is_today_pick === true);
  } else {
    filterdata = Newsdata.filter((news) => news.category_id == id);
  }

  return (
    <div>
      <h1>catagorisNews {filterdata.length}</h1>

      <div>
        {filterdata.map((card) => (
          <Newscard key={card.id} card={card}></Newscard>
        ))}
      </div>
    </div>
  );
}

export default CatagorisNews;
