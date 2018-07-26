/**
 *
 * VideoBack
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectVideoBack from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// Load image files
import '!file-loader?name=[name].[ext]!../../assets/images/logo.png';
import '!file-loader?name=[name].[ext]!../../assets/images/logo_mobile.png';
import '!file-loader?name=[name].[ext]!../../assets/images/video_fix.png';
import '!file-loader?name=[name].[ext]!../../assets/images/thumb_restaurant.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/thumb_restaurant_2.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/thumb_restaurant_3.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/thumb_restaurant_4.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/thumb_restaurant_5.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/thumb_restaurant_6.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/bg_office.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/submit_restaurant.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/delivery.jpg';
import '!file-loader?name=[name].[ext]!../../assets/images/cards.png';

// Load video files
import '!file-loader?name=[name].[ext]!../../assets/video/intro.mp4';

// Load php files
import '!file-loader?name=[name].[ext]!../../assets/newsletter.php';

// script
import '!file-loader?name=[name].[ext]!../../assets/js/video_header.js';

/* eslint-disable react/prefer-stateless-function */
export class VideoBack extends React.PureComponent {
  render() {
    return (
      <div>
        {/* SubHeader =============================================== */}
        <section className="header-video">
        <div id="hero_video">
            <div id="sub_content">
                <h1>Order Takeaway or Delivery Food</h1>
                <p>
                    Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                </p>
                <form method="post" action="list_page.html">
                    <div id="custom-search-input">
                        <div className="input-group">
                            <input type="text" className=" search-query" placeholder="Your Address or postal code"/>
                            <span className="input-group-btn">
                            <input type="submit" className="btn_search" value="submit"/>
                            </span>
                        </div>
                    </div>
                </form>
            </div>{/* End sub_content */}
        </div>
        <img src="video_fix.png" alt="" className="header-video--media" data-video-src="intro" data-teaser-source="intro" data-provider="Vimeo" data-video-width="1920" data-video-height="960"/>
        <div id="count" className="hidden-xs">
            <ul>
                <li><span className="number">2650</span> Restaurant</li>
                <li><span className="number">5350</span> People Served</li>
                <li><span className="number">12350</span> Registered Users</li>
            </ul>
        </div>
        </section>{/* End Header video */}
        {/* End SubHeader ============================================ */}
        
      {/* Content ================================================== */}
            <div className="container margin_60">
            
            <div className="main_title">
                <h2 className="nomargin_top" >How it works</h2>{/*style="padding-top:0"*/}
                <p>
                    Cum doctus civibus efficiantur in imperdiet deterruisset.
                </p>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="box_home" id="one">
                        <span>1</span>
                        <h3>Search by address</h3>
                        <p>
                            Find all restaurants available in your zone.
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box_home" id="two">
                        <span>2</span>
                        <h3>Choose a restaurant</h3>
                        <p>
                            We have more than 1000s of menus online.
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box_home" id="three">
                        <span>3</span>
                        <h3>Pay by card or cash</h3>
                        <p>
                            It's quick, easy and totally secure.
                        </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="box_home" id="four">
                        <span>4</span>
                        <h3>Delivery or takeaway</h3>
                        <p>
                            You are lazy? Are you backing home?
                        </p>
                    </div>
                </div>
            </div>{/* End row */}
            
            <div id="delivery_time" className="hidden-xs">
                <strong><span>2</span><span>5</span></strong>
                <h4>The minutes that usually takes to deliver!</h4>
            </div>
            </div>{/* End container */}
                
        <div className="white_bg">
        <div className="container margin_60">
            
            <div className="main_title">
                <h2 className="nomargin_top">Choose from Most Popular</h2>
                <p>
                    Cum doctus civibus efficiantur in imperdiet deterruisset.
                </p>
            </div>
            
            <div className="row">
                <div className="col-md-6">
                    <a href="detail_page.html" className="strip_list">
                    <div className="ribbon_1">Popular</div>
                        <div className="desc">
                            <div className="thumb_strip">
                                <img src="thumb_restaurant.jpg" alt=""/>
                            </div>
                            <div className="rating">
                                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                            </div>
                            <h3>Taco Mexican</h3>
                            <div className="type">
                                Mexican / American
                            </div>
                            <div className="location">
                                135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                            </div>
                            <ul>
                                <li>Take away<i className="icon_check_alt2 ok"></i></li>
                                <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                            </ul>
                        </div>{/* End desc*/}
                    </a>{/* End strip_list*/}
                  <a href="detail_page.html" className="strip_list">
                  <div className="ribbon_1">Popular</div>
                        <div className="desc">
                            <div className="thumb_strip">
                                <img src="thumb_restaurant_2.jpg" alt=""/>
                            </div>
                            <div className="rating">
                                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                            </div>
                            <h3>Naples Pizza</h3>
                            <div className="type">
                                Italian / Pizza
                            </div>
                            <div className="location">
                                135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                            </div>
                            <ul>
                                <li>Take away<i className="icon_check_alt2 ok"></i></li>
                                <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                            </ul>
                        </div>{/* End desc*/}
                    </a>{/* End strip_list*/}
                    <a href="detail_page.html" className="strip_list">
                    <div className="ribbon_1">Popular</div>
                        <div className="desc">
                            <div className="thumb_strip">
                                <img src="thumb_restaurant_3.jpg" alt=""/>
                            </div>
                            <div className="rating">
                                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                            </div>
                            <h3>Japan Food</h3>
                            <div className="type">
                                Sushi / Japanese
                            </div>
                            <div className="location">
                                135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                            </div>
                            <ul>
                                <li>Take away<i className="icon_check_alt2 ok"></i></li>
                                <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                            </ul>
                        </div>{/* End desc*/}
                    </a>{/* End strip_list*/}
                </div>{/* End col-md-6*/}
                <div className="col-md-6">
                    <a href="detail_page.html" className="strip_list">
                    <div className="ribbon_1">Popular</div>
                        <div className="desc">
                            <div className="thumb_strip">
                                <img src="thumb_restaurant_4.jpg" alt=""/>
                            </div>
                            <div className="rating">
                                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                            </div>
                            <h3>Sushi Gold</h3>
                            <div className="type">
                                Sushi / Japanese
                            </div>
                            <div className="location">
                                135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                            </div>
                            <ul>
                                <li>Take away<i className="icon_check_alt2 ok"></i></li>
                                <li>Delivery<i className="icon_close_alt2 no"></i></li>
                            </ul>
                        </div>{/* End desc*/}
                    </a>{/* End strip_list*/}
                    <a href="detail_page.html" className="strip_list">
                    <div className="ribbon_1">Popular</div>
                        <div className="desc">
                            <div className="thumb_strip">
                                <img src="thumb_restaurant_5.jpg" alt=""/>
                            </div>
                            <div className="rating">
                                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                            </div>
                            <h3>Dragon Tower</h3>
                            <div className="type">
                                Chinese / Thai
                            </div>
                            <div className="location">
                                135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                            </div>
                            <ul>
                                <li>Take away<i className="icon_check_alt2 ok"></i></li>
                                <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                            </ul>
                        </div>{/* End desc*/}
                    </a>{/* End strip_list*/}
                    <a href="detail_page.html" className="strip_list">
                    <div className="ribbon_1">Popular</div>
                        <div className="desc">
                            <div className="thumb_strip">
                                <img src="thumb_restaurant_6.jpg" alt=""/>
                            </div>
                            <div className="rating">
                                <i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star voted"></i><i className="icon_star"></i>
                            </div>
                            <h3>China Food</h3>
                            <div className="type">
                                Chinese / Vietnam
                            </div>
                            <div className="location">
                                135 Newtownards Road, Belfast, BT4. <span className="opening">Opens at 17:00</span>
                            </div>
                            <ul>
                                <li>Take away<i className="icon_check_alt2 ok"></i></li>
                                <li>Delivery<i className="icon_check_alt2 ok"></i></li>
                            </ul>
                        </div>{/* End desc*/}
                    </a>{/* End strip_list*/}
                </div>
            </div>{/* End row */}   
            
            </div>{/* End container */}
            </div>{/* End white_bg */}
            
          <div className="high_light">
            <div className="container">
              <h3>Choose from over 2,000 Restaurants</h3>
                <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
                <a href="list_page.html">View all Restaurants</a>
            </div>{/* End container */}
          </div>{/* End hight_light */}
                      
        <section className="parallax-window" data-parallax="scroll" data-image-src='bg_office.jpg' data-natural-width="1200" data-natural-height="600">
        <div className="parallax-content">
            <div className="sub_content">
                <i className="icon_mug"></i>
                <h3>We also deliver to your office</h3>
                <p>
                    Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                </p>
            </div>{/* End sub_content */}
        </div>{/* End subheader */}
        </section>{/* End section */}
        {/* End Content =============================================== */}
        
        <div className="container margin_60">
          <div className="main_title margin_mobile">
                <h2 className="nomargin_top">Work with Us</h2>
                <p>
                    Cum doctus civibus efficiantur in imperdiet deterruisset.
                </p>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-2">
                  <a className="box_work" href="submit_restaurant.html">
                    <img src="submit_restaurant.jpg" width="848" height="480" alt="" className="img-responsive"/>
                    <h3>Submit your Restaurant<span>Start to earn customers</span></h3>
                    <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
                    <div className="btn_1">Read more</div>
                    </a>
                </div>
                <div className="col-md-4">
                  <a className="box_work" href="submit_driver.html">
                    <img src="delivery.jpg" width="848" height="480" alt="" className="img-responsive"/>
                    <h3>We are looking for a Driver<span>Start to earn money</span></h3>
                    <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
                    <div className="btn_1">Read more</div>
                    </a>
                </div>
          </div>{/* End row */}
          </div>{/* End container */}
        
        {/* Footer ================================================== */}
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-3">
                    <h3>Secure payments with</h3>
                    <p>
                        <img src="cards.png" alt="" className="img-responsive"/>
                    </p>
                </div>
                <div className="col-md-3 col-sm-3">
                    <h3>About</h3>
                    <ul>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="faq.html">Faq</a></li>
                        <li><a href="contacts.html">Contacts</a></li>
                        <li><a href="#0" data-toggle="modal" data-target="#login_2">Login</a></li>
                        <li><a href="#0" data-toggle="modal" data-target="#register">Register</a></li>
                        <li><a href="#0">Terms and conditions</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-3" id="newsletter">
                    <h3>Newsletter</h3>
                    <p>
                        Join our newsletter to keep be informed about offers and news.
                    </p>
                    <div id="message-newsletter_2">
                    </div>
                    <form method="post" action="assets/newsletter.php" name="newsletter_2" id="newsletter_2">
                        <div className="form-group">
                            <input name="email_newsletter_2" id="email_newsletter_2" type="email" value="" placeholder="Your mail" className="form-control"/>
                        </div>
                        <input type="submit" value="Subscribe" className="btn_1" id="submit-newsletter_2"/>
                    </form>
                </div>
                <div className="col-md-2 col-sm-3">
                    <h3>Settings</h3>
                    <div className="styled-select">
                        <select className="form-control" name="lang" id="lang">
                            <option value="English" select='true'>English</option>
                            <option defaultValue="French">French</option>
                            <option defaultValue="Spanish">Spanish</option>
                            <option defaultValue="Russian">Russian</option>
                        </select>
                    </div>
                    <div className="styled-select">
                        <select className="form-control" name="currency" id="currency">
                            <option defaultValue="USD" select='true'>USD</option>
                            <option defaultValue="EUR">EUR</option>
                            <option defaultValue="GBP">GBP</option>
                            <option defaultValue="RUB">RUB</option>
                        </select>
                    </div>
                </div>
            </div>{/* End row */}
            <div className="row">
                <div className="col-md-12">
                    <div id="social_footer">
                        <ul>
                            <li><a href="#0"><i className="icon-facebook"></i></a></li>
                            <li><a href="#0"><i className="icon-twitter"></i></a></li>
                            <li><a href="#0"><i className="icon-google"></i></a></li>
                            <li><a href="#0"><i className="icon-instagram"></i></a></li>
                            <li><a href="#0"><i className="icon-pinterest"></i></a></li>
                            <li><a href="#0"><i className="icon-vimeo"></i></a></li>
                            <li><a href="#0"><i className="icon-youtube-play"></i></a></li>
                        </ul>
                        <p>
                            © Quick Food 2015
                        </p>
                    </div>
                </div>
            </div>{/* End row */}
        </div>{/* End container */}
        </footer>
        {/* End Footer =============================================== */}

    <div className="layer"></div>{/* Mobile menu overlay mask */}

    {/* Login modal */}   
    <div className="modal fade" id="login_2" tabIndex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content modal-popup">
            <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
            <form action="#" className="popup-form" id="myLogin">
                      <div className="login_icon"><i className="icon_lock_alt"></i></div>
              <input type="text" className="form-control form-white" placeholder="Username"/>
              <input type="text" className="form-control form-white" placeholder="Password"/>
              <div className="text-left">
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" className="btn btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>{/* End modal */}   
        
    {/* Register modal */}   
    <div className="modal fade" id="register" tabIndex="-1" role="dialog" aria-labelledby="myRegister" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content modal-popup">
            <a href="#" className="close-link"><i className="icon_close_alt2"></i></a>
            <form action="#" className="popup-form" id="myRegister">
                      <div className="login_icon"><i className="icon_lock_alt"></i></div>
              <input type="text" className="form-control form-white" placeholder="Name"/>
              <input type="text" className="form-control form-white" placeholder="Last Name"/>
                        <input type="email" className="form-control form-white" placeholder="Email"/>
                        <input type="text" className="form-control form-white" placeholder="Password"  id="password1"/>
                        <input type="text" className="form-control form-white" placeholder="Confirm password"  id="password2"/>
                        <div id="pass-info" className="clearfix"></div>
              <div className="checkbox-holder text-left">
                <div className="checkbox">
                  <input type="checkbox" value="accept_2" id="check_2" name="check_2" />
                  <label htmlFor="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
                </div>
              </div>
              <button type="submit" className="btn btn-submit">Register</button>
            </form>
          </div>
        </div>
      </div>{/* End Register modal */}
      </div>
    );
  }
}

VideoBack.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  videoback: makeSelectVideoBack(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'videoBack', reducer });
const withSaga = injectSaga({ key: 'videoBack', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VideoBack);
