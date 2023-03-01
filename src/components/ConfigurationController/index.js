import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <nav className="nav-bar">
          <h1 className="nav-hdg">Layout</h1>
          <ul className="nav-list">
            <li className="nav-list-item">
              <input
                type="checkbox"
                id="content"
                className="checkbox"
                onChange={onToggleShowContent}
                checked={showContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </li>
            <li className="nav-list-item">
              <input
                type="checkbox"
                id="left-navbar"
                className="checkbox"
                onChange={onToggleShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="left-navbar" className="label">
                Left Navbar
              </label>
            </li>
            <li className="nav-list-item">
              <input
                type="checkbox"
                id="right-navbar"
                className="checkbox"
                onChange={onToggleShowRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="right-navbar" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
