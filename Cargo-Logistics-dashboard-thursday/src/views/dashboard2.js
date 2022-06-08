import React from 'react'

const Dashboard2 = ({children}) => {
  return (
    
    <>
    <div className="am-header">
  <div className="am-header-left">

    <a href="index.html" className="am-logo">Cargo Logistics</a>
  </div>
  <div className="am-header-right">
    <div className="dropdown dropdown-notification">
      <a href="#" className="nav-link pd-x-7 pos-relative" data-toggle="dropdown">
        <i className="icon ion-ios-bell-outline tx-24" />
       
      </a>
      <div className="dropdown-menu wd-300 pd-0-force">
        <div className="dropdown-menu-header">
          <label>Notifications</label>
          <a href="#">Mark All as Read</a>
        </div>
        <div className="media-list">
         {/* loop starts here  */}
          <a href="#" className="media-list-link read">
            <div className="media pd-x-20 pd-y-15">
              <img src="../img/img8.jpg" className="wd-40 rounded-circle" alt />
              <div className="media-body">
                <p className="tx-13 mg-b-0"><strong className="tx-medium">Ikuze Euphrozine</strong> Your arival time was not followed, better to work on time</p>
                <span className="tx-12">October 03, 2017 8:45am</span>
              </div>
            </div>
          </a>
          <a href="#" className="media-list-link read">
            <div className="media pd-x-20 pd-y-15">
              <img src="../img/img9.jpg" className="wd-40 rounded-circle" alt />
              <div className="media-body">
                <p className="tx-13 mg-b-0"><strong className="tx-medium">Cyusa Ayman</strong> I appreciated your shippment strategies <strong className="tx-medium">Much respect </strong></p>
                <span className="tx-12">October 02, 2017 12:44am</span>
              </div>
            </div>
          </a>
          <a href="#" className="media-list-link read">
            <div className="media pd-x-20 pd-y-15">
              <img src="../img/img10.jpg" className="wd-40 rounded-circle" alt />
              <div className="media-body">
                <p className="tx-13 mg-b-0">20+ new items added are for shipping in  <strong className="tx-medium">Rwanda</strong></p>
                <span className="tx-12">October 01, 2017 10:20pm</span>
              </div>
            </div>
          </a>
          <a href="#" className="media-list-link read">
            <div className="media pd-x-20 pd-y-15">
              <img src="../img/img5.jpg" className="wd-40 rounded-circle" alt />
              <div className="media-body">
                <p className="tx-13 mg-b-0"><strong className="tx-medium">Alice Iradukunda</strong> I enjoyed your services </p>
                <span className="tx-12">October 01, 2017 6:08pm</span>
              </div>
            </div>
          </a>
          <div className="media-list-footer">
            <a href="#" className="tx-12"><i className="fa fa-angle-down mg-r-5" /> Show All Notifications</a>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-profile">
      <a href="#" className="nav-link nav-link-profile" data-toggle="dropdown">
        <img src="../img/img3.jpg" className="wd-32 rounded-circle" alt />
        <span className="logged-name"><span className="hidden-xs-down">Joselyne</span> <i className="fa fa-angle-down mg-l-3" /></span>
      </a>
      <div className="dropdown-menu wd-200">
        <ul className="list-unstyled user-profile-nav">
          <li><a href="#"><i className="icon ion-ios-person-outline" /> Edit Profile</a></li>
          <li><a href="#"><i className="icon ion-ios-gear-outline" /> Settings</a></li>
          <li><a href="#"><i className="icon ion-ios-star-outline" /> Favorites</a></li>
          <li><a href="#"><i className="icon ion-ios-folder-outline" /> Collections</a></li>
          <li><a href="#"><i className="icon ion-power" /> Sign Out</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

  <div className="am-sideleft">
  {/* <ul className="nav am-sideleft-tab">
    <li className="nav-item">
      <a href="#mainMenu" className="nav-link active"><i className="icon ion-ios-home-outline tx-24" /></a>
    </li>
    <li className="nav-item">
      <a href="#emailMenu" className="nav-link"><i className="icon ion-ios-email-outline tx-24" /></a>
    </li>
    <li className="nav-item">
      <a href="#chatMenu" className="nav-link"><i className="icon ion-ios-chatboxes-outline tx-24" /></a>
    </li>
    <li className="nav-item">
      <a href="#settingMenu" className="nav-link"><i className="icon ion-ios-gear-outline tx-24" /></a>
    </li>
  </ul> */}
  <div className="tab-content">
    <div id="mainMenu" className="tab-pane active ps ps--theme_default" data-ps-id="1b5ec199-c8ff-61f0-dd91-83676cdf5b91">
      <ul className="nav am-sideleft-menu">
        <li className="nav-item">
          <a href="index.html" className="nav-link">
            <i className="icon ion-ios-home-outline" />
            <span>Dashboard</span>
          </a>
        </li>{/* nav-item */}
        <li className="nav-item">
          {/* <a href="#" className="nav-link with-sub active show-sub">
            <i className="icon ion-ios-gear-outline" />
            <span>Forms</span>
          </a> */}
          <ul className="nav-sub" style={{display: 'block'}}>
            <li className="nav-item"><a href="/order" className="nav-link">Shipping</a></li>
            <li className="nav-item"><a href="/tracks" className="nav-link">Track</a></li>
            <li className="nav-item"><a href="/employer" className="nav-link">Employers</a></li>
    
            <li className="nav-item"><a href="/customer" className="nav-link">Customers</a></li>
          </ul>
        </li>{/* nav-item */}
        
          
        <li className="nav-item">
          <a href="#" className="nav-link with-sub">
            <i className="icon ion-ios-analytics-outline" />
            <span>Charts</span>
          </a>
          <ul className="nav-sub">
            <li className="nav-item"><a href="/chart" className="nav-link">Customers</a></li>
            <li className="nav-item"><a href="/chart" className="nav-link">Cargoes</a></li>
            
          </ul>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="#" className="nav-link with-sub">
            <i className="icon ion-ios-navigate-outline" />
            <span>Maps</span>
          </a>
          <ul className="nav-sub">
            <li className="nav-item"><a href="map-google.html" className="nav-link">Google Maps</a></li>
            <li className="nav-item"><a href="map-vector.html" className="nav-link">Vector Maps</a></li>
          </ul>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="#" className="nav-link with-sub">
            <i className="icon ion-ios-list-outline" />
            <span>Tables</span>
          </a>
          <ul className="nav-sub">
            <li className="nav-item"><a href="table-basic.html" className="nav-link">Basic Table</a></li>
            <li className="nav-item"><a href="table-datatable.html" className="nav-link">Data Table</a></li>
          </ul>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="#" className="nav-link with-sub">
            <i className="icon ion-ios-bookmarks-outline" />
            <span>Pages</span>
          </a>
          <ul className="nav-sub">
            <li className="nav-item"><a href="blank.html" className="nav-link">Blank Page</a></li>
            <li className="nav-item"><a href="page-signin.html" className="nav-link">Signin Page</a></li>
            <li className="nav-item"><a href="page-signup.html" className="nav-link">Signup Page</a></li>
            <li className="nav-item"><a href="page-notfound.html" className="nav-link">404 Page Not Found</a></li>
          </ul>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="widgets.html" className="nav-link">
            <i className="icon ion-ios-briefcase-outline" />
            <span>Widgets</span>
          </a>
        </li>{/* nav-item */}
      </ul>
      <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>{/* #mainMenu */}
    <div id="emailMenu" className="tab-pane ps ps--theme_default" data-ps-id="4ade1727-35b2-cbfb-a197-451c8f0cd149">
      <div className="pd-x-20 pd-y-10">
        <a href="#" className="btn btn-orange btn-block btn-compose">Compose Email</a>
      </div>
      <ul className="nav am-sideleft-menu">
        <li className="nav-item">
          <a href="page-inbox.html" className="nav-link">
            <i className="icon ion-ios-filing-outline" />
            <span>Inbox</span>
          </a>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="page-inbox.html" className="nav-link">
            <i className="icon ion-ios-filing-outline" />
            <span>Drafts</span>
          </a>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="page-inbox.html" className="nav-link">
            <i className="icon ion-ios-paperplane-outline" />
            <span>Sent</span>
          </a>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="page-inbox.html" className="nav-link">
            <i className="icon ion-ios-trash-outline" />
            <span>Trash</span>
          </a>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="page-inbox.html" className="nav-link">
            <i className="icon ion-ios-filing-outline" />
            <span>Spam</span>
          </a>
        </li>{/* nav-item */}
      </ul>
      <label className="pd-x-20 tx-uppercase tx-11 mg-t-10 tx-orange mg-b-0 tx-medium">My Folder</label>
      <ul className="nav am-sideleft-menu">
        <li className="nav-item">
          <a href="page-inbox.html" className="nav-link">
            <i className="icon ion-ios-folder-outline" />
            <span>Updates</span>
          </a>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="page-inbox.html" className="nav-link">
            <i className="icon ion-ios-folder-outline" />
            <span>Social</span>
          </a>
        </li>{/* nav-item */}
        <li className="nav-item">
          <a href="page-inbox.html" className="nav-link">
            <i className="icon ion-ios-folder-outline" />
            <span>Promotions</span>
          </a>
        </li>{/* nav-item */}
      </ul>
      <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>{/* #emailMenu */}
    <div id="chatMenu" className="tab-pane ps ps--theme_default" data-ps-id="72c41a88-b311-65fd-e636-5d0f0115e7d5">
      <div className="chat-search-bar">
        <input type="search" className="form-control wd-150" placeholder="Search chat..." />
        <button className="btn btn-secondary"><i className="fa fa-search" /></button>
      </div>{/* chat-search-bar */}
      <label className="pd-x-15 tx-uppercase tx-11 mg-t-20 tx-orange mg-b-10 tx-medium">Recent Chat History</label>
      <div className="list-group list-group-chat">
        <a href="#" className="list-group-item">
          <div className="d-flex align-items-center">
            <img src="../img/img6.jpg" className="wd-32 rounded-circle" alt />
            <div className="mg-l-10">
              <h6>Russell M. Evans</h6>
              <span>Tuesday, 10:33am</span>
            </div>
          </div>{/* d-flex */}
          <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain...</p>
        </a>{/* list-group-item */}
        <a href="#" className="list-group-item">
          <div className="d-flex align-items-center">
            <img src="../img/img7.jpg" className="wd-32 rounded-circle" alt />
            <div className="mg-l-10">
              <h6>James F. Sears</h6>
              <span>Monday, 4:21pm</span>
            </div>
          </div>{/* d-flex */}
          <p>But who has any right to find fault with a man who chooses to enjoy a pleasure that has...</p>
        </a>{/* list-group-item */}
        <a href="#" className="list-group-item">
          <div className="d-flex align-items-center">
            <img src="../img/img8.jpg" className="wd-32 rounded-circle" alt />
            <div className="mg-l-10">
              <h6>Sharon R. Rowe</h6>
              <span>Sunday, 7:45pm</span>
            </div>
          </div>{/* d-flex */}
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
        </a>{/* list-group-item */}
        <a href="#" className="list-group-item">
          <div className="d-flex align-items-center">
            <img src="../img/img9.jpg" className="wd-32 rounded-circle" alt />
            <div className="mg-l-10">
              <h6>Ruby M. Martin</h6>
              <span>Sunday, 7:45pm</span>
            </div>
          </div>{/* d-flex */}
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
        </a>{/* list-group-item */}
        <a href="#" className="list-group-item">
          <div className="d-flex align-items-center">
            <img src="../img/img10.jpg" className="wd-32 rounded-circle" alt />
            <div className="mg-l-10">
              <h6>Joslyn C. Mayo</h6>
              <span>Sunday, 7:45pm</span>
            </div>
          </div>{/* d-flex */}
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising...</p>
        </a>{/* list-group-item */}
      </div>{/* list-group */}
      <span className="d-block pd-15 tx-12">Loading messages...</span>
      <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>{/* #chatMenu */}
    <div id="settingMenu" className="tab-pane ps ps--theme_default" data-ps-id="75973313-d179-be37-7d53-5e3e0f337ec5">
      <div className="pd-x-15">
        <label className="tx-uppercase tx-11 mg-t-10 tx-orange mg-b-15 tx-medium">Quick Settings</label>
        <div className="bd pd-15">
          <h6 className="tx-13 tx-normal tx-gray-800">Daily Newsletter</h6>
          <p className="tx-12">Get notified when someone else is trying to access your account.</p>
          <div className="toggle toggle-light warning" style={{height: 22, width: 50}}><div className="toggle-slide"><div className="toggle-inner" style={{width: 78, marginLeft: 0}}><div className="toggle-on active" style={{height: 22, width: 39, textIndent: '-7.33333px', lineHeight: 22}}>ON</div><div className="toggle-blob" style={{height: 22, width: 22, marginLeft: '-11px'}} /><div className="toggle-off" style={{height: 22, width: 39, marginLeft: '-11px', textIndent: '7.33333px', lineHeight: 22}}>OFF</div></div></div></div>
        </div>{/* bd */}
        <div className="bd pd-15 mg-t-15">
          <h6 className="tx-13 tx-normal tx-gray-800">Call Phones</h6>
          <p className="tx-12">Make calls to friends and family right from your account.</p>
          <div className="toggle toggle-light warning" style={{height: 22, width: 50}}><div className="toggle-slide"><div className="toggle-inner" style={{width: 78, marginLeft: 0}}><div className="toggle-on active" style={{height: 22, width: 39, textIndent: '-7.33333px', lineHeight: 22}}>ON</div><div className="toggle-blob" style={{height: 22, width: 22, marginLeft: '-11px'}} /><div className="toggle-off" style={{height: 22, width: 39, marginLeft: '-11px', textIndent: '7.33333px', lineHeight: 22}}>OFF</div></div></div></div>
        </div>{/* bd */}
        <div className="bd pd-15 mg-t-15">
          <h6 className="tx-13 tx-normal tx-gray-800">Login Notifications</h6>
          <p className="tx-12">Get notified when someone else is trying to access your account.</p>
          <div className="toggle toggle-light warning" style={{height: 22, width: 50}}><div className="toggle-slide"><div className="toggle-inner" style={{width: 78, marginLeft: 0}}><div className="toggle-on active" style={{height: 22, width: 39, textIndent: '-7.33333px', lineHeight: 22}}>ON</div><div className="toggle-blob" style={{height: 22, width: 22, marginLeft: '-11px'}} /><div className="toggle-off" style={{height: 22, width: 39, marginLeft: '-11px', textIndent: '7.33333px', lineHeight: 22}}>OFF</div></div></div></div>
        </div>{/* bd */}
        <div className="bd pd-15 mg-t-15">
          <h6 className="tx-13 tx-normal tx-gray-800">Phone Approvals</h6>
          <p className="tx-12">Use your phone when login as an extra layer of security.</p>
          <div className="toggle toggle-light warning" style={{height: 22, width: 50}}><div className="toggle-slide"><div className="toggle-inner" style={{width: 78, marginLeft: 0}}><div className="toggle-on active" style={{height: 22, width: 39, textIndent: '-7.33333px', lineHeight: 22}}>ON</div><div className="toggle-blob" style={{height: 22, width: 22, marginLeft: '-11px'}} /><div className="toggle-off" style={{height: 22, width: 39, marginLeft: '-11px', textIndent: '7.33333px', lineHeight: 22}}>OFF</div></div></div></div>
        </div>{/* bd */}
      </div>
      <div className="ps__scrollbar-x-rail" style={{left: 0, bottom: 0}}><div className="ps__scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} /></div><div className="ps__scrollbar-y-rail" style={{top: 0, right: 0}}><div className="ps__scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} /></div></div>{/* #settingMenu */} 
  </div>{/* tab-content */}
</div>

{children}
  </>
  )
}

export default Dashboard2