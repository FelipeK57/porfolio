import { Header } from "./components/Header";
import { AboutMe } from "./pages/AboutMe";
import { Skills } from "./pages/Skills";

export const App = () => {
  return (
    <main className="flex flex-col gap-4 min-h-screen px-4 py-6 bg-gradient-to-b from-slate-900 to-zinc-950">
      <Header />
      <AboutMe />
      <div className="flex flex-col gap-6 items-center h-full max-w-sm md:max-w-lg mx-auto px-4">
        <p className="text-2xl font-bold text-slate-50">
          Experiencia Profesional
        </p>
        <ol className="relative border-l border-slate-800 pl-6">
          <li className="mb-10">
            <div className="absolute w-3 h-3 bg-slate-200 rounded-full -left-1.5 top-1"></div>
            <div className="flex flex-col gap-2">
              <time className="text-sm text-zinc-400">
                Marzo 2025 - Presente
              </time>
              <h3 className="text-lg font-semibold text-slate-50">
                Rol: Desarrollador Full Stack
              </h3>
              <p className="text-sm text-slate-100">
                Empresa: Sistema Especializado de Medición y Control S.A.S
              </p>
              <p className="text-sm text-slate-400">
                ¿Qué hice? - Desarrollé un sistema para gestionar usuarios que
                interactúa con los diferentes sistemas de la empresa. Permite
                editar datos personales, modificar roles en sistemas externos e
                integra una API centralizada para el inicio de sesión y
                recuperación de contraseña desde plataformas conectadas.
              </p>
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  Responsabilidades principales:
                </p>
                <ol className="list-decimal list-inside text-sm text-slate-400 mt-1">
                  <li>
                    Diseñar y desarrollar una API RESTful para gestionar
                    usuarios y autenticar desde sistemas externos.
                  </li>
                  <li>Probar y validar los endpoints utilizando Postman.</li>
                  <li>Implementar una interfaz intuitiva y responsiva.</li>
                </ol>
              </div>
              <p className="text-sm text-zinc-100">
                Stack de trabajo: TypeScript, React, Express y PostgreSQL
              </p>
            </div>
          </li>
        </ol>
      </div>
      <Skills />
      <div className="bottom-4 right-4 z-10 fixed justify-end items-center">
        <button className="w-fit bg-slate-200 text-slate-900 hover:bg-slate-50 hover:scale-110 transition-all font-semibold px-4 py-2 cursor-pointer rounded-lg">
          Contactame
        </button>
      </div>
    </main>
  );
};
