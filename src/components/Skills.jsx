const skills = [
  { name: "Penetration Testing", tool: "Burp Suite, Metasploit" },
  { name: "Network Security", tool: "Wireshark, Nmap" },
  { name: "Ethical Hacking", tool: "Kali Linux, Hydra" },
  { name: "Incident Response", tool: "Splunk, ELK Stack" },
  { name: "Web Security", tool: "OWASP, SQL Injection Testing" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-[#0E1629]">
      <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center">
        Skills & Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-[#0A0A0A] rounded-xl border border-blue-800 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transition-transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-cyan-400">{s.name}</h3>
            <p className="text-gray-400 mt-2">{s.tool}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
