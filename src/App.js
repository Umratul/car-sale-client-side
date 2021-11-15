
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Review from './Pages/Home/Review/Review';
import Reviews from './Pages/Home/Reviews/Reviews';

import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';

import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/purchase/:serviceId">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
