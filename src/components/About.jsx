import { useState } from "react";

const certificates = [
  {
    src: "/jhansi.png",
    title: "Jhansi Hackathon – Participant",
  },
  {
    src: "/Data_Analysis.png",
    title: "Data analysis with Python",
  },
  {
    src: "/postman.png",
    title: "Postman API Expert Certificate",
  },
  {
    src: "/data_science.png",
    title: "Data Science 101",
  },
  {
    src: "/google.png",
    title: "Generative AI",
  },
  {
    src: "/Bundelkhand.png",
    title: "Bundelkhand Hackathon",
  },
];


function About() {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>

        {/* Summary */}
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            I am Aashish Gupta, a passionate Full Stack Developer and Data Science enthusiast.
            With hands-on experience in the MERN stack and multiple certifications under my belt,
            I love transforming ideas into real-world applications. I enjoy solving problems,
            learning new technologies, and continuously improving my skills.
          </p>
        </div>

        {/* Education */}
        <div className=" shadow-md rounded-lg p-6 mb-10 text-white">
          <h3 className="text-2xl font-semibold mb-4">Education & Training</h3>
          <ul className="list-disc list-inside space-y-3 text-black">
            <li>
              <b>Master of Computer Applications (MCA)</b> – Dr. Harisingh Gour Vishwavidyalaya, Sagar
              <br />2023 – 2025
            </li>
            <li>
              <b> MERN Stack Development Training</b> – 2025
              <ul className="list-disc list-inside ml-4 mt-1 text-sm">
                <li>MongoDB – NoSQL database modeling and CRUD operations</li>
                <li>Express.js – REST API design and middleware</li>
                <li>React.js – SPA development, state management (hooks/context)</li>
                <li>Node.js – Backend development with RESTful services</li>
              </ul>
            </li>
            <li><b>Python Programming</b> – Udemy (March 2024)</li>
            <li><b>Data Analysis in Python</b> – IBM(April 2024)</li>
            <li><b>Data Science 101</b> – IBM (May 2024)</li>
            <li><b>Generative AI </b> – Google(July 2025)</li>
            <li><b>Machine Learning and Deep Learning </b> – IBM(July 2025)</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
            <div><b>Languages:</b> <p>JavaScript, Python, Java, HTML5, CSS3</p></div>
            <div><b>Frameworks & Libraries:</b> <p>React.js, Node.js, Express.js, Tailwind CSS</p></div>
            <div><b>Databases:</b> <p>MongoDB, MySQL</p></div>
            <div><b>Tools:</b> <p>Git, GitHub, VS Code, Postman, Netlify, Vercel</p></div>
            <div><b>Web Development:</b> <p><b>MERN Stack</b>, RESTful APIs, Responsive Design</p></div>
            <div><b>Data Science Tools:</b> <p>Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn</p></div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Achievements & Hackathons</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Participated in multiple online coding challenges and hackathons</li>
  <li>Jhansi Hackathon – Selected as a finalist and presented an AI-based project</li>
  <li>Certified in Data Analysis with Python – IBM</li>
  <li>Completed Postman API Expert Certification</li>
  <li>Achieved Python for Data Science certificate – IBM </li>
          </ul>

          {/* Scrollable certificates */}
          <div className="flex overflow-x-auto gap-6 pb-2">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="min-w-[240px] bg-gray-100 rounded-md shadow-md p-3 text-center"
              >
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="rounded-md shadow w-full mb-3 cursor-pointer hover:scale-105 transition"
                  onClick={() => setModalImg(cert)}
                />
                <h4 className="text-sm font-medium mb-2">{cert.title}</h4>
                <div className="text-sm text-blue-600 hover:underline">
                  <a
                    href={cert.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImg(null)}
        >
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={modalImg.src}
              alt={modalImg.title}
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}


export default About;