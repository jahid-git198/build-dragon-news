import { Link, NavLink } from "react-router";
import users from "../../assets/user.png";
import { AutContext } from "../../AutoProvider/ProviderAut";
import { use } from "react";

function Navbar() {
  const { user, signOot } = use(AutContext);

  const handlelogout = () => {
    signOot();
  };

  return (
    <div className=" flex items-center mt-12 w-11/12 mx-auto justify-between">
      <div>{user && user.email}</div>

      <div>
        <ul className="flex gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Career">Career</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex gap-5 items-center ">
        <img
          className=" w-10   rounded-full "
          src={`${user && user ? user.photoURL : users}`}
          alt=""
        />
        {user ? (
          <button onClick={handlelogout} className="btn ">
            logout
          </button>
        ) : (
          <Link className="btn" to="/auth/login">
            login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
