import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">Contact</h2>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Let's collaborate on security projects or discuss cyber defense strategies.  
        Feel free to reach out through these platforms:
      </p>
      <div className="flex justify-center space-x-8 text-3xl">
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:email@example.com"
          className="hover:text-cyan-400 transition-transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
