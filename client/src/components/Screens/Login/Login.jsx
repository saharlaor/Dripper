import React, { useEffect, useNavigate } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { authentication } from "../../../auth/auth";
import "./Login.css";

function Login() {
  const navigator = useNavigate();

  useEffect(() => {
    (async () => {
      const provider = new GoogleAuthProvider();

      try {
        const user = await signInWithPopup(authentication, provider);
        console.log(user);
      } catch (err) {
        console.dir(err);
      }

      navigator("/");
    })();
  }, [navigator]);
  return <div></div>;
}

export default Login;
