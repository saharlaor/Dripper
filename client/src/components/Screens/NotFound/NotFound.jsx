import React from "react";
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

import "./NotFound.css";

function NotFound() {
  const navigator = useNavigate();

  const handleBackHomeClick = () => {
    navigator("/");
  };

  return (
    <div className="NotFound">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={handleBackHomeClick}>
            Back Home
          </Button>
        }
      />
    </div>
  );
}

export default NotFound;
