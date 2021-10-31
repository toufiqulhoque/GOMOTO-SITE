import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Home/Banner/Banner';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './components/context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import CreateService from './components/CreateService/CreateService';
import AllService from './components/AllService/AllService';

import AddToCart from './components/NewUser/NewUser';
import NewUser from './components/NewUser/NewUser';
import MyOrder from './components/Myorder/MyOrder';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/order/:serviceId'>
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute exact path='/createService'>
              <CreateService></CreateService>
            </PrivateRoute>
            <PrivateRoute exact path='/allService'>
              <AllService></AllService>
            </PrivateRoute>
            <Route exact path='/manageAllOrder'>
              <ManageAllOrder></ManageAllOrder>
            </Route>
            <PrivateRoute exact path='/addOrders'>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
