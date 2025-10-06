import Anin from "../assets/img/AninCrop.jpg"

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12"
    >
      <img
        src={Anin}
        alt="Profile"
        className="w-72 h-72 rounded-2xl shadow-lg object-cover border-2 border-blue-700 hover:scale-105 transition"
      />
      <div>
        <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
          I'm a {" "}
          <span className="text-blue-400 font-semibold">
          Cybersecurity Professional
          </span> {" "} with a strong interest and
          dedication to information systems and network security. My primary
          focus is protecting data, systems, and digital infrastructure from
          various cyber threats through proactive approaches, detection, and
          incident response.
        </p>
      </div>
    </section>
  );
}
