import { Routes,Route } from 'react-router-dom';
// import { DataRouterStateContext } from 'react-router/dist/lib/context';
import Home from './routes/home/home.component';

const App = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>    
  </Routes>
  // </BrowserRouter>
  );
};

export default App;