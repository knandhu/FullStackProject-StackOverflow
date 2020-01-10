import React from 'react';

class Footer extends React.Component{
    render() {
        return (
          <div id="home-footer">
            <div id="items">
              <img
                id="footer-logo"
                src={window.logoURL}
                height="70"
                width="40"
              />
              <ul>
                STACK OVERFLOW
                <li>Questions </li>
                <li>Jobs</li>
                <li>Developer Jobs Directory</li>
                <li>Salary Calculator</li>
                <li>Help</li>
                <li>Mobile</li>
                <li>Disable Responsiveness</li>
              </ul>
              <ul>
                PRODUCTS
                <li>Teams</li>
                <li>Talent</li>
                <li>Advertising</li>
                <li>Enterprise</li>
              </ul>
              <ul>
                COMPANY
                <li>About </li>
                <li>Press</li>
                <li>Work Here</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
              <ul>
                STACK EXCHANGE NETWORK
                <li>Technology </li>
                <li>Life/Arts</li>
                <li>Culture/Recreation</li>
                <li>Science</li>
                <li>Other</li>
              </ul>
              <div id="links">
                <li>
                  <a href="https://angel.co/jobs">AngelList</a>
                </li>
                <br />
                <li>
                  <a href="https://www.facebook.com/nandhu.kuppusamy">
                    Facebook
                  </a>
                </li>
                <br />
                <li>
                  <a href="https://github.com/knandhu">GitHub</a>
                </li>
                <br />
                <li>
                  <a href="https://www.linkedin.com/feed/">LinkedIn</a>
                </li>
              </div>
            </div>
            <div id="copy-rights">
              site design / logo © 2020 Stack Exchange Inc; user contributions
              licensed under cc by-sa 4.0 with attribution required. rev
              2020.1.8.35739
            </div>
          </div>
        );
    }
}

export default Footer;