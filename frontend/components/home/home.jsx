import React from 'react';

class Home extends React.Component{
    render() {
        return (
          <div id="home-page">
            <img id="bg" src="assets/connecting.jpg" height="500" width="500" />
            <div id="text">
              <h2>For developers, by developers</h2>
              <div id="divider"></div>
              <span>
                Stack Overflow is an open community for anyone that codes. We
                help you get answers to your toughest coding questions, share
                knowledge with your coworkers in private, and find your next
                dream job.
              </span>
              <h2>For businesses, by developers</h2>
              <div id="divider"></div>
              <span>
                Our mission is to help developers write the script of the
                future. This means helping you find and hire skilled developers
                for your business and providing them the tools they need to
                share knowledge and work effectively.
              </span>
              <h2>Questions are everywhere, answers are on Stack Overflow</h2>
              <div id="divider"></div>
              <span>
                Ask a question publicly on 170+ Stack Exchange sites or
                privately using Stack Overflow for Teams.
              </span>
              <h2>Learn and grow with Stack Overflow</h2>
              <div id="divider"></div>
              <span>
                Get your coding questions answered to learn, build, and level up
                whether you’re beginning with JavaScript or a React
                professional.
              </span>
            </div>
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
                    <a href="https://angel.co/">Blog</a>
                  </li>
                  <br />
                  <li>
                    <a href="https://www.facebook.com/officialstackoverflow/">
                      Facebook
                    </a>
                  </li>
                  <br />
                  <li>
                    <a href="https://twitter.com/stackoverflow">Twitter</a>
                  </li>
                  <br />
                  <li>
                    <a href="https://www.linkedin.com/">LinkedIn</a>
                  </li>
                </div>
              </div>
              <div id="copy-rights">
                site design / logo © 2020 Stack Exchange Inc; user contributions
                licensed under cc by-sa 4.0 with attribution required. rev
                2020.1.8.35739
              </div>
            </div>
          </div>
        );
    }
}

export default Home;