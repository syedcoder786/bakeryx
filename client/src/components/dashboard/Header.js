import React, { Component } from 'react';
import '../../styles/header.css'

class Header extends Component {

  render() {

      return (
          <div>
            <header>
                <div className="container">
                    <div className="lefdiv">
                        <a href="/"><img src="./bbbb.png" width="40%" height="20%" alt="hii" href="/"/></a>
                    </div>
                    <div class="rigdiv">
                    <div class="frm">
                        <p class="anch">Search here for any queries</p>
                        <div id="inpform">
                        <form><input type="name" id="name" placeholder="Search..." /><input type="submit" id="submit" value="Search" /></form>
                        </div>
                    </div>
				<nav>
					<ul>
					   <li><a href="/" class="anch">Language</a></li>
					   <li><a href="/" class="anch">Content</a></li>
					   <li><a href="/" class="anch">Straight</a></li>
					</ul>
				</nav>
			    </div>
		        </div>
	        </header>
            <section class="branding">
                <div class="containercat">
                    <ul id="cat">
                        <li><a href="/" class="anch2">Cakes</a></li>
                        <li><a href="/cookies" class="anch2">Cookies</a></li>
                        <li><a href="/roles" class="anch2">Rolls</a></li>
                    </ul>
                </div>
            </section>

            <div>
                <section>
                    <h1 class="best">Best of June</h1>
                </section>
            </div>

    </div>
                
    )
    
    }
}

// const mapStateToProps=state=>({
//     // posts:state.post.items,
//     // postLoading:state.post.postLoading,
//     auth:state.auth
// });

export default Header;
