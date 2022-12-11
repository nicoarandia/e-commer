import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/pure/form/loginForm';
import UserLoginProvider from './components/container/userLoginProvider';
import HomeProducts from './components/container/homeProducts';
import CardProduct from './components/pure/cardProduct';
import StoreProducts from './store/storeProducts';
import CreateProduct from './components/pure/form/createProduct';
import Articulo from './components/pure/articulo';
import ContainerCards from './components/container/containerCards';
import OfertasProduct from './components/container/ofertasProduct';


function App() {

  
  return(
  <UserLoginProvider>
  <StoreProducts>
    <BrowserRouter>
        <Routes>

          <Route path='/' element={ <LoginForm/> }/>
          <Route path='/homePag' element={ <HomeProducts/> }/>
          <Route path='/create' element={<CreateProduct/>} />
          <Route path='/container/CardProduct' element={<CardProduct/>} />
          <Route path='/product/:cardId' element={ <Articulo/>}/>
          <Route path='/products' element={<ContainerCards/>}/>
          <Route path='/oferta' element={<OfertasProduct/>}/>

        </Routes>
    </BrowserRouter>
  </StoreProducts>
  </UserLoginProvider>

  )
}

export default App;

