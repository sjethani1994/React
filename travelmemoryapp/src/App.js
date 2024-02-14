import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/UIC/Header";
import Home from "./components/pages/Home";
import ExperienceDetails from "./components/pages/ExperienceDetails";
import AddExperience from "./components/pages/AddExperience";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/addexperience',
    element: <AddExperience />,
  },
  {
    path: '/experiencedetails/:id',
    element: <ExperienceDetails />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
