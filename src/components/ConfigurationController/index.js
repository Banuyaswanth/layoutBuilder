import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showLeftNavbar,
        showRightNavbar,
        showContent,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="config-controller-bg-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="list-container">
            <li>
              <input
                onChange={onToggleShowContent}
                type="checkbox"
                id="content"
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li>
              <input
                onChange={onToggleShowLeftNavbar}
                type="checkbox"
                id="left"
                checked={showLeftNavbar}
              />
              <label htmlFor="left">Left Navbar</label>
            </li>
            <li>
              <input
                onChange={onToggleShowRightNavbar}
                type="checkbox"
                id="right"
                checked={showRightNavbar}
              />
              <label htmlFor="right">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
