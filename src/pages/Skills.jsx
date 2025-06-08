import { TechCard } from "../components/TechCard";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-2 items-center h-full max-w-sm md:max-w-lg mx-auto">
      <p className="font-semibold text-slate-50 text-xl">Habilidades</p>
      <p className="text-slate-300 text-lg">Lenguajes</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <TechCard
          name="HTML"
          image="https://icon.icepanel.io/Technology/svg/HTML5.svg"
          exp={3}
        />
        <TechCard
          name="CSS"
          image="https://github.com/CSS-Next/logo.css/raw/main/css.svg"
          exp={3}
        />
        <TechCard
          name="JavaScript"
          image="https://icon.icepanel.io/Technology/svg/JavaScript.svg"
          exp={3}
        />
        <TechCard
          name="Python"
          image="https://icon.icepanel.io/Technology/svg/Python.svg"
          exp={3}
        />
        <TechCard
          name="TypeScript"
          image="https://icon.icepanel.io/Technology/svg/TypeScript.svg"
          exp={1}
        />
      </div>
      <p className="text-slate-300 text-lg">Tecnologías Frontend</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <TechCard
          name="React"
          image="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
          exp={3}
        />
        <TechCard
          name="Tailwind"
          image="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
          exp={2}
        />
      </div>
      <p className="text-slate-300 text-lg">Tecnologías Backend</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <TechCard
          name="Django"
          image="https://icon.icepanel.io/Technology/png-shadow-512/Django.png"
          exp={2}
        />
        <TechCard
          name="Express"
          image="https://icon.icepanel.io/Technology/png-shadow-512/Express.png"
          exp={1}
        />
        <TechCard
          name="Node.js"
          image="https://icon.icepanel.io/Technology/svg/Node.js.svg"
          exp={1}
        />
      </div>
      <p className="text-slate-300 text-lg">Bases de Datos</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <TechCard
          name="PostgreSQL"
          image="https://icon.icepanel.io/Technology/svg/PostgresSQL.svg"
          exp={2}
        />
        <TechCard
          name="MySQL"
          image="https://icon.icepanel.io/Technology/svg/MySQL.svg"
          exp={2}
        />
      </div>
      <p className="font-semibold text-slate-300 text-lg">Herramientas</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <TechCard
          name="Figma"
          image="https://icon.icepanel.io/Technology/svg/Figma.svg"
          exp={2}
        />
        <TechCard
          name="Postman"
          image="https://icon.icepanel.io/Technology/svg/Postman.svg"
          exp={2}
        />
      </div>
    </div>
  );
};
