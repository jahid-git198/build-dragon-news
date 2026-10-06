import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AutContext } from "../../AutoProvider/ProviderAut";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase auth/Firebase.config";

function Login() {
    const lacation = useLocation();
  const navigate = useNavigate();
  const { signIn, sendResetEmail } = useContext(AutContext);
  const [unerror, setunerror] = useState("");
  const [show, setshow] = useState(false);
  const Submitlogin = (e) => {
    e.preventDefault();
    //  email?
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    signIn(email, password)
      .then((resul) => {
        const user = resul.user;
        navigate(lacation.state ? lacation.state : "/");
      })
      .catch((error) => {
        const errorcode = error.code;
        const errormassage = error.massage;
        setunerror(errorcode);
      });
  };

  //  forgate password
   const handleForgetPassword = async (email) =>{

      try {
        await  sendResetEmail(email)
         console.log( "success")
        
      } catch (error) {
        console.log(error)
        
      }
   }
   
  //  }
  //  lacatio and navigate

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Login your account</h1>
          <form onSubmit={Submitlogin} className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                name="email"
                required
               
              />
            </div>

            <div className=" relative">
              <label className="label">Password</label>
              <input
                type={show ? " text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full"
                name="password"
              />

              <button
                onClick={() => setshow(!show)}
                type="button"
                className="absolute right-2  bg-[#1D232A] justify-center items-center top-7 text-white px-2 py-1 rounded"
              >
                {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>

              <div>
                {unerror && <p className="text-red-500"> {unerror} </p>}
              </div>
            </div>

            <p className=" text-sm text-primary">
              <button type="button" onClick={handleForgetPassword}>Forgate Password</button>
            </p>

            <div className=" flex gap-3 ">
              <input type="checkbox" name="chekbox" id="" />I agree to the Terms
              & Conditions
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-primary ml-2">
              Register
            </Link>
  
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
