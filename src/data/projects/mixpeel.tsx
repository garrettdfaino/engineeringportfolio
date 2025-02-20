import React from 'react';
import { ContentVideo } from '../../components/ContentVideo';

export const mixpeel = {
  title: 'MixPeel Filling Machine',
  image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/mixpeel-7.png?raw=true',
  impact: "This project strengthened my understanding of automation and reinforced my desire to move further into the field. It felt rewarding to be responsible for improving the filling process, enhancing efficiency, and ensuring consistency. The project tackled persistent manufacturing defects such as piston instability, cross-contamination, and air entrapment, which plagued the industry and limited the adoption of MixPeel cartridges. Through extensive testing, innovation, and continuous refinement, I developed a reliable filling system that eliminated these issues and provided customers with a consistent, defect-free solution. This experience reinforced my belief that trial and failure are fundamental steps toward innovation and helped shape my approach to problem-solving in engineering.",
  overview: [
    "The need for this project arose due to ongoing issues in the field with the MixPeel cartridge filling process. Manufacturers and end-users faced significant challenges in achieving consistent, reliable fills, which hindered the adoption and scalability of MixPeel technology. The biggest pain points included frequent product defects, inefficiencies in material usage, and unpredictable filling performance across different cartridge ratios. The existing filling methods often led to high rates of defective products, increasing waste and reducing production efficiency.",
    "MixPeel cartridges are a versatile coaxial dispensing solution used across various industrial applications, designed to keep two-part materials separate until the point of application. These cartridges come in multiple ratio configurations, meaning that different designs and filling methods were required to accommodate the various internal volumes and dimensions.",
    "The core challenge was ensuring a consistent and reliable fill across all MixPeel ratio variations. Traditional filling methods suffered from:",
  
    <ul className="list-disc list-inside space-y-2 mt-4 mb-6" key="challenges">
      <li>Material passing by the pistons, leading to leaks and contaminated product.</li>
      <li>Cross-contamination, where both A & B materials cured at the outlet creating a faulty catridge.</li>
      <li>Air pockets, which caused inconsistencies in product volume and mixing.</li>
      <li>Leakage issues, resulting in material waste and production inefficiencies.</li>
      <li>High-pressure instability, where uncontrolled force application led to piston flipping or deformation.</li>
    </ul>,
    "Initially, these cartridges were filled using a direct nozzle method, which lacked the precision needed for consistent results. The absence of controlled pressure regulation and piston stabilization led to frequent failures, preventing customers from fully utilizing the advantages of the MixPeel system.",
    "I was assigned to this project following the success of my work on the EcoPacc filling machine, with the goal of developing an entirely new system tailored to MixPeel's unique requirements. Instead of modifying existing flawed designs, I opted for a fresh approach, integrating advanced pneumatic control, sensor feedback, and PLC automation to create a reliable, scalable solution adaptable to multiple cartridge ratios.",
    <h3 className="text-xl font-semibold mt-8 mb-4 underline" key="safety-title">Iteration Breakdown & Continuous Improvements</h3>,
    <div className="flex gap-8" key="safety-description">
      <div className="flex-1">
        <p className="mb-4">
          The development process involved several design iterations, each improving upon the last:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-gray-600">Initial Concept</strong> – Applied the same resistive pressure method used in Ecopacc but found that MixPeel's pistons required an entirely different stabilization approach.</li>
          <li><strong className="text-gray-600">Pneumatic Actuation Integration</strong> – Designed a system with three pneumatic cylinders (two outer and one inner) that stabilized the pistons before filling.</li>
          <li><strong className="text-gray-600">Sensor-Driven Feedback</strong> – Implemented magnetic sensors on actuators to detect piston positioning, ensuring precise fill timing.</li>
          <li><strong className="text-gray-600">Pressure Regulation Refinement</strong> – Introduced a dual-phase pressure system: high pressure to move pistons into place, followed by controlled residual pressure to maintain stability during filling.</li>
          <li><strong className="text-gray-600">Manifold Experimentation</strong> – Attempted a method using air pressure in a sealed manifold to lift pistons, but cartridge expansion led to design revisions.</li>
          <li><strong className="text-gray-600">Final System Deployment</strong> – Delivered multiple working machines to customers, allowing them to scale their production while eliminating previous quality concerns.</li>
        </ul>
      </div>
      <div className="flex-shrink-0 w-1/2">
        <div>
          <ContentVideo 
            src="https://github.com/garrettdfaino/portfolio/raw/refs/heads/main/public/images/projects/mixpeel-2.mp4"
            width="large"
            position="right"
            marginLeft={8}
            controls={true}
            autoPlay={false}
            loop={true}
            muted={true}
            className="w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              Final iteration of the MixPeel filling system demonstrating precise piston control and automated filling sequence. This machine was deployed and ist still in use at the customers.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <ContentVideo 
            src="https://github.com/garrettdfaino/portfolio/raw/refs/heads/main/public/images/projects/mixpeel-5.1.mp4"
            width="large"
            position="right"
            marginLeft={8}
            controls={true}
            autoPlay={false}
            loop={true}
            muted={true}
            className="w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              Onsite demo at one of our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  ],
  contributionsSummary: 'I developed and implemented a completely new filling method that stabilized the pistons, improved accuracy, and eliminated defects by addressing specific issues such as material bypassing, air pockets, and cross-contamination.',
  contributions: [
    <ul className="list-disc list-inside space-y-2 mt-4" key="contributions">
      <li>Designed and 3D-printed custom pistons and brackets to ensure a precise fit and effective sealing, making the new filling system possible.</li>
      <li>Designed a completely new filling system instead of modifying flawed existing equipment, ensuring a robust and tailored solution.</li>
      <li>Engineered a pneumatic cylinder system that sequentially controlled piston movement to maintain pressure balance and eliminate flipped pistons.</li>
      <li>Integrated real-time feedback mechanisms using magnetic sensors and PLC automation, enabling precise piston positioning and pressure control during filling.</li>
      <li>Conducted extensive testing, refining pressure regulation strategies to prevent leaks and air pockets while ensuring consistent material distribution.</li>
      <li>Developed a scalable, repeatable process that manufacturers could adopt across multiple MixPeel cartridge ratios, increasing efficiency and reliability in production environments.</li>
    </ul>
  ],
  resultsSummary: "The newly developed filling system significantly improved the MixPeel cartridge filling process by eliminating major defects, enhancing production consistency, and leading to widespread adoption. During customer trials, I personally operated the machine to produce multiple cartridges, demonstrating the system's reliability and consistency. Despite the poor video quality, you can see the automated process in action, showcasing how we achieved precise fills with zero defects.",
  results: [
    <div key="results" className="flex gap-8">
      <div className="flex-1">
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li><strong className="text-gray-600">Defect Reduction & Process Optimization</strong> - Completely removed common issues such as material passing by pistons, air pockets, and cross-contamination while optimizing material utilization and minimizing waste.</li>
          <li><strong className="text-gray-600">Customer Implementation & Satisfaction</strong> - Successfully deployed the system at five major customer sites, resolving long-standing quality concerns and inefficiencies.</li>
          <li><strong className="text-gray-600">Scalability & Market Expansion</strong> - Worked with a machine builder to commercialize the system, allowing widespread industry adoption and enabling manufacturers to transition from inconsistent manual filling to a repeatable automated process.</li>
        </ul>
      </div>
      <div className="flex-shrink-0 w-1/3">
        <div>
          <ContentVideo 
            src="https://github.com/garrettdfaino/portfolio/raw/refs/heads/main/public/images/projects/mixpeel-4.mov"
            width="large"
            position="right"
            marginLeft={8}
            controls={true}
            autoPlay={false}
            loop={true}
            muted={true}
            className="w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              Video showing me producing multiple cartridges during customer trials, demonstrating the system's reliability and consistency in real-world conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  ],
  technologies: ['PLC Programming', '3D Printing', 'Automation','Electromechanics', 'Project Managment','R&D','MechanicalSystem Design','Process Control Systems','Customer Service',"Product Demos", 'User Interface Design']
};