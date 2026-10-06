import React, { useContext } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaGooglePlus,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { AutContext } from "../AutoProvider/ProviderAut";
import { GithubAuthProvider } from "firebase/auth";

function Rigth() {
  const { googlesignIn, githubProvidere } = useContext(AutContext);

  const handlegoogleSignIn = () => {
    googlesignIn()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  //  github sign in method
  const handlegithubsingn = () => {
    githubProvidere()
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(errorMessage, errorCode, email, credential);
        // ...
      });
  };

  return (
    
    <div>
      <div className=" flex flex-col gap-4   ">
        <h1>Login With</h1>
        <button
          onClick={handlegoogleSignIn}
          className=" btn btn-outline   flex  gap-2 btn-primary"
        >
          <FaGooglePlus></FaGooglePlus> Login With google
        </button>
        <button
          onClick={handlegithubsingn}
          className=" btn btn-outline  text-white gap-2 btn-secondary"
        >
          <FaGithub />
          Login With github
        </button>
      </div>

      <div className="mt-10 gap-5 flex flex-col">
        <h3 className="text-[#cac2c2]">Find Us on </h3>
        <div className="w-full flex flex-col gap-3">
          <button className="btn bg-white text-black justify-start gap-2 px-6">
            <FaFacebookF /> Facebook
          </button>

          <button className="btn bg-white text-black justify-start gap-2 px-6">
            <FaTwitter /> Twitter
          </button>

          <button className="btn bg-white text-black justify-start gap-2 px-6">
            <FaInstagramSquare /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rigth;
