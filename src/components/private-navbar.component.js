import React from 'react';

class PrivateNavBar extends React.Component{
    render(){
        return (
            <div id="container" className="effect aside-float aside-bright mainnav-lg">
                <header id="navbar">
                    <div id="navbar-container" className="boxed">

                        <div className="navbar-header">
                            <a href="index.html" className="navbar-brand">
                                <img src={require('../vendor/images/img/logo.png')} alt="Nifty " className="brand-icon"/>
                                <div className="brand-title">
                                    <span className="brand-text">Nifty</span>
                                </div>
                            </a>
                        </div>

                        <div className="navbar-content">
                            <ul className="nav navbar-top-links">

                                <li className="tgl-menu-btn">
                                    <a className="mainnav-toggle" >
                                        <i className="demo-pli-list-view"></i>
                                    </a>
                                </li>
                            
                                <li>
                                    <div className="custom-search-form">
                                        <label className="btn btn-trans" htmlFor="search-input" data-toggle="collapse" data-target="#nav-searchbox">
                                            <i className="demo-pli-magnifi-glass"></i>
                                        </label>
                                        <form>
                                            <div className="search-container collapse" id="nav-searchbox">
                                                <input id="search-input" type="text" className="form-control" placeholder="Type for search..."/>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                            <ul className="nav navbar-top-links">
                                <li className="mega-dropdown">
                                    <a  className="mega-dropdown-toggle">
                                        <i className="demo-pli-layout-grid"></i>
                                    </a>
                                    <div className="dropdown-menu mega-dropdown-menu">
                                        <div className="row">
                                            <div className="col-sm-4 col-md-3">

                                                <ul className="list-unstyled">
                                                    <li className="dropdown-header"><i className="demo-pli-file icon-lg icon-fw"></i> Pages</li>
                                                    <li><a>Profile</a></li>
                                                    <li><a >Search Result</a></li>
                                                    <li><a >FAQ</a></li>
                                                    <li><a >Sreen Lock</a></li>
                                                    <li><a >Maintenance</a></li>
                                                    <li><a >Invoice</a></li>
                                                    <li><a  className="disabled">Disabled</a></li>                                        </ul>

                                            </div>
                                            <div className="col-sm-4 col-md-3">

                                                <ul className="list-unstyled">
                                                    <li className="dropdown-header"><i className="demo-pli-mail icon-lg icon-fw"></i> Mailbox</li>
                                                    <li><a ><span className="pull-right label label-danger">Hot</span>Indox</a></li>
                                                    <li><a >Read Message</a></li>
                                                    <li><a >Compose</a></li>
                                                    <li><a >Template</a></li>
                                                </ul>
                                                <p className="pad-top text-main text-sm text-uppercase text-bold"><i className="icon-lg demo-pli-calendar-4 icon-fw"></i>News</p>
                                                <p className="pad-top mar-top bord-top text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                            </div>
                                            <div className="col-sm-4 col-md-3">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <a  className="media mar-btm">
                                                            <span className="badge badge-success pull-right">90%</span>
                                                            <div className="media-left">
                                                                <i className="demo-pli-data-settings icon-2x"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="text-semibold text-main mar-no">Data Backup</p>
                                                                <small className="text-muted">This is the item description</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a  className="media mar-btm">
                                                            <div className="media-left">
                                                                <i className="demo-pli-support icon-2x"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="text-semibold text-main mar-no">Support</p>
                                                                <small className="text-muted">This is the item description</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a  className="media mar-btm">
                                                            <div className="media-left">
                                                                <i className="demo-pli-computer-secure icon-2x"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="text-semibold text-main mar-no">Security</p>
                                                                <small className="text-muted">This is the item description</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a  className="media mar-btm">
                                                            <div className="media-left">
                                                                <i className="demo-pli-map-2 icon-2x"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="text-semibold text-main mar-no">Location</p>
                                                                <small className="text-muted">This is the item description</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-12 col-md-3">
                                                <p className="dropdown-header"><i className="demo-pli-file-jpg icon-lg icon-fw"></i> Gallery</p>
                                                <div className="row img-gallery">
                                                    <div className="col-xs-4">
                                                        <img className="img-responsive" src={require('../vendor/images/img/thumbs/img-1.jpg')} alt="thumbs"/>
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <img className="img-responsive" src={require('../vendor/images/img/thumbs/img-3.jpg')} alt="thumbs"/>
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <img className="img-responsive" src={require('../vendor/images/img/thumbs/img-2.jpg')} alt="thumbs" />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <img className="img-responsive" src={require('../vendor/images/img/thumbs/img-4.jpg')} alt="thumbs" />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <img className="img-responsive" src={require('../vendor/images/img/thumbs/img-6.jpg')} alt="thumbs" />
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <img className="img-responsive" src={require('../vendor/images/img/thumbs/img-5.jpg')} alt="thumbs" />
                                                    </div>
                                                </div>
                                                <a  className="btn btn-block btn-primary">Browse Gallery</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown">
                                    <a  data-toggle="dropdown" className="dropdown-toggle">
                                        <i className="demo-pli-bell"></i>
                                        <span className="badge badge-header badge-danger"></span>
                                    </a>

                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <div className="nano scrollable">
                                            <div className="nano-content">
                                                <ul className="head-list">
                                                    <li>
                                                        <a  className="media add-tooltip" data-title="Used space : 95%" data-container="body" data-placement="bottom">
                                                            <div className="media-left">
                                                                <i className="demo-pli-data-settings icon-2x text-main"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="text-nowrap text-main text-semibold">HDD is full</p>
                                                                <div className="progress progress-sm mar-no">
                                                                    <div className="progress-bar progress-bar-danger width-95">
                                                                        <span className="sr-only">95% Complete</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="media" >
                                                            <div className="media-left">
                                                                <i className="demo-pli-file-edit icon-2x"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="mar-no text-nowrap text-main text-semibold">Write a news article</p>
                                                                <small>Last Update 8 hours ago</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="media" >
                                                            <span className="label label-info pull-right">New</span>
                                                            <div className="media-left">
                                                                <i className="demo-pli-speech-bubble-7 icon-2x"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="mar-no text-nowrap text-main text-semibold">Comment Sorting</p>
                                                                <small>Last Update 8 hours ago</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="media" >
                                                            <div className="media-left">
                                                                <i className="demo-pli-add-user-star icon-2x"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="mar-no text-nowrap text-main text-semibold">New User Registered</p>
                                                                <small>4 minutes ago</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="media" >
                                                            <div className="media-left">
                                                                <img className="img-circle img-sm" alt="Profile" src={require('../vendor/images/img/profile-photos/9.png')} />
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="mar-no text-nowrap text-main text-semibold">Lucy sent you a message</p>
                                                                <small>30 minutes ago</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="media" >
                                                            <div className="media-left">
                                                                <img className="img-circle img-sm" alt="Profile " src={require('../vendor/images/img/profile-photos/3.png')} />
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="mar-no text-nowrap text-main text-semibold">Jackson sent you a message</p>
                                                                <small>40 minutes ago</small>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="pad-all bord-top">
                                            <a  className="btn-link text-main box-block">
                                                <i className="pci-chevron chevron-right pull-right"></i>Show All Notifications
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li id="dropdown-user" className="dropdown">
                                    <a data-toggle="dropdown" className="dropdown-toggle text-right">
                                        <span className="ic-user pull-right">
                                            <i className="demo-pli-male"></i>
                                        </span>
                                        {/* <div className="username hidden-xs">Aaron Chavez</div> */}
                                    </a>


                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right panel-default">
                                        <ul className="head-list">
                                            <li>
                                                <a ><i className="demo-pli-male icon-lg icon-fw"></i> Profile</a>
                                            </li>
                                            <li>
                                                <a ><span className="badge badge-danger pull-right">9</span><i className="demo-pli-mail icon-lg icon-fw"></i> Messages</a>
                                            </li>
                                            <li>
                                                <a ><span className="label label-success pull-right">New</span><i className="demo-pli-gear icon-lg icon-fw"></i> Settings</a>
                                            </li>
                                            <li>
                                                <a ><i className="demo-pli-computer-secure icon-lg icon-fw"></i> Lock screen</a>
                                            </li>
                                            <li>
                                                <a href="pages-login.html"><i className="demo-pli-unlock icon-lg icon-fw"></i> Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                
                                <li>
                                    <a className="aside-toggle">
                                        <i className="demo-pli-dot-vertical"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </header>
            <div className="boxed">
                <div id="content-container">
                    <div id="page-head">
                        <div className="text-center pad-btm">
                            <h3>Frequently Asked Questions</h3>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and <br/>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,<br/> the master-builder of human happiness. </p>
                            <button type="button" className="btn btn-success">Email us your question</button>
                            <button type="button" className="btn btn-primary">Send us a tweet</button>
                        </div>
                    </div>
                    <div id="page-content">
                        <div className="panel">
                            <div className="panel-body">
                                <div className="fixed-fluid">
                                    <div className="fixed-sm-250 pull-sm-right fixed-left-border">
                    
                                        <h4>Useful tips</h4>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                        <div className="list-group bg-trans">
                                            <a className="list-group-item list-item-sm"><span className="badge badge-purple badge-icon badge-fw pull-left"></span> Lorem ipsum</a>
                                            <a className="list-group-item list-item-sm"><span className="badge badge-info badge-icon badge-fw pull-left"></span> Consectetuer adipiscing</a>
                                            <a className="list-group-item list-item-sm"><span className="badge badge-pink badge-icon badge-fw pull-left"></span> Sed diam nonummy</a>
                                            <a className="list-group-item list-item-sm"><span className="badge badge-success badge-icon badge-fw pull-left"></span> Euismod tincidunt</a>
                                        </div>
                    
                                        <hr className="new-section-md bord-no"/>
                                        <h4>Can't find the answer? </h4>
                                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                                        <div className="pad-top">
                                            <a className="btn btn-primary">Contact us</a>
                                        </div>
                                    </div>
                    
                                    <div className="fluid faq-accordion">
                    
                                        <h4 className="pad-btm bord-btm"><i className="demo-pli-gear icon-fw v-middle"></i> General</h4>
                                        <div id="demo-gen-faq" className="panel-group panel-group-trans panel-group-condensed accordion">
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-gen-faq-1" data-parent="#demo-gen-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Lorem ipsum dolor sit amet ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse in" id="demo-gen-faq-1">
                                                    <div className="panel-body">
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-gen-faq-2" data-parent="#demo-gen-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Consectetuer adipiscing elit ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse" id="demo-gen-faq-2">
                                                    <div className="panel-body">
                                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-gen-faq-3" data-parent="#demo-gen-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Sed diam nonummy nibh euismod tincidunt ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse" id="demo-gen-faq-3">
                                                    <div className="panel-body">
                                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    
                                        <h4 className="pad-btm bord-btm"><i className="demo-pli-male-female icon-fw v-middle"></i> Account</h4>
                                        <div id="demo-acc-faq" className="panel-group panel-group-trans panel-group-condensed accordion">
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-acc-faq-1" data-parent="#demo-acc-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Lorem ipsum dolor sit amet ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse" id="demo-acc-faq-1">
                                                    <div className="panel-body">
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-acc-faq-2" data-parent="#demo-acc-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Consectetuer adipiscing elit ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse" id="demo-acc-faq-2">
                                                    <div className="panel-body">
                                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-acc-faq-3" data-parent="#demo-acc-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Sed diam nonummy nibh euismod tincidunt ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse" id="demo-acc-faq-3">
                                                    <div className="panel-body">
                                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    
                                        <h4 className="pad-btm bord-btm v-middl"><i className="demo-pli-coin icon-fw v-middle"></i> Payment</h4>
                                        <div id="demo-pym-faq" className="panel-group panel-group-trans panel-group-condensed accordion">
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-pym-faq-1" data-parent="#demo-pym-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Lorem ipsum dolor sit amet ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse" id="demo-pym-faq-1">
                                                    <div className="panel-body">
                                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-pym-faq-2" data-parent="#demo-pym-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Consectetuer adipiscing elit ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse in" id="demo-pym-faq-2">
                                                    <div className="panel-body">
                                                        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel">
                                                <div className="panel-heading">
                                                    <p className="panel-title">
                                                        <a href="#demo-pym-faq-3" data-parent="#demo-pym-faq" data-toggle="collapse" className="collapsed">
                                                        <i className="pci-chevron chevron-right"></i> Sed diam nonummy nibh euismod tincidunt ?
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="panel-collapse collapse" id="demo-pym-faq-3">
                                                    <div className="panel-body">
                                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <aside id="aside-container">
                    <div id="aside">
                        <div className="nano">
                            <div className="nano-content">
                                
                                <ul className="nav nav-tabs nav-justified">
                                    <li className="active">
                                        <a href="#demo-asd-tab-1" data-toggle="tab">
                                            <i className="demo-pli-speech-bubble-7 icon-lg"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#demo-asd-tab-2" data-toggle="tab">
                                            <i className="demo-pli-information icon-lg icon-fw"></i> Report
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#demo-asd-tab-3" data-toggle="tab">
                                            <i className="demo-pli-wrench icon-lg icon-fw"></i> Settings
                                        </a>
                                    </li>
                                </ul>
                                
                                <div className="tab-content">

                                    <div className="tab-pane fade in active" id="demo-asd-tab-1">
                                        <p className="pad-all text-main text-sm text-uppercase text-bold">
                                            <span className="pull-right badge badge-warning">3</span> Family
                                        </p>

                                        <div className="list-group bg-trans">
                                            <a className="list-group-item">
                                                <div className="media-left pos-rel">
                                                    <img className="img-circle img-xs" src="img/profile-photos/2.png" alt="Profile"/>
                                                    <i className="badge badge-success badge-stat badge-icon pull-left"></i>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mar-no text-main">Stephen Tran</p>
                                                    <small className="text-muteds">Availabe</small>
                                                </div>
                                            </a>
                                            <a className="list-group-item">
                                                <div className="media-left pos-rel">
                                                    <img className="img-circle img-xs" src="img/profile-photos/7.png" alt="Profile"/>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mar-no text-main">Brittany Meyer</p>
                                                    <small className="text-muteds">I think so</small>
                                                </div>
                                            </a>
                                            <a className="list-group-item">
                                                <div className="media-left pos-rel">
                                                    <img className="img-circle img-xs" src="img/profile-photos/1.png" alt="Profile" />
                                                    <i className="badge badge-info badge-stat badge-icon pull-left"></i>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mar-no text-main">Jack George</p>
                                                    <small className="text-muteds">Last Seen 2 hours ago</small>
                                                </div>
                                            </a>
                                            <a className="list-group-item">
                                                <div className="media-left pos-rel">
                                                    <img className="img-circle img-xs" src="img/profile-photos/4.png" alt="Profile" />
                                                </div>
                                                <div className="media-body">
                                                    <p className="mar-no text-main">Donald Brown</p>
                                                    <small className="text-muteds">Lorem ipsum dolor sit amet.</small>
                                                </div>
                                            </a>
                                            <a className="list-group-item">
                                                <div className="media-left pos-rel">
                                                    <img className="img-circle img-xs" src="img/profile-photos/8.png" alt="Profile" />
                                                    <i className="badge badge-warning badge-stat badge-icon pull-left"></i>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mar-no text-main">Betty Murphy</p>
                                                    <small className="text-muteds">Idle</small>
                                                </div>
                                            </a>
                                            <a className="list-group-item">
                                                <div className="media-left pos-rel">
                                                    <img className="img-circle img-xs" src="img/profile-photos/9.png" alt="Profile" />
                                                    <i className="badge badge-danger badge-stat badge-icon pull-left"></i>
                                                </div>
                                                <div className="media-body">
                                                    <p className="mar-no text-main">Samantha Reid</p>
                                                    <small className="text-muteds">Offline</small>
                                                </div>
                                            </a>
                                        </div>

                                        <hr/>
                                        <p className="pad-all text-main text-sm text-uppercase text-bold">
                                            <span className="pull-right badge badge-success">Offline</span> Friends
                                        </p>

                                        <div className="list-group bg-trans">
                                            <a className="list-group-item">
                                                <span className="badge badge-purple badge-icon badge-fw pull-left"></span> Joey K. Greyson
                                            </a>
                                            <a className="list-group-item">
                                                <span className="badge badge-info badge-icon badge-fw pull-left"></span> Andrea Branden
                                            </a>
                                            <a className="list-group-item">
                                                <span className="badge badge-success badge-icon badge-fw pull-left"></span> Johny Juan
                                            </a>
                                            <a className="list-group-item">
                                                <span className="badge badge-danger badge-icon badge-fw pull-left"></span> Susan Sun
                                            </a>
                                        </div>


                                        <hr/>
                                        <p className="pad-all text-main text-sm text-uppercase text-bold">News</p>

                                        <div className="pad-hor">
                                            <p>Lorem ipsum dolor sit amet, consectetuer
                                                <a data-title="45%" className="add-tooltip text-semibold text-main">adipiscing elit</a>, sed diam nonummy nibh. Lorem ipsum dolor sit amet.
                                            </p>
                                            <small><em>Last Update : Des 12, 2014</em></small>
                                        </div>


                                    </div>
                                    <div className="tab-pane fade" id="demo-asd-tab-2">
                                        <div className="pad-all">
                                            <p className="pad-ver text-main text-sm text-uppercase text-bold">Billing &amp; reports</p>
                                            <p>Get <strong className="text-main">$5.00</strong> off your next bill by making sure your full payment reaches us before August 5, 2018.</p>
                                        </div>
                                        <hr className="new-section-xs"/>
                                        <div className="pad-all">
                                            <span className="pad-ver text-main text-sm text-uppercase text-bold">Amount Due On</span>
                                            <p className="text-sm">August 17, 2018</p>
                                            <p className="text-2x text-thin text-main">$83.09</p>
                                            <button className="btn btn-block btn-success mar-top">Pay Now</button>
                                        </div>


                                        <hr/>

                                        <p className="pad-all text-main text-sm text-uppercase text-bold">Additional Actions</p>

                                        <div className="list-group bg-trans">
                                            <a className="list-group-item"><i className="demo-pli-information icon-lg icon-fw"></i> Service Information</a>
                                            <a className="list-group-item"><i className="demo-pli-mine icon-lg icon-fw"></i> Usage Profile</a>
                                            <a className="list-group-item"><span className="label label-info pull-right">New</span><i className="demo-pli-credit-card-2 icon-lg icon-fw"></i> Payment Options</a>
                                            <a className="list-group-item"><i className="demo-pli-support icon-lg icon-fw"></i> Message Center</a>
                                        </div>


                                        <hr/>

                                        <div className="text-center">
                                            <div><i className="demo-pli-old-telephone icon-3x"></i></div>
                                            Questions?
                                            <p className="text-lg text-semibold text-main"> (415) 234-53454 </p>
                                            <small><em>We are here 24/7</em></small>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="demo-asd-tab-3">
                                        <ul className="list-group bg-trans">
                                            <li className="pad-top list-header">
                                                <p className="text-main text-sm text-uppercase text-bold mar-no">Account Settings</p>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="pull-right">
                                                    <input className="toggle-switch" id="demo-switch-1" type="checkbox" checked />
                                                    <label for="demo-switch-1"></label>
                                                </div>
                                                <p className="mar-no text-main">Show my personal status</p>
                                                <small className="text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="pull-right">
                                                    <input className="toggle-switch" id="demo-switch-2" type="checkbox" checked />
                                                    <label for="demo-switch-2"></label>
                                                </div>
                                                <p className="mar-no text-main">Show offline contact</p>
                                                <small className="text-muted">Aenean commodo ligula eget dolor. Aenean massa.</small>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="pull-right">
                                                    <input className="toggle-switch" id="demo-switch-3" type="checkbox" />
                                                    <label for="demo-switch-3"></label>
                                                </div>
                                                <p className="mar-no text-main">Invisible mode </p>
                                                <small className="text-muted">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </small>
                                            </li>
                                        </ul>


                                        <hr/>

                                        <ul className="list-group pad-btm bg-trans">
                                            <li className="list-header"><p className="text-main text-sm text-uppercase text-bold mar-no">Public Settings</p></li>
                                            <li className="list-group-item">
                                                <div className="pull-right">
                                                    <input className="toggle-switch" id="demo-switch-4" type="checkbox" checked />
                                                    <label for="demo-switch-4"></label>
                                                </div>
                                                Online status
                                            </li>
                                            <li className="list-group-item">
                                                <div className="pull-right">
                                                    <input className="toggle-switch" id="demo-switch-5" type="checkbox" checked />
                                                    <label for="demo-switch-5"></label>
                                                </div>
                                                Show offline contact
                                            </li>
                                            <li className="list-group-item">
                                                <div className="pull-right">
                                                    <input className="toggle-switch" id="demo-switch-6" type="checkbox" checked />
                                                    <label for="demo-switch-6"></label>
                                                </div>
                                                Show my device icon
                                            </li>
                                        </ul>



                                        <hr/>

                                        <p className="pad-hor text-main text-sm text-uppercase text-bold mar-no">Task Progress</p>
                                        <div className="pad-all">
                                            <p className="text-main">Upgrade Progress</p>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar progress-bar-success width-15"><span className="sr-only">15%</span></div>
                                            </div>
                                            <small>15% Completed</small>
                                        </div>
                                        <div className="pad-hor">
                                            <p className="text-main">Database</p>
                                            <div className="progress progress-sm">
                                                <div className="progress-bar progress-bar-danger width-75"><span className="sr-only">75%</span></div>
                                            </div>
                                            <small>17/23 Database</small>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <nav id="mainnav-container">
                    <div id="mainnav">

                        <div id="mainnav-menu-wrap">
                            <div className="nano">
                                <div className="nano-content">

                                    
                                    <div id="mainnav-profile" className="mainnav-profile">
                                        <div className="profile-wrap text-center">
                                            <div className="pad-btm">
                                                <img className="img-circle img-md" src="img/profile-photos/1.png" alt="Profile" />
                                            </div>
                                            <a href="#profile-nav" className="box-block" data-toggle="collapse" aria-expanded="false">
                                                <span className="pull-right dropdown-toggle">
                                                    <i className="dropdown-caret"></i>
                                                </span>
                                                <p className="mnp-name">Aaron Chavez</p>
                                                <span className="mnp-desc">aaron.cha@themeon.net</span>
                                            </a>
                                        </div>
                                        <div id="profile-nav" className="collapse list-group bg-trans">
                                            <a className="list-group-item">
                                                <i className="demo-pli-male icon-lg icon-fw"></i> View Profile
                                            </a>
                                            <a className="list-group-item">
                                                <i className="demo-pli-gear icon-lg icon-fw"></i> Settings
                                            </a>
                                            <a className="list-group-item">
                                                <i className="demo-pli-information icon-lg icon-fw"></i> Help
                                            </a>
                                            <a className="list-group-item">
                                                <i className="demo-pli-unlock icon-lg icon-fw"></i> Logout
                                            </a>
                                        </div>
                                    </div>


                                    
                                    <div id="mainnav-shortcut" className="hidden">
                                        <ul className="list-unstyled shortcut-wrap">
                                            <li className="col-xs-3" data-content="My Profile">
                                                <a className="shortcut-grid">
                                                    <div className="icon-wrap icon-wrap-sm icon-circle bg-mint">
                                                    <i className="demo-pli-male"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="col-xs-3" data-content="Messages">
                                                <a className="shortcut-grid">
                                                    <div className="icon-wrap icon-wrap-sm icon-circle bg-warning">
                                                    <i className="demo-pli-speech-bubble-3"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="col-xs-3" data-content="Activity">
                                                <a className="shortcut-grid">
                                                    <div className="icon-wrap icon-wrap-sm icon-circle bg-success">
                                                    <i className="demo-pli-thunder"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="col-xs-3" data-content="Lock Screen">
                                                <a className="shortcut-grid">
                                                    <div className="icon-wrap icon-wrap-sm icon-circle bg-purple">
                                                    <i className="demo-pli-lock-2"></i>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    


                                    <ul id="mainnav-menu" className="list-group">
                            
                                        
                                        <li className="list-header">Navigation</li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-home"></i>
                                                <span className="menu-title">Dashboard</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="index.html">Dashboard 1</a></li>
                                                <li><a href="dashboard-2.html">Dashboard 2</a></li>
                                                <li><a href="dashboard-3.html">Dashboard 3</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-split-vertical-2"></i>
                                                <span className="menu-title">Layouts</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="layouts-collapsed-navigation.html">Collapsed Navigation</a></li>
                                                <li><a href="layouts-offcanvas-navigation.html">Off-Canvas Navigation</a></li>
                                                <li><a href="layouts-offcanvas-slide-in-navigation.html">Slide-in Navigation</a></li>
                                                <li><a href="layouts-offcanvas-revealing-navigation.html">Revealing Navigation</a></li>
                                                <li className="list-divider"></li>
                                                <li><a href="layouts-aside-right-side.html">Aside on the right side</a></li>
                                                <li><a href="layouts-aside-left-side.html">Aside on the left side</a></li>
                                                <li><a href="layouts-aside-dark-theme.html">Dark version of aside</a></li>
                                                <li className="list-divider"></li>
                                                <li><a href="layouts-fixed-navbar.html">Fixed Navbar</a></li>
                                                <li><a href="layouts-fixed-footer.html">Fixed Footer</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a href="widgets.html">
                                                <i className="demo-pli-gear"></i>
                                                <span className="menu-title">
                                                    Widgets
                                                    <span className="pull-right badge badge-warning">24</span>
                                                </span>
                                            </a>
                                        </li>
                            
                                        <li className="list-divider"></li>
                            
                                        
                                        <li className="list-header">Components</li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-boot-2"></i>
                                                <span className="menu-title">UI Elements</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="ui-buttons.html">Buttons</a></li>
                                                <li><a href="ui-panels.html">Panels</a></li>
                                                <li><a href="ui-modals.html">Modals</a></li>
                                                <li><a href="ui-progress-bars.html">Progress bars</a></li>
                                                <li><a href="ui-components.html">Components</a></li>
                                                <li><a href="ui-typography.html">Typography</a></li>
                                                <li><a href="ui-list-group.html">List Group</a></li>
                                                <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                                                <li><a href="ui-alerts-tooltips.html">Alerts &amp; Tooltips</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-pen-5"></i>
                                                <span className="menu-title">Forms</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="forms-general.html">General</a></li>
                                                <li><a href="forms-components.html">Advanced Components</a></li>
                                                <li><a href="forms-validation.html">Validation</a></li>
                                                <li><a href="forms-wizard.html">Wizard</a></li>
                                                <li><a href="forms-file-upload.html">File Upload</a></li>
                                                <li><a href="forms-text-editor.html">Text Editor</a></li>
                                                <li><a href="forms-markdown.html">Markdown</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-receipt-4"></i>
                                                <span className="menu-title">Tables</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="tables-static.html">Static Tables</a></li>
                                                <li><a href="tables-bootstrap.html">Bootstrap Tables</a></li>
                                                <li><a href="tables-datatable.html">Data Tables</a></li>
                                                <li><a href="tables-footable.html">Foo Tables</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-bar-chart"></i>
                                                <span className="menu-title">Charts</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="charts-morris-js.html">Morris JS</a></li>
                                                <li><a href="charts-flot-charts.html">Flot Charts</a></li>
                                                <li><a href="charts-easy-pie-charts.html">Easy Pie Charts</a></li>
                                                <li><a href="charts-sparklines.html">Sparklines</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-repair"></i>
                                                <span className="menu-title">Miscellaneous</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="misc-timeline.html">Timeline</a></li>
                                                <li><a href="misc-maps.html">Google Maps</a></li>
                                                <li><a href="xplugins-notifications.html">Notifications<span className="label label-purple pull-right">Improved</span></a></li>
                                                <li><a href="misc-nestable-list.html">Nestable List</a></li>
                                                <li><a href="misc-animate-css.html">CSS Animations</a></li>
                                                <li><a href="misc-css-loaders.html">CSS Loaders</a></li>
                                                <li><a href="misc-spinkit.html">Spinkit</a></li>
                                                <li><a href="misc-tree-view.html">Tree View</a></li>
                                                <li><a href="misc-clipboard.html">Clipboard</a></li>
                                                <li><a href="misc-x-editable.html">X-Editable</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-warning-window"></i>
                                                <span className="menu-title">Grid System</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="grid-bootstrap.html">Bootstrap Grid</a></li>
                                                <li><a href="grid-liquid-fixed.html">Liquid Fixed</a></li>
                                                <li><a href="grid-match-height.html">Match Height</a></li>
                                                <li><a href="grid-masonry.html">Masonry</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        <li className="list-divider"></li>
                            
                                        
                                        <li className="list-header">More</li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-computer-secure"></i>
                                                <span className="menu-title">App Views</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="app-file-manager.html">File Manager</a></li>
                                                <li><a href="app-users.html">Users</a></li>
                                                <li><a href="app-users-2.html">Users 2</a></li>
                                                <li><a href="app-profile.html">Profile</a></li>
                                                <li><a href="app-calendar.html">Calendar</a></li>
                                                <li><a href="app-taskboard.html">Taskboard</a></li>
                                                <li><a href="app-chat.html">Chat</a></li>
                                                <li><a href="app-contact-us.html">Contact Us</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-speech-bubble-5"></i>
                                                <span className="menu-title">Blog Apps</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-list.html">Blog List</a></li>
                                                <li><a href="blog-list-2.html">Blog List 2</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                                <li className="list-divider"></li>
                                                <li><a href="blog-manage-posts.html">Manage Posts</a></li>
                                                <li><a href="blog-add-edit-post.html">Add Edit Post</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-mail"></i>
                                                <span className="menu-title">Email</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="mailbox.html">Inbox</a></li>
                                                <li><a href="mailbox-message.html">View Message</a></li>
                                                <li><a href="mailbox-compose.html">Compose Message</a></li>
                                                <li><a href="mailbox-templates.html">Email Templates</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li className="active-sub">
                                            <a>
                                                <i className="demo-pli-file-html"></i>
                                                <span className="menu-title">Other Pages</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse in">
                                                <li><a href="pages-blank.html">Blank Page</a></li>
                                                <li><a href="pages-invoice.html">Invoice</a></li>
                                                <li><a href="pages-search-results.html">Search Results</a></li>
                                                <li className="active-link"><a href="pages-faq.html">FAQ</a></li>
                                                <li><a href="pages-pricing.html">Pricing<span className="label label-success pull-right">New</span></a></li>
                                                <li className="list-divider"></li>
                                                <li><a href="pages-404-alt.html">Error 404 alt</a></li>
                                                <li><a href="pages-500-alt.html">Error 500 alt</a></li>
                                                <li className="list-divider"></li>
                                                <li><a href="pages-404.html">Error 404 </a></li>
                                                <li><a href="pages-500.html">Error 500</a></li>
                                                <li><a href="pages-maintenance.html">Maintenance</a></li>
                                                <li><a href="pages-login.html">Login</a></li>
                                                <li><a href="pages-register.html">Register</a></li>
                                                <li><a href="pages-password-reminder.html">Password Reminder</a></li>
                                                <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-photo-2"></i>
                                                <span className="menu-title">Gallery</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="gallery-columns.html">Columns</a></li>
                                                <li><a href="gallery-justified.html">Justified</a></li>
                                                <li><a href="gallery-nested.html">Nested</a></li>
                                                <li><a href="gallery-grid.html">Grid</a></li>
                                                <li><a href="gallery-carousel.html">Carousel</a></li>
                                                <li className="list-divider"></li>
                                                <li><a href="gallery-slider.html">Slider</a></li>
                                                <li><a href="gallery-default-theme.html">Default Theme</a></li>
                                                <li><a href="gallery-compact-theme.html">Compact Theme</a></li>
                                                <li><a href="gallery-grid-theme.html">Grid Theme</a></li>
                                                
                                            </ul>
                                        </li>


                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-tactic"></i>
                                                <span className="menu-title">Menu Level</span>
                                                <i className="arrow"></i>
                                            </a>

                                            
                                            <ul className="collapse">
                                                <li><a>Second Level Item</a></li>
                                                <li><a>Second Level Item</a></li>
                                                <li><a>Second Level Item</a></li>
                                                <li className="list-divider"></li>
                                                <li>
                                                    <a>Third Level<i className="arrow"></i></a>

                                                    
                                                    <ul className="collapse">
                                                        <li><a>Third Level Item</a></li>
                                                        <li><a>Third Level Item</a></li>
                                                        <li><a>Third Level Item</a></li>
                                                        <li><a>Third Level Item</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a>Third Level<i className="arrow"></i></a>

                                                    
                                                    <ul className="collapse">
                                                        <li><a>Third Level Item</a></li>
                                                        <li><a>Third Level Item</a></li>
                                                        <li className="list-divider"></li>
                                                        <li><a>Third Level Item</a></li>
                                                        <li><a>Third Level Item</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                            
                                        <li className="list-divider"></li>
                            
                                        
                                        <li className="list-header">Extras</li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-happy"></i>
                                                <span className="menu-title">Icons Pack</span>
                                                <i className="arrow"></i>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="icons-ionicons.html">Ion Icons</a></li>
                                                <li><a href="icons-themify.html">Themify</a></li>
                                                <li><a href="icons-font-awesome.html">Font Awesome</a></li>
                                                <li><a href="icons-flagicons.html">Flag Icon CSS</a></li>
                                                <li><a href="icons-weather-icons.html">Weather Icons</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a>
                                                <i className="demo-pli-medal-2"></i>
                                                <span className="menu-title">
                                                    PREMIUM ICONS
                                                    <span className="label label-danger pull-right">BEST</span>
                                                </span>
                                            </a>
                            
                                            
                                            <ul className="collapse">
                                                <li><a href="premium-line-icons.html">Line Icons Pack</a></li>
                                                <li><a href="premium-solid-icons.html">Solid Icons Pack</a></li>
                                                
                                            </ul>
                                        </li>
                            
                                        
                                        <li>
                                            <a href="helper-classes.html">
                                                <i className="demo-pli-inbox-full"></i>
                                                <span className="menu-title">Helper Classes</span>
                                            </a>
                                        </li>                                
                                    </ul>
                                    <div className="mainnav-widget">

                                        <div className="show-small">
                                            <a data-toggle="menu-widget" data-target="#demo-wg-server">
                                                <i className="demo-pli-monitor-2"></i>
                                            </a>
                                        </div>

                                        <div id="demo-wg-server" className="hide-small mainnav-widget-content">
                                            <ul className="list-group">
                                                <li className="list-header pad-no mar-ver">Server Status</li>
                                                <li className="mar-btm">
                                                    <span className="label label-primary pull-right">15%</span>
                                                    <p>CPU Usage</p>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar progress-bar-primary width-15">
                                                            <span className="sr-only">15%</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="mar-btm">
                                                    <span className="label label-purple pull-right">75%</span>
                                                    <p>Bandwidth</p>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar progress-bar-purple width-75">
                                                            <span className="sr-only">75%</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="pad-ver"><a className="btn btn-success btn-bock">View Details</a></li>
                                            </ul>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>

                    </div>
                </nav> 
            </div>
        </div>
        )
    }
}

export default PrivateNavBar