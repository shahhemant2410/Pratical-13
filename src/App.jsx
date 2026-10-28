
import React from "react";
import { HashRouter,MemoryRouter,StaticRouter, Routes,Route,Link,useLocation,} from "react-router-dom";

function Home() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-blue-600">
        Home Page
      </h3>
      <p className="mt-2 text-gray-600">
        Welcome to the React Router demonstration.
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-green-600">
        About Page
      </h3>
      <p className="mt-2 text-gray-600">
        This page demonstrates route navigation.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-purple-600">
        Contact Page
      </h3>
      <p className="mt-2 text-gray-600">
        This is the contact page.
      </p>
    </div>
  );
}

function NavigationPages() {
  const location = useLocation();

  return (
    <div>
      <div className="mb-4 rounded-lg bg-gray-100 p-3">
        <span className="font-semibold">Current Path: </span>
        <span className="text-blue-700">
          {location.pathname}
        </span>
      </div>

      <nav className="mb-6 flex flex-wrap gap-3">
        <Link
          to="/"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
        >
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function RouterCard({ title, description, children }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="mb-2 text-2xl font-bold text-gray-800">
        {title}
      </h2>

      <p className="mb-5 text-gray-500">{description}</p>

      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-8">
      <header className="mx-auto mb-10 max-w-5xl text-center">
        <h1 className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
          React Router Types
        </h1>

        <p className="mt-3 text-gray-600">
          Demonstration of HashRouter, MemoryRouter and StaticRouter
        </p>
      </header>

      <main className="mx-auto grid max-w-5xl gap-8">

        {/* HashRouter */}
        <RouterCard
          title="1. HashRouter"
          description="Uses the # symbol to manage routes in the browser URL."
        >
          <HashRouter>
            <NavigationPages />
          </HashRouter>
          <p className="mt-4 text-sm text-gray-500">
            Use: Static hosting and simple single-page applications.
          </p>
        </RouterCard>

        {/* MemoryRouter */}
        <RouterCard
          title="2. MemoryRouter"
          description="Stores navigation history in memory without changing the browser URL."
        >
          <MemoryRouter initialEntries={["/"]}>
            <NavigationPages />
          </MemoryRouter>
          <p className="mt-4 text-sm text-gray-500">
            Use: Unit testing and embedded navigation flows.
          </p>
        </RouterCard>

        {/* StaticRouter */}
        <RouterCard
          title="3. StaticRouter"
          description="Renders a fixed route, mainly for server-side rendering."
        >
          <StaticRouter location="/about">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </StaticRouter>

          <p className="mt-4 text-sm text-gray-500">
            Fixed location: /about
          </p>
          <p className="mt-2 text-sm text-orange-700">
            Note: StaticRouter is intended for server rendering,
            not normal interactive browser navigation.
          </p>
        </RouterCard>

      </main>

      <footer className="mt-10 text-center text-sm text-gray-500">
        React JS + React Router + Tailwind CSS
      </footer>
    </div>
  );
}
