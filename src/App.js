import Home from "./Screen/Home";
import List from "./Screen/List";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router= createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/users",
    element:<List/>
  },

])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
      <Home />
      <List/>
  
      </RouterProvider>
    </div>
  );
}

export default App;
