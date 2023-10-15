import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/sign-in";
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
]);
