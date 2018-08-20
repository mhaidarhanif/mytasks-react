import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const configs = [
  {
    title: 'Register',
    primary: 'Register',
    primaryTo: '/account/register',
    primaryURL: '/register',
    secondary: 'Activate Account',
    secondaryTo: '/account/activate'
  },
  {
    title: 'Login',
    primary: 'Login',
    primaryTo: '/account/login',
    primaryURL: '/login',
    secondary: 'Recover Password',
    secondaryTo: '/account/recover'
  }
]

class FormAuth extends React.Component {
  render() {
    return (
      <div>
        {configs.map(config => {
          return (
            <div key={config.primary} className="row center">
              <div className="col-xs-11 col-sm-10 col-md-8 col-lg-6 center modal">
                <h3>{config.title}</h3>
                <form className="form">
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      className="input"
                      type="email"
                      placeholder="yourname@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input className="input" type="password" />
                  </div>
                  <div className="form-group">
                    <button className="button primary" type="submit">
                      {config.primary}
                    </button>
                    <Link
                      className="button help"
                      type="button"
                      to={config.secondaryTo}
                    >
                      {config.secondary}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default FormAuth
