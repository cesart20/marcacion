import api from "./api";

export default {
  login({ email, password }) {
    return api.post("/login", { email, password });
  },
  marcar({ position, token }) {
    console.log(token);
    return api.post(
      "/marcaciones",
      { position },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  },
};
