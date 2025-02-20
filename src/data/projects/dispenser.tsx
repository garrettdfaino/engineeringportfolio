import React from 'react';
import { ContentImage } from '../../components/ContentImage';
import { ContentVideo } from '../../components/ContentVideo';

export const dispenser = {
  title: '3D Printed Dispenser',
  image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-1.png?raw=true',
  impact: "This project was a defining moment in my career, showcasing my ability to completely reimagine existing designs. Earning a patent for this innovation not only validated my approach to problem-solving but also taught me valuable lessons about the intersection of innovative design and practical manufacturing. It demonstrated how thinking outside conventional boundaries can lead to breakthrough solutions.",
  overview: [
    <div key="overview" className="flex gap-8">
      <div className="flex-1">
        <p className="mb-6">
          This revolutionary project focused on completely reimagining a dispenser design that had remained largely unchanged for years. The original design consisted of over 30 parts, requiring numerous screws, pins, and springs, with an assembly time of 10-15 minutes per unit. Through innovative design thinking and leveraging modern manufacturing techniques, we transformed this complex assembly into an elegant solution.
        </p>
        <ContentImage 
          src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/patents/dispenser-2.png?raw=true"
          alt="Dispenser design"
          width="medium"
          position="right"
          marginBottom={6}
          marginLeft={8}
          className="float-right w-2/5"
        />
        <p className="mb-6">
          A major driving force behind this redesign was our commitment to pushing the adoption of additive manufacturing. By utilizing 3D printing, we were able to rapidly prototype and iterate, allowing for continuous improvement throughout the development process. The project went through multiple design versions, each refining the structural integrity, ease of assembly, and overall functionality.
        </p>
        <p className="mb-6">
          The redesigned dispenser reduced the component count from 30+ parts to just 11 essential pieces, while introducing a tool-free assembly process that takes less than 30 seconds. The housing design featured concentric aligning rings on each casing half, which, when paired with strategically placed clips along the outer edges, eliminated the need for screws while ensuring a secure fit. The push rod seamlessly slid through these aligned rings, holding everything together with precision.
        </p>
        <p className="mb-6">
          Beyond optimizing the design for efficient assembly, structural integrity was a key consideration. Since the dispenser exerts significant pressure on the cartridge, the shell had to be engineered to withstand these forces without failure. To achieve this, I utilized SolidWorks Finite Element Analysis (FEA) to simulate stress distribution and identify areas requiring reinforcement. This iterative approach allowed for a balance between material efficiency and durability, ultimately leading to a robust yet lightweight final product.
        </p>
        <p>
          As a result of this innovation, I was awarded a patent for the dispenser design. This recognition highlights not only the technical advancements achieved in this project but also its potential impact on future dispenser manufacturing. By merging additive manufacturing with advanced simulation tools, this project not only streamlined production but also set a new standard for dispenser design.    
        </p>
      </div>
    </div>
  ],
  contributionsSummary: 'I led the complete redesign of this dispenser system, from initial concept through to final implementation. The project required deep understanding of both manufacturing processes and user needs to create a solution that was both efficient to produce and easy to use.',
  contributions: [
    <div key="contributions" className="flex gap-8">
      <ul className="list-disc list-inside space-y-3 text-gray-600 flex-1">
        <li>Conceptualized and designed the innovative housing system</li>
        <li>Developed the tool-free assembly mechanism</li>
        <li>Created and validated multiple prototypes</li>
        <li>Optimized design for manufacturing efficiency</li>
      </ul>
      <ContentVideo 
        src="https://github.com/garrettdfaino/portfolio/raw/refs/heads/main/public/images/projects/dispenser.MOV"
        width="large"
        position="right"
        marginLeft={8}
        controls={true}
        autoPlay={false}
        loop={true}
        muted={true}
        className="flex-shrink-0"
      />
    </div>
  ],
  resultsSummary: 'The redesigned dispenser achieved remarkable improvements in both manufacturing efficiency and user experience, leading to significant cost savings and improved customer satisfaction.',
  results: [
    'Reduced parts count from 30+ to 11 components',
    'Decreased assembly time from 10-15 minutes to 30 seconds',
    'Eliminated need for tools in assembly',
    'Secured patent for innovative design',
    'Improved user experience with simpler maintenance'
  ],
  technologies: ['3D CAD Design', 'Rapid Prototyping', 'Design for Manufacturing', 'Assembly Optimization']
};