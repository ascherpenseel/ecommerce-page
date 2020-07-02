import React, { useState } from 'react'
import searchIcon from './search.svg'
import searchIconBlack from './search-black.svg'
import closeIcon from './close.svg'
import './styles.css'

function Search({ placeholder }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={`Search-bar ${open ? 'Search-bar--active' : ''}`}>
        <img className="Search-icon Search-icon--big" src={searchIconBlack} />
        <input className="Search-bar-input" placeholder={placeholder} />
        <img className="Search-bar-close" src={closeIcon} onClick={() => setOpen(false)} />
      </div>
      <div
        className={`Search-overlay ${open ? 'Search-overlay--active' : ''}`}
        onClick={() => setOpen(false)}
      ></div>
      <img className="Search-icon" src={searchIcon} onClick={() => setOpen(true)} />
    </>
  )
}

export default Search
