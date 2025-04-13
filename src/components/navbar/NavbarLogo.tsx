import { Link } from "react-router"



const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
        <span className="font-logo text-3xl text-primary">
            Savannah
        </span>
    </Link>
  )
}

export default NavbarLogo