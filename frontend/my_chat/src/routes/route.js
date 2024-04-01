import Chat from "../views/pages/Chat";
import Login from "../views/pages/Login";
import Register from "../views/pages/Register";

const routes = [
  { path: "/login", component: Login, isPrivate: false },
  { path: "/register", component: Register, isPrivate: false },
  { path: "/", component: Chat, isPrivate: true },
];

export default routes;
