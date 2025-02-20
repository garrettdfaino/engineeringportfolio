import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const patents = [
  {
    title: "TEST",
    number: "US10627001B2",
    description: "I identified an opportunity to redesign a check valve as part of a project to innovate products using 3D printing. The original design consisted of 11 separate pieces, requiring 11 assembly steps for manufacturing. Leveraging additive manufacturing and the HP Jet Fusion 3D printer, I consolidated all components into a single, 3D-printed piece. The redesigned valve self-activates when the mixer is placed on the cartridge, achieved by springs pressing past a shoulder to create pressure on the ball, preventing backflow. This innovation eliminated assembly steps, significantly reducing manufacturing time and costs while improving efficiency.",
    images: [
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/check-valve-1.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/check-valve-2.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/check-valve-3.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/check-valve-4.png?raw=true"
    ],
    url: "https://patents.google.com/patent/US10627001B2"
  },
  {
    title: "Dispenser",
    number: "US20230278067A1",
    description: "For this project, I focused on reducing manufacturing complexity and cost. A dispenser I worked on originally consisted of over 30 parts, requiring numerous screws, pins, and springs, and took about 10-15 minutes to assemble. I redesigned the housing, reducing the parts to just 11, and made the assembly process incredibly efficient. The two casing bodies featured concentric aligning rings—one on each casing—through which the push rod was inserted to hold the casings together. Clips along the outer edges were used to secure the casings in place. This tool-free assembly process now takes under 30 seconds, significantly simplifying the design and reducing production time and costs.",
    images: [
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-1.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-2.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-3.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-4.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-5.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-6.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-7.png?raw=true"
    ],
    url: "https://patents.google.com/patent/US20230278067A1/en"
  },
  {
    title: "Clip on Plunger",
    number: "EP3784167B1",
    description: "This invention greatly simplifies the process of changing plungers, which was previously a task requiring metal plungers, nuts, and bolts. Instead of threading and securing a metal plunger, the new design allows for quick, tool-free changeovers with an hourglass-shaped rod. The plunger clips onto the rod and stays securely in place when retracted, thanks to a housing that prevents the clip's arms from opening. This innovation provides an efficient, adaptable solution for different cartridge sizes, making maintenance far easier and faster.",
    images: [
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/plunger-1.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/plunger-2.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/plunger-3.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/plunger-4.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/plunger-5.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/plunger-6.png?raw=true",
      "https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/plunger-7.png?raw=true"
    ],
    url: "https://patents.google.com/patent/EP3784167B1/en?inventor=Garrett+FAINO"
  }
];

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-full">
      <img 
        src={images[currentIndex]} 
        alt={`Patent diagram ${currentIndex + 1}`}
        className="h-full w-full object-contain bg-white"
      />
      
      {/* Navigation Buttons */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="text-gray-800" size={24} />
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="text-gray-800" size={24} />
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

function Patents() {
  return (
    <div className="min-h-screen tech-background relative overflow-hidden">
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
        
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Patents</h1>
        
        <div className="space-y-12">
          {patents.map((patent) => (
            <div 
              key={patent.number}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3 h-[400px]">
                  <ImageCarousel images={patent.images} />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    Patent No. {patent.number}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                    {patent.title}
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {patent.description}
                  </p>
                  <div className="mt-6">
                    <a 
                      href={patent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      View Patent Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Patents;
