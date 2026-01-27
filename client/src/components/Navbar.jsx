export default function Navbar({ dark, setDark }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <h1 className="text-xl font-bold">Kumar Devansh</h1>

      <button
        onClick={() => setDark(!dark)}
        className={`px-4 py-2 rounded border transition
          ${
            dark
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white"
          }
        `}
      >
        {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </nav>
  )
}
