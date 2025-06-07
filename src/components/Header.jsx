import { Link, useLocation } from "react-router";

export const Header = () => {
  const links = [
    { name: "Inicio", href: "" },
    { name: "Experiencia", href: "experience" },
    { name: "Proyectos", href: "projects" },
  ];

  const location = useLocation().pathname;
  return (
    <header className="flex flex-col gap-4 items-center justify-center h-fit max-w-sm md:max-w-lg mx-auto pb-4">
      <h1 className="text-xl font-semibold text-slate-50">
        Kevin Bolaños Orozco
      </h1>
      <nav className="flex items-center justify-evenly w-full text-slate-50">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className={`transition-colors ${
              location === `/${link.href}` ? "text-zinc-50" : "text-zinc-600"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
