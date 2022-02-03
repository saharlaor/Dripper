/*** Imports ***/
// External
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { authentication } from "../../auth/auth";

// Contexts
import LoginContext from "../../contexts/LoginContext";

// Components
import Home from "../Screens/Home/Home";
import Login from "../Screens/Login/Login";
import NotFound from "../Screens/NotFound/NotFound";

// CSS
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const login = async () => {
      const provider = new GoogleAuthProvider();

      try {
        const {
          user: { uid, displayName, email, photoURL, accessToken },
        } = await signInWithPopup(authentication, provider);
        setUser({ uid, displayName, email, photoURL, accessToken });
      } catch (err) {
        console.dir(err);
      }
    };

    login();
  }, []);

  return (
    <div className="App">
      <LoginContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
