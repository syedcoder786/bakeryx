import React, { Component } from 'react';
import '../../styles/product.css';
import { connect } from 'react-redux';
import { findCookie, fetchCookie } from '../../actions/categoryActions';
class Cookie extends Component {

state = {
    msg:false
}

componentDidMount(){
    // console.log(this.props.match.params.id)
    this.props.findCookie({id:this.props.match.params.id})
    this.props.fetchCookie();
  }
  
  onClick = (e) => {
    // const categoryid = e.target.value;
    console.log(e.target.id)
    // this.props.fetchSubCategories({ id:categoryid });
    window.location.assign("/cookie/"+e.target.id)
  }

  onClickme = (e) => {
    this.setState({ msg: true })
  }

  render() {

    const cookieItems = this.props.cookies.map(({ _id, img_path, name, discp, price, percent }) => (
      <div className="boxp" id={_id} onClick={this.onClick}>
          <img src = {img_path} alt = "hi" id={_id} onClick={this.onClick}></img>
          <h5 id={_id} onClick={this.onClick}>{name}</h5>
          <p id={_id} onClick={this.onClick}>{discp}</p>
          <div id="btm">
            <div id="pl">{price}</div>
            <div id="pr">{percent}</div>
          </div>
      </div>
    ));
      
    if(this.state.msg) {
      return (
      <div>
            <div class="containerp">
                <div class="left">
                    <img src={this.props.cookie.img_path} alt="hii" />
                </div>
                <div class="right">
                    <img src="../bg1.jpg" alt="hii" class="sideimg" />
                    <img src="../bg2.jfif" alt="hii" class="sideimg" />
                </div>

            </div>
            <div class="containerp">
                <h6>{this.props.cookie.name}</h6>
                <p>{this.props.cookie.discp}</p>
                <p>{this.props.cookie.price} {this.props.cookie.percent}</p>
            </div>
            <div class="containerp">
                <h5>Related Products</h5>
            </div>
            {/* {this.props.cakeLoading?(<h2><center>Loading...</center></h2>):( */}
            <div class="containerp">
            <section id="boxes">
                <div className="containerboxp">
                {cookieItems}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                </div>
            </section>
            </div>
            {/* )} */}
      
  
      {/* <footer>
        <p>About us</p>
      </footer> */}
  
  
        </div>
      )
    }else{
        return(
            <div>
                <br/><br/><center><button onClick={this.onClickme} class="newbtn">I am 18 years and older</button></center><br/><br/><br/><br/><br/>
            </div>
        )
    }
}
}

const mapStateToProps=state=>({
    cookie:state.categories.cookie,
    cookies:state.categories.cookies,
    // cakeLoading:state.categories.cakeLoading,
    // auth:state.auth
    // newPost:state.post.item
});

export default connect(mapStateToProps, { fetchCookie, findCookie })(Cookie);
// export default Cake;
