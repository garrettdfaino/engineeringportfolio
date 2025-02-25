import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, User, Trophy, Wrench, FileText } from 'lucide-react';
import { PDFModal } from '../components/PDFModal';

const Background = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const experience = [
    {
      company: "IMA Dairy & Food",
      title: "Optimization Engineer",
      period: "Jan 2024 – Oct 2024",
      responsibilities: [
        "Established new retrofit division in the U.S., identifying opportunities and engaging with customers",
        "Led projects from inception to completion, coordinating with internal teams, sales, and vendors",
        "Improved and innovated existing systems and processes by retrofitting equipment with new technologies and techniques, significantly enhancing efficiency and reducing downtime."
      ]
    },
    {
      company: "IMA Dairy & Food",
      title: "Mechanical Engineer",
      period: "Aug 2021 – Jan 2024",
      responsibilities: [
        "Performed installation, commissioning, and troubleshooting of equipment at customer locations",
        "Achieved 28% increase in efficiency and 22% increase in OLE through process improvements",
        "Developed custom modifications to integrate new technologies and processes into existing machines, enhancing their performance and efficiency"
      ]
    },
    {
      company: "Sulzer MedMix",
      title: "Application/Mechanical Engineer",
      period: "2019 – Aug 2021",
      responsibilities: [
        "Awarded two patents for product innovation, with a third pending approval",
        "Designed and constructed custom automated filling machines",
        "Collaborated with customers to troubleshoot system issues, design new products, and innovate existing ones, managing all design, prototyping, R&D, and testing before production."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Mechanical Engineering",
      school: "University of New Hampshire",
      year: "2018",
      achievements: [
        "4-year Division I MCLA Men's Lacrosse Player",
        "2x Coaches Award Winner (2017, 2018) for leadership, sportsmanship, and team spirit"
      ]
    },
    {
      degree: "High School Diploma",
      school: "Pinkerton Academy",
      year: "2014",
      achievements: [
        "Honors Student all 4 years",
        "Coaches Award Winner - Lacrosse"
      ]
    }
  ];

  const skills = [
    "Automation",
    "Innovation",
    "Mechanical Design",
    "Problem Solving",
    "SolidWorks",
    "Mechatronics",
    "DOE",
    "Project Management",
    "3D Printing",
    "Process Optimization",
    "System Design & Analysis",
    "Rapid Prototyping",
    "Customer Relations",
    "Filling/Packaging"
  ];

  return (
    <div className="min-h-screen tech-background relative overflow-hidden">
      <PDFModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl="https://github.com/garrettdfaino/portfolio/blob/main/public/images/profile/resumev2.png?raw=true"
      />
      
      {/* Animated dots */}
      <div className="tech-dot"></div>
      <div className="tech-dot"></div>
      <div className="tech-dot"></div>
      <div className="tech-dot"></div>
      <div className="tech-dot"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Link>
        </div>

        <div className="grid gap-8">
          {/* Profile Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/profile/profilepic.jpg?raw=true"
                  alt="Garrett Faino"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-blue-600" size={28} />
                  <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm an engineer who loves solving problems, building systems, and finding new ways to innovate. Whether it's automation, mechanical design, or leveraging new tech like 3D printing and AI, I'm always looking for ways to push ideas further. My work has earned multiple patents and helped companies grow by improving efficiency and reducing costs. Outside of engineering, I'm always learning, staying active, and spending time outdoors.
                </p>
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="text-blue-600" size={20} />
                    <h3 className="text-lg font-semibold text-gray-900">Core Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Briefcase className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
              </div>
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText size={20} />
                View Resume
              </button>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <div className="text-blue-600 font-medium mb-2">{job.company}</div>
                  <div className="text-gray-500 text-sm mb-3">{job.period}</div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </h3>
                  <div className="text-blue-600 font-medium mb-1">
                    {edu.school}
                  </div>
                  <div className="text-gray-500 text-sm mb-2">{edu.year}</div>
                  {edu.achievements && (
                    <div className="mt-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="text-blue-600" size={16} />
                        <span className="text-sm font-medium text-gray-700">Achievements</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
