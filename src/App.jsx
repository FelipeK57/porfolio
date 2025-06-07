import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { TechCard } from "./components/TechCard";

export const App = () => {
  return (
    <main className="min-h-screen px-4 py-6 bg-gradient-to-b from-slate-900 to-zinc-950">
      <Header />
      <Outlet />
      <div className="bottom-4 right-4 z-10 fixed justify-end items-center">
        <button className="w-fit bg-slate-200 text-slate-900 hover:bg-slate-50 hover:scale-110 transition-all font-semibold px-4 py-2 cursor-pointer rounded-lg">
          Contactame
        </button>
      </div>
    </main>
  );
};
