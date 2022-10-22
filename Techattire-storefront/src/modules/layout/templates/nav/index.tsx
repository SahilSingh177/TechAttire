import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      // document.getElementById("navImg")?.setAttribute("src", "https://user-images.githubusercontent.com/96344003/197344656-cbbffdae-b711-45b7-8632-ab7ef238fd79.png")
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          document.getElementById("navImg")?.setAttribute("src", "https://user-images.githubusercontent.com/96344003/197344656-cbbffdae-b711-45b7-8632-ab7ef238fd79.png")
          setIsScrolled(true)
        } else {
          document.getElementById("navImg")?.setAttribute("src", "https://user-images.githubusercontent.com/96344003/197344378-3dc5a843-6418-4165-b294-e2a344c1ef4d.png")
          setIsScrolled(false)
        }
      }
      
      
      window.addEventListener("scroll", detectScrollY)
      
      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
    document.getElementById("navImg")?.setAttribute("src", "https://user-images.githubusercontent.com/96344003/197344656-cbbffdae-b711-45b7-8632-ab7ef238fd79.png")  
  }, [isHome])
  
  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])
  
  const { toggle } = useMobileMenu()
  
  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <link href="http://fonts.cdnfonts.com/css/dancing-script" rel="stylesheet"/>
      <header
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
          {
            "!bg-white !border-gray-200": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            }
          )} 
        >
          <div className="flex-1 basis-0 h-full flex items-center">
            <img src="https://user-images.githubusercontent.com/96344003/197344378-3dc5a843-6418-4165-b294-e2a344c1ef4d.png" id="navImg"   style={{ height: "2em", margin: "0 1.4em 0 -0.3em" }}  />
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:block h-full">
              <DropdownMenu />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link href="/">
              <a className="text-xl-semi" style={{fontFamily:'Dancing Script, sans-serif',fontSize:"2.9em"}}>TechAttire</a>
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">
                <a>Account</a>
              </Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
