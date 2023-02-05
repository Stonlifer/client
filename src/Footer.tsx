import { Link } from '@tanstack/react-router'
import SendIcon from '@mui/icons-material/Send'
import Container from '@mui/material/Container'

function Footer() {
  return (
    <Container className=" bg-dark py-20" maxWidth="xl">
      <footer className="grid w-full grid-cols-7">
        <div className="col-span-2 flex h-full flex-col justify-between">
          <Link to="/">
            <img
              src="/logo-white.svg"
              className="pointer-events-none h-14"
              alt="MIT logo"
            />
          </Link>

          <p className="whitespace-pre font-semibold text-white">
            DESIGNED BY MAZYAR FARHAD
            <br />
            FOR MEDICAL IT TEST
          </p>
        </div>

        <div className="flex h-full">
          <div className="m-auto">
            <h4 className="text-xl font-semibold text-white">PRODUCTS</h4>

            <ul className="mt-4 flex w-auto flex-col gap-y-3">
              <li className="text-grayed">
                <Link to="/products">MEN</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/1">WOMEN</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/2">NIKE</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/3">UNDER ARMOUR</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/3">ADDIDAS</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex h-full">
          <div className="m-auto">
            <h4 className="text-xl font-semibold text-white">BUYING</h4>

            <ul className="mt-4 flex w-auto flex-col gap-y-3">
              <li className="text-grayed">
                <Link to="/products">SHOP</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/1">TERMS</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/2">CART</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/3">ABOUT US</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/3">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex h-full">
          <div className="mx-auto">
            <h4 className="text-xl font-semibold text-white">SOCIAL</h4>

            <ul className="mt-4 flex w-auto flex-col gap-y-3">
              <li className="text-grayed">
                <Link to="/products">FACEBOOK</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/1">INSTAGRAM</Link>
              </li>
              <li className="text-grayed">
                <Link to="/products/2">TWITTER</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-span-2 flex h-full justify-center">
          <div className="w-3/4">
            <h4 className="text-xl font-semibold text-white">
              SEND US AN EMAIL
            </h4>

            <form className="mt-4 flex flex-col gap-y-3">
              <div className="relative">
                <input
                  aria-label="email address"
                  id="myinput"
                  type="text"
                  placeholder="EMAIL ADDRESS"
                  className="w-full rounded-full border border-grayed bg-dark py-3 pl-3 pr-12 text-white"
                />

                <button
                  aria-label="send email"
                  type="submit"
                  className="absolute right-2 top-[50%] -translate-y-[50%] rounded-full bg-accent p-1.5"
                >
                  <SendIcon className="text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
