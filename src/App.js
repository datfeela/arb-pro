import "./App.scss";
import { Strategy } from "./pages/Strategy";
import { Invincibility } from "./pages/Invincibility";
import { BasicStrategiesRecordsSale } from "./pages/BasicStrategiesRecordsSale";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  // todo0: optimize invincibility, LAZYLOAD for videos

  // todo1: add errorElements for routes when router is added to app
  // todo2: fix data dependencies(where it's needed), {data && <block/>}
  // ! check again after updating blocks
  // todo3: ask if "form popup" form_title is needed to post
  // todo: осталось добавить логику блоку "Расписание бесплатных вебинаров", сделать слайдер в блоке "Кто уже стал несокрушимым",  добавить везде корректные ссылки и поменять в формах поля на необходимые/Нужны данные для всего этого

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Invincibility />,
    },
    {
      path: "/strategy",
      element: <Strategy />,
    },
    {
      path: "/basic",
      element: <BasicStrategiesRecordsSale />
    }
  ]);

  return (
    <>
      <div className="App">
        {/* <RouterProvider router={router} /> */}
        {/* <Invincibility /> */}
        {/* <Strategy/> */}
        <BasicStrategiesRecordsSale />
      </div>
    </>
  );
}

export default App;