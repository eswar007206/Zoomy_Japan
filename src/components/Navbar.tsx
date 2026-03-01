import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100" style={{ height: "60px" }}>
      <div className="container mx-auto flex h-full items-center justify-between px-6 max-w-6xl">
        <Link to="/" className="flex items-center">
          <span className="text-lg font-semibold tracking-widest text-gray-700 uppercase">LOGO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/community" className="flex items-center gap-0.5 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            コミュニティ <ChevronDown className="h-3.5 w-3.5 mt-0.5" />
          </Link>
          <Link to="/circles" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            居場所・コウム
          </Link>
          <Link to="/events" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            イベント
          </Link>
          <Link
            to="/about"
            className="rounded-sm px-4 py-1.5 text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: "#5a9e9e" }}
          >
            問い合せ
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden" aria-label="メニュー">
            <Menu className="h-6 w-6 text-gray-700" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-white w-72 p-8">
            <SheetTitle className="sr-only">メニュー</SheetTitle>
            <nav className="mt-8 flex flex-col gap-6">
              <Link to="/" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-gray-900">ホーム</Link>
              <Link to="/community" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-gray-900">コミュニティ</Link>
              <Link to="/circles" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-gray-900">居場所・コウム</Link>
              <Link to="/events" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-gray-900">イベント</Link>
              <Link to="/about" onClick={() => setOpen(false)} className="text-base font-medium text-gray-700 hover:text-gray-900">問い合せ</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
