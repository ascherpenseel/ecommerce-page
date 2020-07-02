import React, { useState } from 'react'
import './styles.css'

function SubscribeForm({ cta, url }) {
  const [email, setEmail] = useState('')

  return (
    <form action={url} className="SubscribeForm">
      <label className="SubscribeForm-cta">{cta}</label>
      <div className="SubscribeForm-controls">
        <input
          type="text"
          className="SubscribeForm-input"
          placeholder="Email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
        <button type="submit" className="SubscribeForm-button">
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default SubscribeForm
