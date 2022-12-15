import React, { Component } from 'react';
import '../styles/header.css';
import { connect } from 'react-redux';
import { fetchCookie } from '../actions/categoryActions';
class Cookies extends Component {

  componentDidMount(){
    this.props.fetchCookie();
  }

  onClick = (e) => {
    // const categoryid = e.target.value;
    console.log(e.target.id)
    // this.props.fetchSubCategories({ id:categoryid });
    window.location.assign("/cookie/"+e.target.id)
  }

  render() {

    const cookieItems = this.props.cookies.map(({ _id, img_path, name, discp, price, percent }) => (
      <div className="box" id={_id} onClick={this.onClick}>
          <img src = {img_path} alt = "hi" id={_id} onClick={this.onClick}></img>
          <h5 id={_id} onClick={this.onClick}>{name}</h5>
          <p id={_id} onClick={this.onClick}>{discp}</p>
          <div id="btm">
            <div id="pl">{price}</div>
            <div id="pr">{percent}</div>
          </div>
      </div>
    ));
      
      return (
      <div>
      {this.props.cookieLoading?(<h2><center>Loading...</center></h2>):(
        <section id="boxes">
        <div className="containerbox">
          {cookieItems}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
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
    cookies:state.categories.cookies,
    cookieLoading:state.categories.cookieLoading,
    // auth:state.auth
    // newPost:state.post.item
});

export default connect(mapStateToProps, { fetchCookie })(Cookies);
// export default Cake;
