/**
 *
 * HeaderPage
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
import makeSelectHeaderPage from './selectors';
import reducer from './reducer';
import saga from './saga';
//import messages from './messages';

// script
import 'file-loader?name=[name].[ext]!../../assets/js/modernizr.js';

/* eslint-disable react/prefer-stateless-function */
export class HeaderPage extends React.PureComponent {
  render() {
    return (
      <div>
        <div id={"preloader"}>
            <div className="sk-spinner sk-spinner-wave" id="status">
                <div className="sk-rect1"></div>
                <div className="sk-rect2"></div>
                <div className="sk-rect3"></div>
                <div className="sk-rect4"></div>
                <div className="sk-rect5"></div>
            </div>
        </div>{/* End Preload */}

        {/* Header ================================================== */}
        <header>
        <div className="container-fluid">
            <div className="row">
                <div className="col--md-4 col-sm-4 col-xs-4">
                    <a href="index.html" id="logo">
                    <img src="logo.png" width="190" height="23" alt="" data-retina="true" className="hidden-xs"/>
                    <img src="logo_mobile.png" width="59" height="23" alt="" data-retina="true" className="hidden-lg hidden-md hidden-sm"/>
                    </a>
                </div>
                <nav className="col--md-8 col-sm-8 col-xs-8">
                <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="javascript:void(0);"><span>Menu mobile</span></a>
                <div className="main-menu">
                    <div id="header_menu">
                        <img src="logo.png" width="190" height="23" alt="" data-retina="true"/>
                    </div>
                    <a href="#" className="open_close" id="close_in"><i className="icon_close"></i></a>
                    <ul>
                        <li className="submenu">
                        <a href="javascript:void(0);" className="show-submenu">Home<i className="icon-down-open-mini"></i></a>
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
                        <li className="submenu">
                        <a href="javascript:void(0);" className="show-submenu">Restaurants<i className="icon-down-open-mini"></i></a>
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
                        <li className="submenu">
                        <a href="javascript:void(0);" className="show-submenu">Pages<i className="icon-down-open-mini"></i></a>
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
                </div>{/* End main-menu */}
                </nav>
            </div>{/* End row */}
        </div>{/* End container */}
        </header>
        {/* End Header =============================================== */}        
      </div>
    );
  }
}

HeaderPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  headerpage: makeSelectHeaderPage(),
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

const withReducer = injectReducer({ key: 'headerPage', reducer });
const withSaga = injectSaga({ key: 'headerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HeaderPage);
