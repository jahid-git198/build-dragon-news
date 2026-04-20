import { NavLink } from "react-router";
import "../App.css";

function PromisNav({ Promis }) {
  return (
    <div>
      <NavLink
        className="btn w-full
            hover:bg-red-100
            border-0 bg-white text-[#9F9F9F]"
        key={Promis.id}
        to={`/catagorisnews/${Promis.id}`}
      >
        {Promis.name}
      </NavLink>
    </div>
  );
}

export default PromisNav;
