import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import Books from './components/Books';
import Layout from './components/Layout';
import Categories from './components/Categories';
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index path="/" element={<Books />}/>
      <Route index path="/categories" element={<Categories />}/>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
