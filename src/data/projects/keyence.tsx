import React from 'react';
import { ContentImage } from '../../components/ContentImage';

export const keyence = {
  title: 'Keyence Vision System',
  image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/keyence-1.png?raw=true',
  impact: "This project showcased my ability to build trust with customers, identify process inefficiencies, and develop impactful solutions. Through my experience working with the customer, I earned their confidence, which allowed me to take full control of the project—from recognizing the problem to developing and selling them on the solution. Beyond just implementation, this was a major win for both the customer and my company, as they plan to roll out the system across all 18 production lines. It reinforced the importance of understanding customer needs, leading projects end-to-end, and combining technical expertise with business strategy to drive results.",
  overview: [
    <div key="overview-content">
      <div className="float-right w-2/5 ml-8 mb-6">
        <ContentImage 
          src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/keyence-3.png?raw=true"
          alt="Keyence Vision System"
          width="large"
          position="right"
          className="w-full mb-1"
        />
        <div className="bg-blue-50 p-2 rounded-lg">
          <p className="text-xs text-gray-600">
            This image displays AI-powered vision system inspections identifying defective labels and misprints on packaging. 
          </p>
        </div>
      </div>
      <div>
        <p className="mb-6">
          The primary objective of this project was to ensure that only high-quality products reached customers while eliminating unnecessary waste and production inefficiencies caused by ineffective quality control methods. The facility previously relied on manual quality inspections, where boxes of cups were randomly checked, and if any defects were found, entire boxes were discarded—a highly wasteful and inefficient process. Additionally, without an automated system in place, defects could go undetected until later in production, creating potential downstream issues.
        </p>
        <p className="mb-6">
          Recognizing this problem, I conceived, developed, and led the design and implementation of an AI-powered vision inspection system to automate quality control. This system was designed to inspect all 36 cups in a cycle, identifying defects such as punctured packaging, missing cups, and print misalignment. If any defective cups were found, the entire 36-cup cycle was discarded off the back of the machine, ensuring that only flawless cups proceeded to packaging.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
          <li><strong>Real-Time Defect Detection & Rejection</strong> – The system inspected all 36 cups per cycle and automatically discarded faulty groups, ensuring no defective products made it into the final packaging.</li>
          <li><strong>Batch-Level Quality Assurance</strong> – If a box exceeded a set defect threshold, it was flagged for review to prevent non-compliant products from being shipped.</li>
          <li><strong>Defect Recording & Data Analysis</strong> – Each failed inspection was logged and recorded, allowing production teams to analyze defect trends after shifts and optimize machine performance.</li>
          <li><strong>Automated Production Interventions</strong> – If recurring defects were detected across multiple cycles, the system could signal a production stop, ensuring that operators could address underlying machine issues before more defective products were produced.</li>
        </ul>
      </div>
    </div>
  ],
  contributionsSummary: 'I took full ownership of this project from concept to execution, ensuring its success by leading all aspects of development, testing, and stakeholder coordination.',
  contributions: [
    <div key="contributions-content" className="flex gap-8">
      <div className="flex-1">
        <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
          <li><strong className="text-gray-600">Identified the Problem & Developed the Solution</strong> – Recognized the wasteful and inefficient manual inspection process and conceived the idea for an automated vision system to address it.</li>
          <li><strong className="text-gray-600">Technology Research & Selection</strong> – Conducted independent research to find a vision system capable of detecting relevant defects with AI-powered classification and precision.</li>
          <li><strong className="text-gray-600">Proposal & Customer Buy-In</strong> – Created a detailed report and proposal for the customer, explaining why this system was necessary and demonstrating its value in improving quality control and reducing waste.</li>
          <li><strong className="text-gray-600">Prototyping & Proof of Concept</strong> – Built a fully functional prototype, integrated it into the production environment, and conducted extensive testing to prove its feasibility.</li>
          <li><strong className="text-gray-600">Project Management & Stakeholder Coordination</strong> – Managed the entire development cycle, collaborating with automation engineers, electrical teams in Germany, and the customer's maintenance and quality teams to ensure the project was executed effectively.</li>
          <li><strong className="text-gray-600">System Integration & Programming</strong> –  I taught myself how to program and configure the Keyence VS-320 vision system using Keyence's Vision Editor software. I developed AI-based inspection logic to detect defects and ensured seamless integration with existing automation systems.</li>
          <li><strong className="text-gray-600">Testing & Data Collection</strong> – Conducted real-world system tests, fine-tuned defect detection accuracy, and verified that the system could effectively reduce waste and improve quality assurance.</li>
        </ul>
      </div>
      <div className="flex-shrink-0 w-2/5">
        <div>
          <ContentImage 
            src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/keyence-6.1.JPG?raw=true"
            alt="Keyence Vision System Implementation"
            width="large"
            position="right"
            marginLeft={8}
            className="w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              The installed vision system showing the camera setup and integration with the production line. This configuration enables comprehensive inspection of all cups while maintaining production speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  ],
  resultsSummary: 'This project demonstrated my ability to recognize inefficiencies, develop an innovative solution, and lead a technical implementation from concept to execution—ultimately improving efficiency, eliminating unnecessary waste, and ensuring consistent product quality. The development and testing of this AI-powered vision system demonstrated significant improvements in quality control, waste reduction, and production efficiency.',
  results: (
    <ul className="list-disc list-inside space-y-2 mt-4 text-gray-600">
      <li><strong className="text-gray-600">Ensured Only High-Quality Products Were Packaged</strong> – Automated inspections removed all faulty product groups, ensuring flawless cups made it to customers.</li>
      <li><strong className="text-gray-600">Eliminated Inefficiencies from Manual Inspections</strong> – Replaced random human checks with a fully automated, data-driven quality control process.</li>
      <li><strong className="text-gray-600">Reduced Unnecessary Waste</strong> – Allowed for targeted rejection of faulty groups, preventing full-box discards and improving material usage.</li>
      <li><strong className="text-gray-600">Enabled Post-Shift Defect Rates</strong> – The system logged and recorded all defects, providing insights into production trends and allowing for data-driven quality improvements.</li>
      <li><strong className="text-gray-600">Prevented Extended Downtime</strong> – By monitoring recurring defects, the system helped operators catch issues early, reducing costly production stoppages.</li>
      <li><strong className="text-gray-600">Provided a Scalable Quality Control Solution</strong> – The system design allowed for future expansion and adaptation to additional product lines if needed.</li>
    </ul>
  ),
  technologies: ['Problem Solving & Process Optimization', 'Testing & Validation', 'Keyence Vision Systems', 'Project Management', 'Quality Control', 'Data Analytics', 'Automation & System Integration', 'Allen Bradley']
};