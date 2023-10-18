import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Game } from "./pages/game";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Hello world! <a href="/sign-in">sign-in</a>
      </div>
    ),
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);
