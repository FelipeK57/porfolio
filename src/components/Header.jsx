export const Header = () => {
  return (
    <main className="relative w-full">
      <header className="flex flex-col gap-4 items-center justify-center h-fit max-w-sm md:max-w-lg mx-auto pb-4">
        <h1 className="text-xl font-semibold text-slate-50">
          Hola, Soy Kevin Bolaños
        </h1>
        <div className="w-fit group text-slate-50 p-0.5 rounded-full border-transparent bg-clip-padding bg-gradient-to-br from-zinc-400 to-zinc-500 shadow-2xl shadow-indigo-500">
          <span className="block font-medium bg-gradient-to-br from-slate-900 to-zinc-950 rounded-full px-3 py-1 bg-clip-padding">
            Desarrollador Full Stack
          </span>
        </div>
        <h3 className="text-slate-100 text-center text-sm">
          Interfaz limpia, Backend confiable.
        </h3>
      </header>
    </main>
  );
};
