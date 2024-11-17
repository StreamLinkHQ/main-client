import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { appPaths } from "./app-paths";
import { Home, CreateLivestream, ViewLivestream } from "../features";
// import { AuthContextProvider } from "../context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: appPaths.home,
        element: <Home />,
      },
      // {
      //   path: appPaths.profile,
      //   element: <Profile />
      // },
      {
        path: appPaths.create,
        element: <CreateLivestream />,
      },
      // {
      //   path: appPaths.explore,
      //   element: <Explore />,
      // },
      {
        path: appPaths.meetingId,
        element: <ViewLivestream />,
      },
    ],
  },
]);
export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
