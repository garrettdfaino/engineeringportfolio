import React from 'react';
import { ContentVideo } from '../../components/ContentVideo';
import { ContentImage } from '../../components/ContentImage';

const ecopacc = {
  title: 'EcoPacc Filling Machine',
  image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/ecopacc-12.png?raw=true',
  impact: "Developing the EcopaCC Filling Machine was a turning point in my career, reinforcing my passion for automation, electromechanics, and PLC programming. This project challenged me to think beyond conventional filling methods and develop a custom solution for a first-of-its-kind collapsible cartridge. Through trial, failure, and iteration, I designed a machine that allowed customers to properly fill and evaluate EcopaCC cartridges, enabling real-world testing and removing a major adoption barrier. This project proved that failure is essential for innovation, as each unsuccessful attempt led to a more refined and effective solution.",
  overview: [
    "The EcopaCC is a collapsible, eco-friendly 2K adhesive cartridge designed to reduce material waste and improve sustainability compared to traditional rigid cartridges. Instead of retaining a fixed shape, the EcopaCC compresses as material is dispensed, ensuring that nearly all product is utilized while significantly reducing disposal volume. However, its innovative collapsible design presented serious challenges that prevented immediate industry adoption:",
    <ul className="list-disc list-inside space-y-2 mt-4 mb-6" key="challenges">
      <li>Air entrapment during filling, leading to inconsistent volume control and poor material performance.</li>
      <li>Cross-contamination risks due to a shared outlet with a divider between the A and B components.</li>
      <li>Bag elasticity and shape memory causing unexpected expansion and leakage after filling.</li>
      <li>100% collapsing required to remove all air before proper filling.</li>
      <li>No existing filling solution—traditional rigid cartridge fillers were incompatible with the collapsible design.</li>
      <li>Safety considerations to ensure proper machine operation, preventing accidental starts or unsafe conditions.</li>
    </ul>,
    "I was tasked with designing a tabletop filling machine that would allow for experimentation, customer testing, and real-world use. This required a ground-up approach, combining PLC programming, pneumatics, solenoid valve control, pressure regulation, and mechanical design while implementing safety features for controlled operation.",
    <h3 className="text-xl font-semibold mt-8 mb-4 underline" key="engineering-title">The Engineering Challenge: Creating a Reliable Filling Solution</h3>,
    <p className="mb-6" key="engineering-description">
      The lack of a dedicated filling machine meant that customers couldn't properly test the EcopaCC, blocking industry adoption. My role was to design, build, and optimize a tabletop filling machine that enabled customers to accurately fill and evaluate EcopaCC cartridges before committing to large-scale implementation.

This required developing an entirely new method for filling collapsible cartridges, combining automation, pneumatics, fluid dynamics, and safety engineering. Unlike rigid cartridges, EcopaCC's flexible structure needed controlled handling, ensuring that:
    </p>,
    <ul className="list-disc list-inside space-y-2 mb-6" key="engineering-points">
      <li><strong className="text-gray-600">Filled uniformly while eliminating air pockets</strong> – Ensuring complete air removal before filling was critical to maintaining a full, accurate fill without voids or inconsistencies.</li>
      <li><strong className="text-gray-600">Maintained consistent pressure and prevented backflow</strong> – The flexible bag structure made it challenging to regulate pressure during filling without causing expansion, leaks, or material waste.</li>
      <li><strong className="text-gray-600">Adapted to various viscosity materials</strong> – Different adhesives have varying flow properties; I had to create an adjustable system that could regulate fill speed and pressure based on viscosity.</li>
      <li><strong className="text-gray-600">Integrated safety for customer demos</strong> – Since customers would be testing the machine themselves, every potential accident had to be considered and avoided, requiring automated start/stop controls, safety sensors, and emergency stop mechanisms.</li>
    </ul>,
    <h3 className="text-xl font-semibold mt-8 mb-4 underline" key="iterations-title">The Evolution of the Machine: Iteration & Continuous Improvement</h3>,
    <div className="flex gap-8" key="evolution-section">
      <div className="flex-1">
        <p className="mb-6">To overcome these challenges, I designed the EcopaCC Filling Machine through multiple iterations, improving performance at each stage:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-gray-600">First Iteration</strong> – Integrated PLC automation but was bulky and inefficient. The system worked but lacked speed and precision, leading to inconsistent fills.</li>
          <li><strong className="text-gray-600">Second Iteration</strong> – Added solenoid valves and pressure regulators, allowing more controlled material flow and repeatable fill cycles.</li>
          <li><strong className="text-gray-600">Third Iteration</strong> – Introduced a vacuum-assisted air removal system, ensuring 100% collapse before filling to eliminate trapped air and ensure precise volume.</li>
          <li><strong className="text-gray-600">Ongoing Refinements</strong> – Each subsequent build enhanced automation, material flow, and process efficiency, incorporating real-world testing feedback.</li>
          <li><strong className="text-gray-600">Final Solution</strong> – A fully optimized, easy-to-use machine that allowed customers to test EcopaCC with confidence, enabling proper evaluation and industry validation.</li>
        </ul>
      </div>
      <div className="flex-shrink-0 space-y-4 w-1/2">
        <div>
          <ContentVideo 
            src="https://github.com/garrettdfaino/portfolio/raw/refs/heads/main/public/images/projects/ecopacc-9.mp4"
            width="large"
            position="right"
            marginLeft={8}
            controls={true}
            autoPlay={false}
            loop={true}
            muted={true}
            className="flex-shrink-0 w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              Early iteration showing automated material flow control and pressure regulation for consistent filling.
            </p>
          </div>
        </div>
        <div>
          <ContentVideo 
            src="https://github.com/garrettdfaino/portfolio/raw/refs/heads/main/public/images/projects/ecopacc-7.mp4"
            width="large"
            position="right"
            marginLeft={8}
            controls={true}
            autoPlay={false}
            loop={true}
            muted={true}
            className="flex-shrink-0 w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              Vacuum-assisted air removal system ensuring complete cartridge collapse before filling.
            </p>
          </div>
        </div>
      </div>
    </div>,
    <h3 className="text-xl font-semibold mt-8 mb-4 underline" key="safety-title">Ensuring Safety & Operator Usability</h3>,
    <div className="mb-6" key="safety-description">
      <p className="mb-4">
        To ensure the machine was safe for operators and customer demonstrations, I implemented the following safety features:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong className="text-gray-600">Two-Hand Start Mechanism</strong> – Required both hands to engage the machine, ensuring the operator's hands were not in pinch zones during activation.</li>
        <li><strong className="text-gray-600">Automated Shutdown via Timers & Loops</strong> – The program included timeouts and loop-based monitoring, automatically shutting down the machine if specific processes took too long, preventing malfunctions or unsafe conditions.</li>
        <li><strong className="text-gray-600">Emergency Stop (E-Stop) System</strong> – A dedicated E-stop button immediately cut both air and power to the machine, providing a fail-safe shutdown in case of emergencies.</li>
        <li><strong className="text-gray-600">Multiple Sensors for Cartridge Detection & Process Verification</strong> – Sensors ensured the EcopaCC was properly installed before filling could begin and verified that each step in the process was completed before advancing, preventing misfires, incomplete fills, or unsafe operations.</li>
      </ul>
    </div>
  ],
  contributionsSummary: 'I independently designed, built, and optimized the EcopaCC filling machine, creating a system that solved the key challenges of filling collapsible cartridges. My approach combined automation, mechanical engineering, and iterative problem-solving, ensuring the machine worked reliably for customers and manufacturers.',
  contributions: [
    <div key="contributions-content">
      <div>
        <ContentImage 
          src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/ecopacc-2.jpg?raw=true"
          alt="EcopaCC Filling Machine"
          width="large"
          position="right"
          marginLeft={8}
          className="float-right w-2/5 mb-6"
        />
        <ul className="list-disc list-inside space-y-3">
          <li><strong className="text-gray-600">Self-Taught PLC Programming & Automation</strong> – Developed ladder logic to control the filling process.</li>
          <li><strong className="text-gray-600">Mechanical Retrofitting & Solenoid Valve Control</strong> – Integrated pressure regulators and solenoid valves for precision.</li>
          <li><strong className="text-gray-600">100% Air Removal for Proper Filling</strong> – Designed a vacuum system to fully collapse the bag before filling, ensuring zero trapped air and precise material volume.</li>
          <li><strong className="text-gray-600">Iterative Design & Rapid Prototyping</strong> – Built multiple versions, improving performance with each iteration.</li>
          <li><strong className="text-gray-600">3D Printing for Custom Components</strong> – Created nozzles, sleeves, and brackets to enhance the system.</li>
        </ul>
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-600">Safety Features & Controls</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Implemented start/stop controls for safe operation.</li>
              <li>Integrated safety sensors that enabled filling only when the machine was in the correct position.</li>
              <li>Designed emergency stop mechanisms to prevent unintended operation.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-600">Research & Development for Fill Volume Accuracy</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Tested multiple bag lengths to counteract elasticity issues.</li>
              <li>Refined the residual pressure control system to prevent leaks.</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-600">Customer Implementation & Training</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Built and deployed machines for major clients to test their adhesives in EcopaCC.</li>
              <li>Provided training materials and on-site support for operators.</li>
              <li>Worked with filling companies to scale the solution to higher production levels.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ],
  resultsSummary: 'The EcopaCC filling machine became the key enabler for customer testing and validation, allowing them to accurately fill and evaluate EcopaCC cartridges before transitioning to the new packaging format. This eliminated previous adoption barriers, led to increased interest from customers, and paved the way for filling companies to develop larger-scale solutions.',
  results: [
    <div key="results" className="flex gap-8">
      <div className="flex-1">
        <ul className="list-disc list-inside space-y-3">
          <li><strong className="text-gray-600">Enabled EcopaCC Testing & Validation</strong> – Allowed customers to fill, evaluate, and approve the new packaging format.</li>
          <li><strong className="text-gray-600">Increased Customer Interest</strong> – The machine enabled widespread testing, driving confidence in the EcopaCC system.</li>
          <li><strong className="text-gray-600">Enhanced Machine Safety & Usability</strong> – Integrated start/stop controls, safety sensors, and emergency stop features to ensure safe and reliable operation.</li>
          <li>
            <strong className="text-gray-600">Industry Collaboration & Expansion</strong>
            <ul className="list-disc list-inside space-y-1 ml-6">
              <li>Partnered with filling companies to refine large-scale production methods.</li>
              <li>Provided technical guidance on automation and process improvements.</li>
            </ul>
          </li>
          <li><strong className="text-gray-600">Personal & Professional Growth</strong> – This project cemented my passion for automation and industrial problem-solving, leading me to further explore PLC programming and mechatronics.</li>
        </ul>
      </div>
      <div className="flex-shrink-0 w-2/5">
        <div>
          <ContentImage 
            src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/ecopacc-8.jpg?raw=true"
            alt="EcopaCC Filling Machine in Action"
            width="large"
            position="right"
            marginLeft={8}
            className="w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              The final iteration of the EcopaCC Filling Machine, showing the complete system with safety features and automated controls integrated.
            </p>
          </div>
        </div>
      </div>
    </div>
  ],
  technologies: ['PLC Programming', 'Elecromechanics', 'Electrical Engineering','SolidWorks','Project Management', '3D Printing', 'Mechanical Design','R&D', 'Safety Systems']
};

export { ecopacc };