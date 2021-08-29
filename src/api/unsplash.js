import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID s7ODlAJCfDOLwN8oJgwKueLGwVBwsCtEYRzx0OEjSyM",
  },
});
