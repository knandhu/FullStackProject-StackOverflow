import React from 'react';
import Footer from './footer';

class Home extends React.Component{
    render() {
        return (
          <div id="home-page">
            <div id='bg'>
              
            </div>
            {/* <img id="bg" src={window.bgURL} /> */}
            <div id="text">
              <h2>For developers, by developers</h2>
              <br />
              <div id="divider"></div>
              <span>
                Get Answers is an open community for anyone that codes. We
                help you get answers to your toughest coding questions, share
                knowledge with your coworkers in private, and find your next
                dream job.
              </span>
              <br />
              <h2>For businesses, by developers</h2>
              <br />
              <div id="divider"></div>
              <span>
                Our mission is to help developers write the script of the
                future. This means helping you find and hire skilled developers
                for your business and providing them the tools they need to
                share knowledge and work effectively.
              </span>
              <br />
              <h2>Questions are everywhere, answers are on Get Answers</h2>
              <br />
              <div id="divider"></div>
              <span>
                Ask a question publicly on 170+ Get Answers site
              </span>
              <br />
              <h2>Learn and grow with Get Answers</h2>
              <br />
              <div id="divider"></div>
              <span>
                Get your coding questions answered to learn, build, and level up
                whether you’re beginning with JavaScript or a React
                professional.
              </span>
              <br />
            </div>
            <footer><Footer/></footer>
          </div>
        );
    }
}

export default Home;
