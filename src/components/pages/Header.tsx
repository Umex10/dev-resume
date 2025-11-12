import MobileNavbar from "../header/MobileNavbar";
import Image from "next/image";
import ModeToggle from "../header/ModeToggle";
import DesktopNavbar from "../header/DesktopNavbar";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo Container */}
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-28 sm:h-12 sm:w-36">
            <Link href="/">
              <Image
                src="/username.png"
                alt="Umex10 Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-1">
          <div className="block md:hidden">
            <MobileNavbar />
          </div>

          <div className="hidden md:block">
            <DesktopNavbar />
          </div>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
export default Header;
