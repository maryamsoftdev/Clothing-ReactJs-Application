// import { Fragment } from 'react';
import { Routes,Route,} from 'react-router-dom';
// import { DataRouterStateContext } from 'react-router/dist/lib/context';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';


const Shop =()=>{
return <h1>i am the shop page</h1>

}

const App = () => {
  return (
    
    <Routes>

      <Route path='/' element={<Navigation/>}>    
       <Route index element={<Home/>}/>    
       <Route path='shop' element={<Shop/>}/>    
       <Route path='sign-in' element={<SignIn />}/>    
      </Route>
      </Routes>
  
  );
};

export default App;