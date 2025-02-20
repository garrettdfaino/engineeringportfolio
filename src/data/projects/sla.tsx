import React, { useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

function ImageModal({ isOpen, onClose, imageSrc }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <img 
        src={imageSrc}
        alt="Enlarged view"
        className="max-w-full max-h-[90vh] object-contain"
        onClick={e => e.stopPropagation()}
      />
    </div>
  );
}

export const sla = {
  title: 'SLA Line Efficiency',
  image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-4.jpg?raw=true',
  impact: "Leading the SLA implementation for one of our largest customers was a transformative experience in my career. This role required me to balance the interests of both my company and the customer while serving as the key liaison between teams in the U.S. and Germany. I was grateful for the opportunity to be trusted with restoring our reputation and rebuilding the relationship with the customer, ensuring they felt heard, supported, and prioritized. This project allowed me to demonstrate our commitment to their success while fostering trust and long-term collaboration. I was honored to be entrusted with the responsibility of rebuilding the relationship between IMA and our customer, working diligently to restore trust, enhance collaboration, and demonstrate our commitment to their success. I developed critical leadership, problem-solving, and technical troubleshooting skills while restoring trust in our services. The project reinforced my ability to manage large-scale service agreements, optimize machine performance, and lead retrofitting initiatives that directly impacted production efficiency. More importantly, it solidified my reputation as a reliable problem-solver capable of bridging communication gaps and driving operational excellence in high-stakes environments.",
  overview: [
    <div key="overview-section" className="relative">
      <div 
        className="float-right ml-8 mb-6 w-1/3 cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => {
          const modal = document.createElement('div');
          modal.innerHTML = `
            <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onclick="this.remove()">
              <img 
                src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-2.png?raw=true"
                alt="SLA Project"
                class="max-w-full max-h-[90vh] object-contain"
                onclick="event.stopPropagation()"
              />
            </div>
          `;
          document.body.appendChild(modal);
        }}
      >
        <img
          src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-2.png?raw=true"
          alt="SLA Project"
          className="rounded-lg shadow-lg w-full"
        />
        <div className="bg-blue-50 p-3 rounded-lg mt-2">
          <p className="text-sm text-gray-600">
            The data shows significant defect reductions across both sites, with some defects decreasing by over 14%.
          </p>
        </div>
      </div>
      <p>
        One of our largest customers faced persistent operational challenges with their newly purchased machines. Despite extensive service visits, they continued to experience failures in electronics, mechanics, and drive systems, leading to significant downtime and dissatisfaction. With frustrations mounting over service delays and inefficiencies, an SLA (Service Level Agreement) was established to create a dedicated role for managing technical issues, communication, and project milestones. My role under this agreement was to act as the direct point of contact, ensuring proactive problem-solving, optimizing machine performance, and streamlining collaboration between the customer and IMA.
      </p>
    </div>,
    "Beyond resolving machine issues, I fully integrated into the customer's operations, attending internal meetings on spare parts, maintenance, and production efficiency. I facilitated weekly project update meetings, established structured reporting, and created project timelines to ensure all stakeholders remained accountable. By analyzing machine data analytics—such as downtime trends and stop reasons—I identified underperforming areas and pushed optimization projects that directly targeted poor-functioning machine components and processes. This involved coordinating with engineering teams to implement technical adjustments, refining operational workflows, and improving overall equipment reliability.",
    "Additionally, one of the major challenges was the constant turnover of operators, leading to a lack of trained personnel. To mitigate this, I developed and implemented structured training programs to ensure new operators could efficiently and correctly operate the machines, preventing recurring issues. I also implemented a tiered access control system, restricting key machine parameters to specific user levels, ensuring that only authorized personnel could make adjustments. This prevented unauthorized changes that had previously led to machine instability and inconsistent performance. My role extended beyond technical support; I acted as a strategic advisor, not only resolving immediate issues but also implementing long-term solutions that significantly improved production reliability, efficiency, and output.",
    <ul className="list-disc list-inside space-y-2 mt-4 mb-6" key="challenges">
      <li><strong>Operational Oversight & Direct Support</strong> – Spent two weeks per month on-site providing technical support, managing ongoing projects, and ensuring timely issue resolution. I facilitated meetings to track project progress, created timeline reports to hold teams accountable, and analyzed machine data analytics to prioritize critical issues.</li>
      <li><strong>Machine Performance Optimization</strong> – Used machine data analytics to identify and optimize the most frequently failing components. Led targeted improvements by refining operational settings, adjusting maintenance schedules, and coordinating with engineering teams to enhance reliability and efficiency.</li>
      <li><strong>Training & Access Control</strong> – Established structured training programs and restricted unauthorized access to machine settings, reducing operator-induced errors and maintaining process consistency.</li>
      <li><strong>Communication Bridge with IMA Germany</strong> – Facilitated direct communication between the customer and the IMA team in Germany to expedite technical resolutions and retrofit implementations.</li>
      <li><strong>Defect Rate Reduction & Process Control</strong> – Implemented systematic improvements that brought all defect types below their Max Allowable Targets within the first three months of the SLA.</li>
    </ul>
  ],
  contributionsSummary: "By taking ownership of the SLA execution, I played a pivotal role in aligning the customer's needs with IMA's technical capabilities, ensuring clear communication, structured project management, and targeted machine optimizations. My hands-on involvement in analyzing machine data, prioritizing key improvements, and facilitating cross-functional collaboration directly contributed to enhanced performance, efficiency, and long-term operational stability.",
  contributions: [
    <div key="contributions-content" className="relative">
      <div 
        className="float-right ml-8 mb-6 w-1/3 cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => {
          const modal = document.createElement('div');
          modal.innerHTML = `
            <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onclick="this.remove()">
              <img 
                src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-1.png?raw=true"
                alt="SLA Project Implementation"
                class="max-w-full max-h-[90vh] object-contain"
                onclick="event.stopPropagation()"
              />
            </div>
          `;
          document.body.appendChild(modal);
        }}
      >
        <img
          src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-1.png?raw=true"
          alt="SLA Project Implementation"
          className="rounded-lg shadow-lg w-full"
        />
        <div className="bg-blue-50 p-3 rounded-lg mt-2">
          <p className="text-sm text-gray-600">
            This chart illustrates a significant reduction in defect counts over time, particularly after equipment center lining and engineering studies, indicating successful process improvements.
          </p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2">
        <li>Served as the primary liaison between the customer, IMA USA, and IMA Germany, ensuring clear and timely communication.</li>
        <li>Implemented structured maintenance and training programs to standardize operations and improve machine performance.</li>
        <li>Led critical process adjustments that optimized machine throughput and reliability.</li>
        <li>Immersed myself in the customer's daily operations to understand pain points, build relationships, and collaborate effectively to drive project success. This hands-on approach allowed me to work closely with their teams, ensuring that optimization projects were executed efficiently while maintaining alignment with their priorities.</li>
        <li>Drove retrofit initiatives by coordinating technical resources, scheduling implementations, and ensuring timely project execution.</li>
        <li>Provided on-site support across all three customer locations, adapting to different operational challenges and ensuring consistency in machine performance improvements.</li>
      </ul>
    </div>
  ],
  resultsSummary: 'The successful execution of the SLA led to significant improvements in machine performance, operational efficiency, and customer satisfaction. I was grateful for the opportunity to be entrusted with the responsibility of rebuilding the relationship and reputation between IMA and our customer. This project allowed me to demonstrate our commitment to their success, foster trust, and create a foundation for long-term collaboration.',
  results: [
    <div key="results-content">
      <ul className="list-disc list-inside space-y-2 mt-4" key="results">
        <li><strong className="text-gray-600">Defect Reduction</strong> – Reduced all defect rates below Max Allowable Targets within three months.</li>
        <li><strong className="text-gray-600">Increased Production Output</strong> – Improved machine throughput, nearly doubling case output from ~42 to ~72 cases per hour.</li>
        <li><strong className="text-gray-600">Improved OEE</strong> – Raised Overall Equipment Effectiveness (OEE) by 28% to meet or exceed the required 70% benchmark.</li>
        <li><strong className="text-gray-600">Standardized Maintenance & Training</strong> – Established long-term process improvements that ensured consistent operations and minimized downtime.</li>
        <li><strong className="text-gray-600">Enhanced Customer Relations</strong> – Strengthened trust and collaboration between the customer and IMA, leading to improved service response times and operational transparency.</li>
        <li><strong className="text-gray-600">Successful Retrofitting Execution</strong> – Led multiple retrofitting projects, ensuring seamless integration and process optimization.</li>
      </ul>
      <div className="mt-8 flex gap-8">
        <div 
          className="w-2/3 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => {
            const modal = document.createElement('div');
            modal.innerHTML = `
              <div class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onclick="this.remove()">
                <img 
                  src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-5.png?raw=true"
                  alt="SLA Project Results"
                  class="max-w-full max-h-[90vh] object-contain"
                  onclick="event.stopPropagation()"
                />
              </div>
            `;
            document.body.appendChild(modal);
          }}
        >
          <img
            src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/sla-5.png?raw=true"
            alt="SLA Project Results"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="w-1/3">
          <div className="bg-blue-50 p-4 rounded-lg h-full flex items-center">
            <p className="text-sm text-gray-600">
              This graph tracks the increase in cases per minute over time, with the first data point marking the start of the SLA. Following its implementation, there is a clear upward trend in production output, showing immediate improvements and continued growth. The red vertical line represents a centerline test, conducted during the optimization process. The later data points are calculated projections, indicating expected sustained improvements based on current trends and process optimizations. The overall trajectory suggests that operational changes and efficiency improvements have led to long-term production gains.
            </p>
          </div>
        </div>
      </div>
    </div>
  ],
  technologies: ['Machine Optimization & Troubleshooting', 'Performance Analytics', 'Process Engineering & Continuous Improvement', 'Process Optimization', 'Project Management', 'Data Analysis', 'Training Systems']
};