import React, { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Cakes from '../Cakes';
import Cake from '../category/Cake';
import Roles from '../Roles';
import Role from '../category/Role';
import Cookies from '../Cookies';
import Cookie from '../category/Cookie';
import AddCake from '../AddCake';
// import '../../App.css';
// import {connect} from 'react-redux';

class Dashboard extends Component {
 

  render() {

      return (
        <div>
            {/* <Header/> */}
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/">
                      <Cakes/>
                    </Route>
                    <Route exact path="/cookies">
                      <Cookies/>
                    </Route>
                    <Route exact path="/roles">
                      <Roles/>
                    </Route>
                    <Route path="/cake/:id" component = {Cake} />
                    <Route exact path="/roles">
                      <Roles/>
                    </Route>
                    <Route path="/role/:id" component = {Role} />
                    <Route exact path="/cookies">
                      <Cookies/>
                    </Route>
                    <Route path="/cookie/:id" component = {Cookie} />

                    <Route path="/addrecord" component = {AddCake} />
                    {/* <Route path="/cake/:id" component = {Subcategories} />
                    <Route path="/subcategory/:id" component = {Products} />
                    <Route path="/logout" component = {Logout} />
                    <Route path="/product/:id" component = {Product} /> */}
                    {/* <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/cart">
                      <Cart />
                    </Route> */}
                  </Switch> 
                </BrowserRouter>
        </div>
      )
    
    }
}

// const mapStateToProps=state=>({
//     // posts:state.post.items,
//     // postLoading:state.post.postLoading,
//     auth:state.auth
// });

// export default connect(mapStateToProps)(Dashboard);
export default Dashboard;
