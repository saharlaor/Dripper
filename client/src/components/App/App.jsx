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
import UserDataContext from "../../contexts/UserDataContext";

// Components
import Home from "../Screens/Home/Home";
import Login from "../Screens/Login/Login";
import NotFound from "../Screens/NotFound/NotFound";

// CSS
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const login = async () => {
      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      try {
        const {
          user: { uid, displayName, email, photoURL, accessToken },
        } = await signInWithPopup(authentication, provider);
        setUser({ uid, displayName, email, photoURL, accessToken });
      } catch (err) {
        console.dir(err);
      }
    };

    !user.uid && login();
  }, [user]);

  useEffect(() => {
    // Get the user from the DB, if no user login
    Cookies.set("uid", user.uid, { expires: 1 });
    const getUserData = async () => {
      if (user) {
        const { data } = await api.get(`users?uid=${user.id}`);
        setUserData(data);
      } else {
        setUserData({});
      }
    };
    getUserData();
  }, [user]);

  return (
    <div className="App">
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <LoginContext.Provider value={{ user, setUser }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </LoginContext.Provider>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
