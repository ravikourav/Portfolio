import React from "react";

function Header() {
  const navLinks = [
    { name: "Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed w-full top-0 z-50 flex h-[65px] px-8 sm:px-20 justify-between items-center rounded-2xl bg-white/40 backdrop-blur-md shadow-md">
      <a
        href="#home"
        className="text-2xl font-semibold hover:text-(--brand-primary) cursor-pointer"
      >
        Portfolio
      </a>

      <div className="flex gap-6 font-medium text-sm">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="relative text-gray-700 hover:text-(--brand-primary) transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-(--brand-primary) hover:after:w-full after:transition-all"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
