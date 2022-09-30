import "./App.scss";
import { useContext, useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { AppContext } from './context';
import { Strategy } from "./pages/Strategy";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { getFooter } from "./api/api";
import { Invincibility } from "./pages/Invincibility";

function App() {
  const context = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFooter();
      context.dispatch({ type: 'setFooter', data: response });
    };
    fetchData();
  }, []);

  // todo: add errorElements for routes
  // todo: fix date dependencies(where it's needed)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Invincibility />,
    },
    {
      path: "/strategy",
      element: <Strategy />,
    },
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
        <Invincibility />
        {context.state.isFooterLoaded === false && <div></div>}
        {context.state.isFooterLoaded === true && <Footer />}
      </div>
    </>
  );
}

export default App;