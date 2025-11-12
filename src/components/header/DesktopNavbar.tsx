"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function DesktopNavbar() {
  return (
    <div className="hidden md:flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#home" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#projects" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#skills" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#contact" passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
export default DesktopNavbar;