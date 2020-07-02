import React from 'react'
import SubscribeForm from 'Components/SubscribeForm'
import './styles.css'
import twitterLogo from './tw.svg'
import facebookLogo from './fb.svg'
import instagramLogo from './ig.svg'

function Footer({ menu, hasSubscribe, subscribeCTA, subscribeUrl, bgImage, logo, socialLinks }) {
  const menuElements = menu.map((col, i) => {
    const items = col.items.map((item, j) => (
      <a key={j} className="Footer-menu-item" href={item.url}>
        {item.name}
      </a>
    ))
    return (
      <div key={i} className="Footer-menu">
        <div className="Footer-menu-title">{col.title}</div>
        {items}
      </div>
    )
  })

  const style = {
    backgroundImage: `url(${bgImage})`,
  }

  return (
    <div className="section-footer">
      <div className="Footer" style={style}>
        <div className="Footer-grid">
          {menuElements}
          {hasSubscribe ? <SubscribeForm cta={subscribeCTA} url={subscribeUrl} /> : ''}
        </div>
        <div className="Footer-secondrow">
          <img className="Footer-logo" src={logo} />
          <div className="Footer-socials">
            <a href={socialLinks.instagram}>
              <img className="Footer-ig Footer-social-logo" src={instagramLogo} />
            </a>
            <a href={socialLinks.facebook}>
              <img className="Footer-fb Footer-social-logo" src={facebookLogo} />
            </a>
            <a href={socialLinks.twitter}>
              <img className="Footer-tw Footer-social-logo" src={twitterLogo} />
            </a>
          </div>
        </div>
        <div className="Footer-thirdrow">
          <div className="Footer-legal-text">2020 Nomad Goods, Inc. All rights reserved.</div>
          <div className="Footer-legal-links">
            <a href="https://nomadgoods.com/pages/privacy">Privacy</a>
            <a href="https://nomadgoods.com/pages/terms">Terms</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
