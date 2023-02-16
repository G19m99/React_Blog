import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import '../styles/App.css';
import Home, {loader as homeLoader} from './Home';
import Navbar from './Navbar';
import Posts, {loader as postsLoader} from './Posts';
import Error from './Error';
import QuickTrending, {loader as trendingLoader} from './QuickTrending';
import ComingSoon from './ComingSoon';
function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<><Navbar/><Outlet/></>}>
      <Route index element={<Home/>} loader={homeLoader} errorElement={<Error/>}/>
      <Route path='/comingsoon' element={<ComingSoon/>} />
      <Route path='/trending/:id' element={<QuickTrending/>} loader={trendingLoader} errorElement={<Error/>}/>
      <Route path='/quickread/:id' element={<QuickTrending/>} loader={trendingLoader} errorElement={<Error/>}/>
      <Route path='/posts/:id' element={<Posts/>} loader={postsLoader}/>
      <Route path='*' element={<div style={{ color: 'red' }}>This is not the page you are looking for...</div>} />
    </Route>
  ));  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
