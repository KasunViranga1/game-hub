import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "92ba97c87325445a995a79f2e64c8a0a",
  },
});
