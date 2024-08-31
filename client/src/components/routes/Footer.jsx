import React from 'react';

function Footer({}) {
  return (
    <>
     <footer>
      <div className="container">
        <div className="row">
          <div className="foot-col">
            <h4>e-PMSSS</h4>
            <ul>
              <li><a href="#">About PMSSS</a></li>
              <li><a href="#">Eligibility</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">SignUp</a></li>
              <li><a href="#">Status Bar</a></li>
              <li><a href="#">Dashboard</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Help Desk</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Announcements</a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#">SignUp</a></li>
              <li><a href="#">Announcements</a></li>
              <li><a href="#">Help Desk</a></li>
            </ul>
          </div>
        </div>
      </div>
     </footer>
    </>
  );
}

export default Footer;