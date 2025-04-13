import NavbarLogo from "./navbar/NavbarLogo"

const NavbarMain = () => {
  return (
   <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <NavbarLogo />
        </div>
      </div>
    </div>
   </nav>
  )
}

export default NavbarMain