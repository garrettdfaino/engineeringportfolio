import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Cog, 
  FileText, 
  User, 
  Mail, 
  Phone,
  Linkedin,
  Folder,
  Award,
  X,
  ArrowRight
} from 'lucide-react';
import Patents from './pages/Patents';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Background from './pages/Background';

function ContactDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={20} />
            <a 
              href="mailto:garrettdfaino@gmail.com" 
              className="text-blue-600 hover:text-blue-800"
            >
              garrettdfaino@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" size={20} />
            <a 
              href="tel:6034899804" 
              className="text-blue-600 hover:text-blue-800"
            >
              (603) 489-9804
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  
  const expertiseAreas = [
    "Innovation",
    "SolidWorks",
    "Automation",
    "Mechanical Design",
    "Customer Facing Communication",
    "System Design & Analysis",
    "Design for Manufacturability",
    "Mechatronics",
    "Product Design",
    "3D Printing",
    "Problem Solving",
    "Rapid Prototyping",
    "Design of Experiments",
    "Filling/Packaging"
  ];

  const duplicatedExpertise = [...expertiseAreas, ...expertiseAreas];

  return (
    <div className="min-h-screen bg-gray-50">
      <ContactDialog 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Diagonal Slash */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/10 transform -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent transform translate-x-1/3 -skew-y-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent transform -translate-x-1/3 -skew-y-12"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <h1 className="text-5xl font-bold mb-4">Garrett Faino</h1>
          <h2 className="text-2xl mb-6">Mechanical Engineer</h2>
          <p className="text-xl max-w-4xl leading-relaxed mb-8">
            Versatile engineer with expertise in automation, innovation, and mechanical design. Known for my relentless problem-solving ability, I excel at designing, prototyping, and troubleshooting complex systems, earning multiple patents for innovative solutions. Throughout my career—and my life—I've worked directly with customers, understanding their needs, resolving challenges, and delivering tailored solutions. I've also developed strong skills in website and UI design, leveraging AI tools to create intuitive and engaging digital experiences. By combining technical expertise, creativity, and a customer-centric approach, I deliver impactful solutions across both engineering and design disciplines, whether leading projects or collaborating with dynamic teams.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="flex items-center gap-2 bg-white text-blue-900 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Mail size={20} />
              Contact Me
            </button>
            <a 
              href="https://www.linkedin.com/in/garrett-faino-7a2927129" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Visit Garrett Faino's LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Patents Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold">Patents</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Browse through my registered patents and pending applications in mechanical systems and renewable energy.
            </p>
            <Link to="/patents" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              View Patents <FileText size={18} />
            </Link>
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold">Projects</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Explore my portfolio of innovative engineering projects and successful implementations.
            </p>
            <Link 
              to="/projects" 
              state={{ from: location.pathname }}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
              View Projects <Folder size={18} />
            </Link>
          </div>

          {/* Background Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <User className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold">Background</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Learn about my professional journey, education, and expertise in mechanical engineering.
            </p>
            <Link to="/background" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
              View Background <FileText size={18} />
            </Link>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Project</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-[400px]">
              <img 
                src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-5.jpg?raw=true"
                alt="SLA Line Efficiency Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SLA Line Efficiency</h3>
              <p className="text-gray-600 mb-6">
                Led the implementation of a critical Service Level Agreement for one of our largest customers, driving significant improvements in machine performance and operational efficiency. Through data-driven optimization and hands-on problem-solving, we achieved a 28% increase in Overall Equipment Effectiveness while establishing lasting customer trust and collaboration.
              </p>
              <Link 
                to="/projects/sla"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View Project Details
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Expertise Areas</h2>
          <div className="relative overflow-hidden bg-white rounded-xl shadow-lg p-8">
            <div 
              className="flex gap-8 animate-scroll"
              style={{
                width: 'max-content'
              }}
            >
              {duplicatedExpertise.map((expertise, index) => (
                <div
                  key={`${expertise}-${index}`}
                  className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-white px-6 py-4 rounded-lg border border-blue-100 hover:border-blue-300 transition-colors"
                >
                  <p className="text-lg font-medium text-blue-900 whitespace-nowrap">{expertise}</p>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Garrett Faino. All rights reserved.</p>
            <p className="mt-2">Professional Mechanical Engineer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patents" element={<Patents />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/background" element={<Background />} />
    </Routes>
  );
}

export default App;
