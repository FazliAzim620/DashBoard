
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './components/pages/home/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NewUser from './components/pages/NewUser/NewUser';
import UserList from './components/UserList/UserList';
import User from './components/pages/user/User';
import Products from './components/Products/Products';
import Product from './components/pages/product/Product';
import Newproduct from './components/pages/Newproduct/Newproduct';
function App() {
  return (
    <>
    <Router >
    <Topbar/>
      
      <div className="container">

      <Sidebar/>
      <Switch>
        <Route exact path='/' component={Home} >
      <Home/>
        </Route>
        <Route exact path='/userlist' component={UserList}>
        <UserList/>
        </Route>
        <Route exact path='/user' component={User}>
        <User/>
        </Route>
        <Route exact path='/newuser' component={NewUser}>
        <NewUser/>
        </Route>
        <Route exact path='/products' component={Products}>
        <Products/>
        </Route>
        <Route exact path='/product' component={Product}>
        <Product/>
        </Route>
        <Route exact path='/newproduct' component={Newproduct}>
        <Newproduct/>
        </Route>
      </Switch>
      
     
      
      </div>
    </Router>
 


      </>
  );
}

export default App;
