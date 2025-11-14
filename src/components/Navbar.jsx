import { Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-zinc-900"></div>
          <span className="font-semibold tracking-tight text-zinc-900">Balance Cars</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
          <a href="#problem" className="hover:text-zinc-900 transition-colors">Problem</a>
          <a href="#solution" className="hover:text-zinc-900 transition-colors">Solution</a>
          <a href="#how" className="hover:text-zinc-900 transition-colors">How it works</a>
          <a href="#benefits" className="hover:text-zinc-900 transition-colors">Benefits</a>
          <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition">
            <Search className="h-4 w-4" />
            <span>Smart search</span>
          </button>
          <button className="md:hidden p-2 rounded-md border border-zinc-300 text-zinc-700 hover:bg-zinc-50">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
