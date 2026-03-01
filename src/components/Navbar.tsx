import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { label: "ホーム", path: "/" },
  { label: "コミュニティ", path: "/community" },
  { label: "サークル", path: "/circles" },
  { label: "イベント", path: "/events" },
  { label: "コラム", path: "/column" },
  { label: "について", path: "/about" },
  { label: "ログイン", path: "/login" },
];

const isActiveRoute = (pathname: string, itemPath: string) => {
  if (itemPath === "/") return pathname === "/";
  return pathname === itemPath || pathname.startsWith(itemPath + "/");
};

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm" style={{ height: "70px" }}>
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="OTONA CIRCLE" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                isActiveRoute(location.pathname, item.path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden" aria-label="メニュー">
            <Menu className="h-6 w-6 text-foreground" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background-secondary w-72 p-8">
            <SheetTitle className="sr-only">メニュー</SheetTitle>
            <nav className="mt-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                    isActiveRoute(location.pathname, item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
