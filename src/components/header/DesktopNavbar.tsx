"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function DesktopNavbar() {
  const handleLenisScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();

    const HEADER_OFFSET = 64;

    window.lenis?.scrollTo(target, {
      offset: -HEADER_OFFSET,
      duration: 1.2,
    });
  };

  return (
    <div className="hidden md:flex items-center gap-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#home" onClick={(e) => handleLenisScroll(e, "#home")}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#apps" onClick={(e) => handleLenisScroll(e, "#apps")}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Apps
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="#skills"
              onClick={(e) => handleLenisScroll(e, "#skills")}
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Skills
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="#contact"
              onClick={(e) => handleLenisScroll(e, "#contact")}
            >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default DesktopNavbar;
