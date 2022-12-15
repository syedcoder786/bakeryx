import React, { Component } from 'react';
import '../../styles/product.css';
import { connect } from 'react-redux';
import { findCake, fetchCake } from '../../actions/categoryActions';
class Cake extends Component {

state = {
    msg:false
}

componentDidMount(){
    // console.log(this.props.match.params.id)
    this.props.findCake({id:this.props.match.params.id})
    this.props.fetchCake();
  }
  
  onClick = (e) => {
    // const categoryid = e.target.value;
    console.log(e.target.id)
    // this.props.fetchSubCategories({ id:categoryid });
    window.location.assign("/cake/"+e.target.id)
  }

  onClickme = (e) => {
    this.setState({ msg: true })
  }

  render() {

    const cakeItems = this.props.cakes.map(({ _id, img_path, name, discp, price, percent }) => (
      <div>
      <div className="boxp" id={_id} onClick={this.onClick}>
          <img src = {img_path} alt = "hi" id={_id} onClick={this.onClick}></img>
          <h5 id={_id} onClick={this.onClick}>{name}</h5>
          <p id={_id} onClick={this.onClick}>{discp}</p>
          <div id="btm">
            <div id="pl">{price}</div>
            <div id="pr">{percent}</div>
          </div>
      </div>
      {/* <br/> */}
      </div>
    ));
      
    if(this.state.msg) {
      return (
      <div>
            <div class="containerp">
                <div class="left">
                    <img src={this.props.cake.img_path} alt="hii" />
                </div>
                <div class="right">
                    <img src="../bg1.jpg" alt="hii" class="sideimg" />
                    <img src="../bg2.jfif" alt="hii" class="sideimg" />
                </div>

            </div>
            <div class="containerp">
                <h6>{this.props.cake.name}</h6>
                <p>{this.props.cake.discp}</p>
                <p>{this.props.cake.price} {this.props.cake.percent}</p>
            </div>
            <div class="containerp">
                <h5>Related Products</h5>
            </div>
            {/* {this.props.cakeLoading?(<h2><center>Loading...</center></h2>):( */}
            <div class="containerp">
            <section id="boxes">
                <div className="containerboxp">
                {cakeItems}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
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
    cake:state.categories.cake,
    cakes:state.categories.cakes,
    // cakeLoading:state.categories.cakeLoading,
    // auth:state.auth
    // newPost:state.post.item
});

export default connect(mapStateToProps, { fetchCake, findCake })(Cake);
// export default Cake;
