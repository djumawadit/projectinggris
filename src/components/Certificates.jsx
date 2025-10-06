export default function Certificates() {
  const certificates = [
    {
      title: "IT Essential",
      issuer: "Cisco Networking Academy",
      file: "/certificates/IT_Essentials_certificate_aninditya.pdf",
    },
    {
      title: "Introduction to Information Security Course",
      issuer: "Cyber Academy",
      file: "/certificates/Certificate-of-Completion-Introduction-to-Information-Security.pdf",
    },
    {
      title: "Classical Cryptography for Beginner Course",
      issuer: "Cyber Academy",
      file: "/certificates/Certificate-of-Completion-Classical-Cryptography-for-Beginner.pdf",
    },
    {
      title: "AI Opportunity Funding",
      issuer: "Remote Skills Academy",
      file: "/certificates/Certificate-of-ResponsibleAI-by-AI-Opportunity.pdf",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-6 md:px-20 bg-blue-950/20">
      <h2 className="text-3xl font-bold mb-10 text-blue-400 text-center">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-blue-900/30 rounded-xl border border-blue-700 hover:shadow-lg hover:scale-105 transition block"
          >
            <h3 className="text-xl font-semibold text-blue-300">
              {cert.title}
            </h3>
            <p className="text-gray-300 mt-2">{cert.issuer}</p>
            <p className="mt-3 text-sm text-blue-400 underline">
              View Certificate →
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
