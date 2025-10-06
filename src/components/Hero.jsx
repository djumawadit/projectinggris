export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#0A0A0A] via-[#0D1B2A] to-[#0A0A0A]"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_#1E90FF]">
        Hi, I'm Aninditya
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Protecting systems, networks, and data from digital threats
      </p>
      <a
        href="#contact"
        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg hover:scale-105 hover:shadow-cyan-400/40 transition-transform font-semibold"
      >
        Connect with Me
      </a>
    </section>
  );
}
