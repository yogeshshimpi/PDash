import { useState } from 'react'
import './Navbar.css'
import { IoClose, IoSearchOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const [search, setSearch] = useState('')

  return (
    <nav className="navbar" aria-label="Top navigation">
      <label className="search" htmlFor="global-search">
        <span className="sr-only">Search workspace</span>
        <div className="searchInput">
          <IoSearchOutline className="search-icon" size={19} aria-hidden="true" />
          <input
            id="global-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search tasks, notes, goals..."
          />
          {search && (
            <button
              className="clear-search"
              type="button"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              <IoClose size={18} aria-hidden="true" />
            </button>
          )}
        </div>
      </label>
      <button className="login" type="button" aria-label="Open user account menu">
        <div className="user_logo" aria-hidden="true">
          <FaUserCircle size={32}/>
        </div>
        <span className="user_detail"><span className="username">Yogesh Shimpi</span>
        <span className="email">yogeshshimpi320@gmail.com</span></span>
      </button>
    </nav>
  )
}

export default Navbar
