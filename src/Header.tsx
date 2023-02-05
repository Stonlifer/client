import { Link } from '@tanstack/react-router'

import PersonIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchIcon from '@mui/icons-material/SearchOutlined'
import CartIcon from '@mui/icons-material/LocalMallOutlined'

function Dot() {
  return <div className="h-[3px] w-[3px] rounded-full bg-primary/50" />
}

function Header() {
  return (
    <header className="grid h-20 grid-cols-3 items-center">
      <Link to="/">
        <img
          src="/logo.svg"
          className="pointer-events-none h-10"
          alt="MIT logo"
        />
      </Link>

      <nav className="m-auto  text-primary">
        <ul className="flex items-center gap-5 font-semibold">
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <Dot />
          <li>
            <Link to="/men">MEN</Link>
          </li>
          <Dot />
          <li>
            <Link to="/women">WOMEN</Link>
          </li>
          <Dot />
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-end">
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/">
              <PersonIcon />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <SearchIcon />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
