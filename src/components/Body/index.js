import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showRightNavbar, showContent} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <nav className="menu">
              <h1 className="side-heading">Left Navbar Menu</h1>
              <ul className="left-menu-list">
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </nav>
          )}
          {showContent && (
            <div className="content">
              <h1 className="side-heading">Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae lorem eget mi euismod auctor egestas nec
                augue. Etiam in pharetra lorem.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="menu ad">
              <h1 className="side-heading">Right Navbar</h1>
              <div className="ad-container">
                <div className="ad-item">
                  <p>Ad 1</p>
                </div>
                <div className="ad-item">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
