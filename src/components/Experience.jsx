import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Tutor – Student Learning Dashboard",
      role: "Frontend Developer",
      duration: "Jan 2025 – Mar 2025",
      tech: "React.js, JavaScript, HTML, CSS, REST APIs",
      points: [
        "Developed a fully responsive AI-powered student dashboard for enhanced digital learning experiences.",
        "Implemented progress tracking, voice interaction, and AI-generated quizzes.",
        "Built modular and reusable React components for efficient UI development.",
        "Integrated RESTful APIs for real-time data interaction and content delivery.",
        "Implemented secure user authentication to provide personalized access.",
      ],
    },
    {
      title: "Movie Recommendation System – YBI Foundation",
      role: "Machine Learning Intern",
      duration: "Feb 2025 – Mar 2025",
      tech: "Python, Pandas, Scikit-learn, Machine Learning",
      points: [
        "Developed a content-based movie recommendation system using machine learning techniques.",
        "Used cosine similarity to generate personalized recommendations.",
        "Handled data cleaning, preprocessing, and feature extraction using Pandas.",
        "Built and evaluated the recommendation model using Scikit-learn.",
        "Completed under the mentorship of the YBI Foundation as part of their industry training program.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600">
                {exp.title}
              </h3>
              <p className="text-gray-700">{exp.role} | {exp.duration}</p>
              <p className="text-sm text-gray-500 italic mb-3">{exp.tech}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
