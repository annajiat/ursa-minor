import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../styles/images/Creative-Commons-Attribution-ShareAlike-40-International-Public.png'

const links = [
  {
    href: 'http://www.sourcemap.com/',
    prefix: 'powered by ',
    text: 'Sourcemap',
    external: true,
    newTab: true
  },
  {
    href: 'https://info.openapparel.org/tos/',
    text: 'Terms of Service',
    external: true,
    newTab: true
  },
  {
    href: 'https://info.openapparel.org/contact/',
    text: 'Support',
    external: true,
    newTab: true
  }
]

export default () => (
  <div className="footerContainer" xs={ 12 }>
    <div className="links">
      { links.map(l => {
        if (l.external && 'prefix' in l) {
          return (
            <p className="link" key={ l.text }>
              { l.prefix }<a href={ l.href } target={ l.newTab ? '_blank' : null } rel="noopener noreferrer">{ l.text }</a>
            </p>
          )
        }
        if (l.external) {
          return (
            <p className="link" key={ l.text }>
              <a href={ l.href } target={ l.newTab ? '_blank' : null } rel="noopener noreferrer">{ l.text }</a>
            </p>
          )
        }
        return <Link to={ l.href } key={ l.text }>{ l.text }</Link>
      })}
    </div>
    <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" target="_blank" rel="noopener noreferrer"><img className="footer-image" src={ logo } alt="Creative Commons Attribution" /></a>
  </div>
)
