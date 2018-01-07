import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component{
    render() {
        return (
          <footer className="site-footer">
              <div className="galaxy">
                  <ul>
                      <li>GitHub <a href="https://github.com/AliceWonderland">@AliceWonderland</a></li>
                      <li>Twitter <a href="https://twitter.com/omgheartcrafts">@OmgHeartCrafts</a></li>
                      <li>Contact <a href="">@Gmail</a></li>
                  </ul>
                  <div className="galaxy-content" data-animate-in="intro">
                      Embed Facebook Like
                      <div className="fb-like" data-href="https://alicechuang.com" data-width="200px" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                  </div>

                  <figure className="shooting-star" style={{top: '8%', transform: 'rotate(151deg)'}}>
                      <img src="assets/img/shooting-star.svg" alt="shooting star" />
                  </figure>
                  <figure className="shooting-star-right" style={{top: '10%', transform: 'rotate(112deg)'}}>
                      <img src="assets/img/shooting-star.svg" alt="shooting star" />
                  </figure>
                  <div className="stars"></div>
                  <div className="stars-lg"></div>
              </div>
              <div className="footer-bar">
                  <div><small>Chrome xxx and above on Mac</small></div>
                  <div><small>&copy; AliceChuang.com 2001-2017</small></div>
              </div>
          </footer>
        )
    }
}