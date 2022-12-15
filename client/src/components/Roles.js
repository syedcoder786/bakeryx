import React, { Component } from 'react';
import '../styles/header.css';
import { connect } from 'react-redux';
import { fetchRole } from '../actions/categoryActions';
class Roles extends Component {

  componentDidMount(){
    this.props.fetchRole();
  }

  onClick = (e) => {
    // const categoryid = e.target.value;
    console.log(e.target.id)
    // this.props.fetchSubCategories({ id:categoryid });
    window.location.assign("/role/"+e.target.id)
  }

  render() {

    const roleItems = this.props.roles.map(({ _id, img_path, name, discp, price, percent }) => (
      <div className="box" id={_id} onClick={this.onClick}>
          <img src = {img_path} alt = "hi" id={_id} onClick={this.onClick}></img>
          <h5 id={_id} onClick={this.onClick}>{name}</h5>
          <p id={_id} onClick={this.onClick}>{discp}</p>
          <div id="btm" >
            <div id="pl">{price}</div>
            <div id="pr">{percent}</div>
          </div>
      </div>
    ));
      
      return (
      <div>
      {this.props.roleLoading?(<h2><center>Loading...</center></h2>):(
        <section id="boxes">
        <div className="containerbox">
          {roleItems}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        </div>
      </section>
      )}
      
  
      {/* <footer>
        <p>About us</p>
      </footer> */}
  
  
        </div>
      )
    
}
}

const mapStateToProps=state=>({
    roles:state.categories.roles,
    roleLoading:state.categories.roleLoading,
    // auth:state.auth
    // newPost:state.post.item
});

export default connect(mapStateToProps, { fetchRole })(Roles);
// export default Cake;
