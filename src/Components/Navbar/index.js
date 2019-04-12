
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="container-navbar" >
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand font-white" href="#">SHMESLA</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link font-white font-navbar" href="#">Tool A</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-white font-navbar" href="#">Tool B</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-white font-navbar" href="#">Tool C</a>
              </li>
              <li className="nav-item">
                <a className="nav-link font-white font-navbar" href="#">Tool D</a>
              </li>
            </ul>
            <span className="icons-test" onClick={this.props.sideMenuToggle}>
              {!this.props.sideMenuDisplay && <i class="fas fa-bars icon-color-white"></i>}
              {this.props.sideMenuDisplay && <i class="fas fa-times icon-color-black"></i>}
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;


