/*** Imports ***/
// External
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Cookies from "js-cookie";

//Internal
import api from "../../api/api";
import { authentication } from "../../auth/auth";

// Contexts
import LoginContext from "../../contexts/LoginContext";
// import UserDataContext from "../../contexts/UserDataContext";

// Components
import Home from "../Screens/Home/Home";
import Login from "../Screens/Login/Login";
import NotFound from "../Screens/NotFound/NotFound";

// CSS
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  // const [userData, setUserData] = useState({});

  useEffect(() => {
    const cookieUid = Cookies.get("uid");
    let isNewUser = true;
    let tempUser = null;

    const googleLogin = async () => {
      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      try {
        const {
          user: { uid, displayName, email, photoURL },
        } = await signInWithPopup(authentication, provider);
        tempUser = { uid, name: displayName, email, photoURL };
      } catch (err) {
        console.dir(err);
      }
    };

    const login = async () => {
      if (!cookieUid) {
        await googleLogin();
      }
      try {
        const { data } = await api.get(`/users/${cookieUid}`);
        tempUser = data;
        isNewUser = false;
      } catch (err) {
        console.log(err);
      }

      if (isNewUser) {
        try {
          const { data } = await api.post(`/users/`, tempUser);
          tempUser = data;
        } catch (err) {
          throw Error(err);
        }
      } else {
        console.log("tempUser", tempUser);
      }

      tempUser.drinkHistory = (
        await api.get(`/drinks?userId=${tempUser._id}`)
      ).data;

      Cookies.set("uid", tempUser.uid, { expires: 1 });
      setUser(tempUser);
      setLoggedIn(true);
    };

    !loggedIn && login();
  }, [loggedIn]);

  useEffect(() => {
    if (!user) {
      Cookies.remove("uid");
      setUser({});
      setLoggedIn(false);
    }
  }, [user]);

  return (
    <div className="App">
      {/* <UserDataContext.Provider value={{ userData, setUserData }}> */}
      <LoginContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
      {/* </UserDataContext.Provider> */}
    </div>
  );
}

export default App;
