import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { WelcomeModal } from '../components/WelcomeModal';

const projects = [
  {
    id: 'f600',
    title: 'F600 Success',
    summary: 'Revitalized the discontinued F600 sachet machine by enhancing its automation and reliability through hands-on troubleshooting, iterative design improvements and process optimization.',
    image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/f600-2.jpg?raw=true'
  },
  {
    id: 'ecopacc',
    title: 'EcoPacc Filling Machine',
    summary: 'Automated filling system for eco-friendly packaging solutions',
    image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/ecopacc-3.jpg?raw=true'
  },
  {
    id: 'mixpeel',
    title: 'MixPeel Filling Machine',
    summary: 'Advanced mixing and filling system for multi-component materials',
    image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/mixpeel-1.png?raw=true'
  },
  {
    id: 'sla',
    title: 'SLA Line Efficiency',
    summary: 'Service Level Agreement implementation for production line optimization',
    image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-4.jpg?raw=true'
  },
  {
    id: 'keyence',
    title: 'Keyence Vision System',
    summary: 'Advanced quality inspection system using computer vision',
    image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/keyence-10.png?raw=true'
  },
  {
    id: 'dispenser',
    title: '3D Printed Dispenser',
    summary: 'Revolutionary redesign reducing 30+ parts to 8 components with tool-free assembly',
    image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-1.png?raw=true'
  },
  {
    id: 'n95',
    title: 'COVID N95 Mask Kit',
    summary: 'Emergency response project for N95 mask production',
    image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/mask-1.png?raw=true'
  }
];

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show modal if coming from the home page
    const fromHome = location.state?.from === '/';
    setShowModal(fromHome);
  }, [location]);

  return (
    <div className="min-h-screen tech-background relative overflow-hidden">
      <WelcomeModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
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
        
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600">
                  {project.summary}
                </p>
                <div className="mt-4 flex items-center text-blue-600">
                  <span className="text-sm font-medium">View Details</span>
                  <ExternalLink size={16} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
