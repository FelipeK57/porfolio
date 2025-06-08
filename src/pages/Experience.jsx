export const Experience = () => {
  const experience = [
    {
      date: "Marzo 2025",
      title: "Desarrollador Full Stack",
      description:
        "Desarrollador Full Stack con React, Tailwind, Express y Node.js.",
      company: "Servicios Especializados de Medición y Control S.A.S",
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center h-full max-w-xs md:max-w-lg mx-auto">
      <p class="text-xl font-bold text-slate-50">Experiencia Profesional</p>
      <ol class="relative border-s border-zinc-800">
        {experience.map((exp, index) => (
          <li class="mb-10 ms-4" key={index}>
            <div class="absolute w-3 h-3 bg-zinc-200 rounded-full mt-1.5 -start-1.5"></div>
            <div className="flex flex-col gap-2 py-1">
              <time class="text-sm font-normal leading-none text-zinc-400">
                {exp.date}
              </time>
              <h3 class="text-base font-semibold text-zinc-900 dark:text-white">
                {exp.title}
              </h3>
              <p class="text-sm font-normal text-zinc-500">{exp.description}</p>
              <p class="text-xs font-normal text-zinc-500">
                Empresa: {exp.company}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
