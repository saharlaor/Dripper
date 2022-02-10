import React, { useContext, useEffect, useState } from "react";
import { Layout, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import LoginContext from "../../contexts/LoginContext";
import "./Header.css";
import { Link } from "react-router-dom";

const { Header: AntHeader } = Layout;

function Header() {
  const { user, setUser } = useContext(LoginContext);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  const handleLogoutClick = () => {
    setUser(null);
  };

  return (
    <AntHeader>
      <span>Welcome, {name}</span>
      <Link to="/">
        <Button type="primary">Home</Button>
      </Link>
      <span>
        {email} <img src={photoURL} alt={name} />
      </span>
      <Button
        type="primary"
        icon={<LogoutOutlined />}
        onClick={handleLogoutClick}>
        Logout
      </Button>
    </AntHeader>
  );
}

export default Header;
