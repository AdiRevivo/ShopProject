import logo from './logo.svg';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import  About from './Components/AboutPage/About'
import History from './Components/AboutPage/History'
import Status from './Components/AboutPage/Status'
import Reason from './Components/AboutPage/Reason'
import Home from './Components/Home'
import Login from './Components/Login'
import Products from './Components/Products'
import store from './Components/Redux/Store'
import { BrowserRouter  } from 'react-router-dom'
import User from './Components/User';
import Buy from './Components/Buy'
function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
    <Home></Home>
    </BrowserRouter>
    {/* <Products></Products>
    <Buy></Buy> */}
    {/* <User></User> */}
    </Provider>
    {/* <About>
      <History></History>
      <Reason></Reason>
      <Status></Status>
    </About> */}
    </div>
    );
  }
  
  export default App;
  