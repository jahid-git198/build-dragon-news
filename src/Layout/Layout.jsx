import { Outlet, useNavigate, useNavigation } from "react-router";
import MarquiNews from "../Componet/MarquiNews";
import Header from "../Componet/Header/Header";
import Navbar from "../Componet/Nabar/Navbar";
import Left from "../Leftassest/Left";
import Rigth from "../Rigth/Rigth";
import Footer from "../Footer/Footer";
import Loading from "../PrivateRoute/Loading";

function Layout() {
  // dainamik time and date

  const { state } = useNavigation();

  return (
    <div>
      {/*  header section  */}
      <header>
        <div>
          <Header></Header>
        </div>

        {/*   news line  navbar  */}

        {/* news pappers  */}

        <div>
          <MarquiNews></MarquiNews>
        </div>

        {/*  navbar  */}

        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      {/*  main section  */}
      <main className="grid w-11/12 mx-auto gap-10 grid-cols-12 mt-10 min-h-[80vh]">
        <aside className="col-span-3 sticky top-0 h-screen">
          <Left />
        </aside>

        <section className="col-span-6 flex justify-center">
          {state && state === "loading" ? <Loading></Loading> : <Outlet />}
        </section>

        <aside className="col-span-3 sticky top-0 h-screen">
          <Rigth />
        </aside>
      </main>

      {/*  footer section  */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Layout;
