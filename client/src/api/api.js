import axios from "axios";

const url =
  process.env.NODE_ENV === "production"
    ? "api"
    : `http://localhost:${process.env.PORT || 9000}/api`;

export default axios.create({ baseURL: url });
