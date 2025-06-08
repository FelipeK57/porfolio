export const TechCard = ({ name, exp, image }) => {
  const gradient = [
    {
      name: "react",
      from: "from-cyan-500",
      via: "via-cyan-600",
      to: "to-cyan-700",
    },
    {
      name: "tailwind",
      from: "from-sky-600",
      via: "via-sky-700",
      to: "to-sky-800",
    },
    {
      name: "javascript",
      from: "from-yellow-400",
      via: "via-yellow-500",
      to: "to-yellow-600",
    },
    {
      name: "node.js",
      from: "from-lime-600",
      via: "via-lime-700",
      to: "to-lime-800",
    },
    {
      name: "express",
      from: "from-zinc-600",
      via: "via-zinc-700",
      to: "to-zinc-800",
    },
    {
      name: "typescript",
      from: "from-blue-400",
      via: "via-blue-500",
      to: "to-blue-600",
    },
    {
      name: "django",
      from: "from-green-600",
      via: "via-green-700",
      to: "to-green-800",
    },
    {
      name: "python",
      from: "from-blue-300",
      via: "via-blue-400",
      to: "to-blue-500",
    },
    {
      name: "html",
      from: "from-orange-400",
      via: "via-orange-500",
      to: "to-orange-600",
    },
    {
      name: "css",
      from: "from-purple-400",
      via: "via-purple-500",
      to: "to-purple-600",
    },
    {
      name: "postgresql",
      from: "from-blue-800",
      via: "via-blue-900",
      to: "to-blue-950",
    },
    {
      name: "mysql",
      from: "from-sky-300",
      via: "via-sky-400",
      to: "to-sky-500",
    },
    {
      name: "figma",
      from: "from-neutral-700",
      via: "via-neutral-800",
      to: "to-neutral-900",
    },
    {
      name: "git",
      from: "from-neutral-700",
      via: "via-neutral-800",
      to: "to-neutral-900",
    },
    {
      name: "postman",
      from: "from-neutral-700",
      via: "via-neutral-800",
      to: "to-neutral-900",
    }
  ];

  const pickGradient = (name) => {
    const tech = gradient.find((g) => g.name === name.toLowerCase());
    return tech
      ? `${tech.from} ${tech.via} ${tech.to}`
      : "from-gray-500 via-gray-600 to-gray-700";
  };

  return (
    <div
      className={`relative group size-36 overflow-hidden rounded-xl bg-gradient-to-tl hover:scale-110 transition-transform ${pickGradient(
        name
      )}`}
    >
      <img
        className="absolute size-24 -bottom-4 -right-4 rounded-lg -rotate-6 group-hover:-bottom-2 group-hover:-right-2 transition-all"
        src={image}
        alt="logo de react"
      />
      <div className="absolute top-0 left-2 flex flex-col p-2">
        <p className="text-slate-50">{name}</p>
        <p className="text-slate-50">
          +{exp > 1 ? `${exp} Años` : `${exp} Año`}
        </p>
      </div>
    </div>
  );
};
