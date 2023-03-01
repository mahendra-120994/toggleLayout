import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

import './index.css'

const Layout = () => (
  <div className="layout-container">
    <div className="layout-base">
      <Header />
      <div className="body-container">
        <Body />
      </div>
      <Footer />
    </div>
  </div>
)
export default Layout
