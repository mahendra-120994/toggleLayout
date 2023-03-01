import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body">
          <div className="left-nav-container">
            {showLeftNavbar && (
              <nav className="left-navbar">
                <h1 className="heading">Left Navbar Menu</h1>
                <ul className="left-nav-list">
                  <li>
                    <p className="left-nav-menu">Item 1</p>
                  </li>
                  <li>
                    <p className="left-nav-menu">Item 2</p>
                  </li>
                  <li>
                    <p className="left-nav-menu">Item 3</p>
                  </li>
                  <li>
                    <p className="left-nav-menu">Item 4</p>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <div className="content-container">
            {showContent && (
              <div className="content-box">
                <h1 className="heading">Content</h1>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                  eiusmod tempor incididunt ut labure et dolore magna eliqua. Ut
                  enim ad minim veniam
                </p>
              </div>
            )}
          </div>
          <div className="right-nav-container">
            {showRightNavbar && (
              <nav className="right-navbar">
                <h1 className="heading">Right Navbar Menu</h1>
                <div className="button">
                  <p>Ad 1</p>
                </div>
                <div className="button">
                  <p>Ad 2</p>
                </div>
              </nav>
            )}
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
