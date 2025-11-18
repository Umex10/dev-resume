import MobileNavbar from "./MobileNavbar";
import ModeToggle from "./ModeToggle";
import DesktopNavbar from "./DesktopNavbar";
import Logo from "./Logo";


function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo Container */}
        <Logo/>

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
