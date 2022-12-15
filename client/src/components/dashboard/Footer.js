import React, { Component } from 'react';
import '../../styles/header.css'

class Footer extends Component {

  render() {

      return (
        <div>
            <footer>
                <h3>Click on below</h3>
                <h4>
                    <a href="/">1-Cakes</a>
                </h4>
                <h4>
                    <a href="/cookies">2-Cookies</a>
                </h4>
                <h4>
                    <a href="/roles">3-Rolls</a>
                </h4>
                <img src="/footer.jfif" alt="hii"/>
                <p>Alex Web Deisgn, Copyright &copy; 2021</p>
	        </footer>
        </div>      
                
    )
    
    }
}

// const mapStateToProps=state=>({
//     // posts:state.post.items,
//     // postLoading:state.post.postLoading,
//     auth:state.auth
// });

export default Footer;
