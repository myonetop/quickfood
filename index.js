import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import '!file-loader?name=[name].[ext]!../images/logo.png';
import '!file-loader?name=[name].[ext]!../images/logo_mobile.png';
import '!file-loader?name=[name].[ext]!../images/video_fix.png';
import '!file-loader?name=[name].[ext]!../images/thumb_restaurant.jpg';
import '!file-loader?name=[name].[ext]!../images/thumb_restaurant_2.jpg';
import '!file-loader?name=[name].[ext]!../images/thumb_restaurant_3.jpg';
import '!file-loader?name=[name].[ext]!../images/thumb_restaurant_4.jpg';
import '!file-loader?name=[name].[ext]!../images/thumb_restaurant_5.jpg';
import '!file-loader?name=[name].[ext]!../images/thumb_restaurant_6.jpg';
import '!file-loader?name=[name].[ext]!../images/bg_office.jpg';
import '!file-loader?name=[name].[ext]!../images/submit_restaurant.jpg';
import '!file-loader?name=[name].[ext]!../images/delivery.jpg';
import '!file-loader?name=[name].[ext]!../images/cards.png';

// Load php files
import '!file-loader?name=[name].[ext]!../assets/newsletter.php';

class Myone extends React.Component {
   render() {
      return (
         <Router>
            <div>
			    <div id="preloader">
			        <div className={"sk-spinner sk-spinner-wave"} id="status">
			            <div className={"sk-rect1"}></div>
			            <div className={"sk-rect2"}></div>
			            <div className={"sk-rect3"}></div>
			            <div className={"sk-rect4"}></div>
			            <div className={"sk-rect5"}></div>
			        </div>
			    </div>

			    <header>
			    <div className={"container-fluid"}>
			        <div className={"row"}>
			            <div className={"col--md-4 col-sm-4 col-xs-4"}>
			                <a href="index.html" id="logo">
			                <img src={'logo.png'} width="190" height="23" alt="" data-retina="true" className={"hidden-xs"}/>
			                <img src={'logo_mobile.png'} width="59" height="23" alt="" data-retina="true" className={"hidden-lg hidden-md hidden-sm"}/>
			                </a>
			            </div>
			            <nav className={"col--md-8 col-sm-8 col-xs-8"}>
			            <a className={"cmn-toggle-switch cmn-toggle-switch__htx open_close"} href="javascript:void(0);"><span>Menu mobile</span></a>
			            <div className={"main-menu"}>
			                <div id="header_menu">
			                    <img src={'logo.png'} width="190" height="23" alt="" data-retina="true"/>
			                </div>
			                <a href={"#"} className={"open_close"} id="close_in"><i className={"icon_close"}></i></a>
			                <ul>
			                    <li className={"submenu"}>
			                    <a href="javascript:void(0);" className={"show-submenu"}>Home<i className={"icon-down-open-mini"}></i></a>
			                    <ul>
			                        <li><a href="index.html">Home Video background</a></li>
			                        <li><a href="index_2.html">Home Static image</a></li>
			                        <li><a href="index_3.html">Home Text rotator</a></li>
			                        <li><a href="index_8.html">Home Layer slider</a></li>
			                        <li><a href="index_4.html">Home Cookie bar</a></li>
			                        <li><a href="index_5.html">Home Popup</a></li>
			                        <li><a href="index_6.html">Home Mobile synthetic</a></li>
			                        <li><a href="index_7.html">Top Menu version 2</a></li>
			                    </ul>
			                    </li>
			                    <li className={"submenu"}>
			                    <a href="javascript:void(0);" className={"show-submenu"}>Restaurants<i className={"icon-down-open-mini"}></i></a>
			                    <ul>
			                        <li><a href="list_page.html">Row listing</a></li>
			                        <li><a href="grid_list.html">Grid listing</a></li>
			                        <li><a href="map_listing.html">Map listing</a></li>
			                        <li><a href="detail_page.html">Restaurant Menu</a></li>
			                        <li><a href="submit_restaurant.html">Submit Restaurant</a></li>
			                        <li><a href="cart.html">Order step 1</a></li>
			                        <li><a href="cart_2.html">Order step 2</a></li>
			                        <li><a href="cart_3.html">Order step 3</a></li>
			                        <li><a href="cart_datepicker.html">Order Date/Time picker</a></li>
			                    </ul>
			                    </li>
			                    <li><a href="about.html">About us</a></li>
			                    <li><a href="faq.html">Faq</a></li>
			                    <li className={"submenu"}>
			                    <a href="javascript:void(0);" className={"show-submenu"}>Pages<i className="icon-down-open-mini"></i></a>
			                    <ul>
			                        <li><a href="RTL_version/index.html">RTL version</a></li>
			                        <li><a href="admin.html">Admin section</a></li>
			                        <li><a href="submit_driver.html">Submit Driver</a></li>
			                        <li><a href="#0" data-toggle="modal" data-target="#login_2">User Login</a></li>
			                        <li><a href="#0" data-toggle="modal" data-target="#register">User Register</a></li>
			                        <li><a href="detail_page_2.html">Restaurant detail page</a></li>
			                        <li><a href="blog.html">Blog</a></li>
			                        <li><a href="contacts.html">Contacts</a></li>
			                        <li><a href="coming_soon/index.html">Coming soon page</a></li>
			                        <li><a href="shortcodes.html">Shortcodes</a></li>
			                        <li><a href="icon_pack_1.html">Icon pack 1</a></li>
			                        <li><a href="icon_pack_2.html">Icon pack 2</a></li>
			                    </ul>
			                    </li>
			                    <li><a href="#0" data-toggle="modal" data-target="#login_2">Login</a></li>
			                    <li><a href="#0">Purchase this template</a></li>
			                </ul>
			            </div>
			            </nav>
			        </div>
			    </div>
			    </header>

			    <section className={"header-video"}>
			    <div id="hero_video">
			        <div id="sub_content">
			            <h1>Order Takeaway or Delivery Food</h1>
			            <p>
			                Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
			            </p>
			            <form method="post" action="list_page.html">
			                <div id="custom-search-input">
			                    <div className={"input-group"}>
			                        <input type="text" className=" search-query" placeholder="Your Address or postal code"/>
			                        <span className="input-group-btn">
			                        	<input type="submit" className="btn_search" value="submit"/>
			                        </span>
			                    </div>
			                </div>
			            </form>
			        </div>
			    </div>
			    <img src={"video_fix.png"} alt="" className={"header-video--media"} data-video-src="video/intro" data-teaser-source="video/intro" data-provider="Vimeo" data-video-width="1920" data-video-height="960"/>
			    <div id="count" className="hidden-xs">
			        <ul>
			            <li><span className="number">2650</span> Restaurant</li>
			            <li><span className="number">5350</span> People Served</li>
			            <li><span className="number">12350</span> Registered Users</li>
			        </ul>
			    </div>
			    </section>
			    
			         <div className={"container margin_60"}>
			        
			         <div className={"main_title"}>
			            <h2 className={"nomargin_top"} >How it works</h2>
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
			        </div>
			        
			        <div id="delivery_time" className="hidden-xs">
			            <strong><span>2</span><span>5</span></strong>
			            <h4>The minutes that usually takes to deliver!</h4>
			        </div>
			        </div>
			            
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
			                            <img src={"thumb_restaurant.jpg"} alt=""/>
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
			                    </div>
			                </a>
			               <a href="detail_page.html" className="strip_list">
			               <div className="ribbon_1">Popular</div>
			                    <div className="desc">
			                        <div className="thumb_strip">
			                            <img src={"thumb_restaurant_2.jpg"} alt=""/>
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
			                    </div>
			                </a>
			                <a href="detail_page.html" className="strip_list">
			                <div className="ribbon_1">Popular</div>
			                    <div className="desc">
			                        <div className="thumb_strip">
			                            <img src={"thumb_restaurant_3.jpg"} alt=""/>
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
			                    </div>
			                </a>
			            </div>
			            <div className="col-md-6">
			                <a href="detail_page.html" className="strip_list">
			                <div className="ribbon_1">Popular</div>
			                    <div className="desc">
			                        <div className="thumb_strip">
			                            <img src={"thumb_restaurant_4.jpg"} alt=""/>
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
			                    </div>
			                </a>
			                <a href="detail_page.html" className="strip_list">
			                <div className="ribbon_1">Popular</div>
			                    <div className="desc">
			                        <div className="thumb_strip">
			                            <img src={"thumb_restaurant_5.jpg"} alt=""/>
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
			                    </div>
			                </a>
			                <a href="detail_page.html" className="strip_list">
			                <div className="ribbon_1">Popular</div>
			                    <div className="desc">
			                        <div className="thumb_strip">
			                            <img src={"thumb_restaurant_6.jpg"} alt=""/>
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
			                    </div>
			                </a>
			            </div>
			        </div>
			        
			        </div>
			        </div>
			        
			       <div className="high_light">
			      	<div className="container">
			      		<h3>Choose from over 2,000 Restaurants</h3>
			            <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
			            <a href="list_page.html">View all Restaurants</a>
			        </div>
			      </div>
			                  
			    <section className="parallax-window" data-parallax="scroll" data-image-src={"bg_office.jpg"} data-natural-width="1200" data-natural-height="600">
				    <div className="parallax-content">
				        <div className="sub_content">
				            <i className="icon_mug"></i>
				            <h3>We also deliver to your office</h3>
				            <p>
				                Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula
				            </p>
				        </div>
				    </div>
			    </section>
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
			                <img src={"submit_restaurant.jpg"} width="848" height="480" alt="" className="img-responsive"/>
			                <h3>Submit your Restaurant<span>Start to earn customers</span></h3>
			                <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
			                <div className="btn_1">Read more</div>
			                </a>
			            </div>
			            <div className="col-md-4">
			            	<a className="box_work" href="submit_driver.html">
			                <img src={"delivery.jpg"} width="848" height="480" alt="" className="img-responsive"/>
							<h3>We are looking for a Driver<span>Start to earn money</span></h3>
			                <p>Lorem ipsum dolor sit amet, ut virtute fabellas vix, no pri falli eloquentiam adversarium. Ea legere labore eam. Et eum sumo ocurreret, eos ei saepe oratio omittantur, legere eligendi partiendo pro te.</p>
			                <div className="btn_1">Read more</div>
			                </a>
			            </div>
			      </div>
			      </div>
			    
			    <footer>
			    <div className="container">
			        <div className="row">
			            <div className="col-md-4 col-sm-3">
			                <h3>Secure payments with</h3>
			                <p>
			                    <img src={"cards.png"} alt="" className="img-responsive"/>
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
			                <form method="post" action={"newsletter.php"} name="newsletter_2" id="newsletter_2">
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
			                        <option value="English" selected>English</option>
			                        <option value="French">French</option>
			                        <option value="Spanish">Spanish</option>
			                        <option value="Russian">Russian</option>
			                    </select>
			                </div>
			                <div className="styled-select">
			                    <select className="form-control" name="currency" id="currency">
			                        <option value="USD" selected>USD</option>
			                        <option value="EUR">EUR</option>
			                        <option value="GBP">GBP</option>
			                        <option value="RUB">RUB</option>
			                    </select>
			                </div>
			            </div>
			        </div>
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
			        </div>
			    </div>
			    </footer>

			<div className="layer"></div>

			<div className="modal fade" id="login_2" tabindex="-1" role="dialog" aria-labelledby="myLogin" aria-hidden="true">
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
				</div>
			    
			<div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="myRegister" aria-hidden="true">
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
										<label for="check_2"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
									</div>
								</div>
								<button type="submit" className="btn btn-submit">Register</button>
							</form>
						</div>
					</div>
				</div>
            </div>
         </Router>
      );
   }
}
export default Myone;