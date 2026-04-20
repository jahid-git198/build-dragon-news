import React, { useContext } from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { AutContext } from "../../AutoProvider/ProviderAut";

function Register() {
  const { createUser, setuser, updateDetails } = useContext(AutContext);

  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const submitRegister = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const photo = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    createUser(email, password)
      .then((resul) => {
        const user = resul.user;

        updateDetails({ displayName: name, photoURL: photo })
          .then(() => {
            setuser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            // ...

            setuser(user);
          });
      })
      .catch((error) => {
        const errorcode = error.code;
        const errormessage = error.massage;
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">
            {" "}
            Login your account
          </h2>

          <form onSubmit={submitRegister} className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                name="name"
              />
            </div>

            <div>
              <label className="label">Photo Url</label>
              <input
                type="text"
                placeholder=" Photo Url"
                className="input input-bordered w-full"
                name="photo"
              />
            </div>

            <div>
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                name="email"
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
                className="absolute right-2  !bg-[#1D232A] justify-center items-center top-7 text-white px-2 py-1 rounded"
              >
                {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </button>
            </div>

            <div className=" flex gap-3">
              <input type="checkbox" name="chekbox" id="" />I agree to the Terms
              & Conditions
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?
            <Link to="/auth/login" className="text-primary ml-2">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
