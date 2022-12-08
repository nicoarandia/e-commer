import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/pure/form/loginForm';
import UserLoginProvider from './components/container/userLoginProvider';
import HomeProducts from './components/container/homeProducts';


function App() {

  
  return(
  <UserLoginProvider>
  <BrowserRouter>
      <Routes>

        <Route path='/' element={ <LoginForm/> }/>
        <Route path='/homePag' element={ <HomeProducts/> }/>

      </Routes>
  </BrowserRouter>
  </UserLoginProvider>

  )
}

export default App;

