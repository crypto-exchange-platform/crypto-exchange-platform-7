import { FC } from "react";

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Market', href: '#market' },
  { label: 'News', href: '#news' },
  { label: 'Forex', href: '#forex' },
  { label: 'About', href: '#about' },
];

interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}
 
export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  return (
    <header className="bg-violet-950/30 from-[#6c5ce7] to-violet-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-coins text-2xl" />
          <span className="text-xl font-bold">CryptoV</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#00cec9] font-medium transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="bg-white text-[#6c5ce7] px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition" onClick={onSignup}>
            Sign In
          </button>
          <button className="hidden md:block bg-[#00cec9] text-white px-4 py-2 rounded-full font-medium hover:bg-[#009b93] transition" onClick={onLogin}>
            Log In
          </button>
          <button className="md:hidden text-white">
            <i className="fas fa-bars text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
 