import React from 'react';
import { ContentImage } from '../../components/ContentImage';
import { ContentVideo } from '../../components/ContentVideo';

export const f600 = {
  title: 'F600 Success',
  image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/f600-1.png?raw=true',
  impact: "Working on the F600 taught me that real-world engineering is forged in the crucible of challenges. This project deepened my understanding of automation, complex system integration, and international collaboration. I learned that hands-on problem-solving—despite initial failures and steep learning curves—is essential to developing innovative, long-term solutions that not only enhance machine performance but also drive customer satisfaction.",
  overview: [
    <div key="overview-content">
      <div className="float-right w-2/5 ml-8 mb-6">
        <ContentImage 
          src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/f600-4.png?raw=true"
          alt="Industrial automation upgrade"
          width="large"
          position="right"
          className="w-full mb-1"
        />
        <div className="bg-blue-50 p-2 rounded-lg">
          <p className="text-xs text-gray-600">
            F600 install at customers facilities.
          </p>
        </div>
      </div>
      <p className="mb-6">
        When I first joined IMA, I had minimal automation experience, and my inaugural assignment was to revitalize the F600, a sachet machine that had been discontinued. The project began with significant challenges: the machine had outdated mechanical designs, and its reintroduction involved integrating new servos, drive mechanisms, updated electronics, and improved safety components. Importantly, this machine and its componenets had only been initially tested with water for short periods, so ensuring they performed correctly under real operating conditions was a critical hurdle. Each customer's unique product and packaging requirements—varying in viscosity and plastic properties—introduced further complexities in filling velocities/pressures, foil alignment, sealing pressure/temperature and overall process.
      </p>
      <p className="mb-6">
        After facing numerous issues and dealing with early customer dissatisfaction, the project evolved over 2.5 years through extensive on-the-road troubleshooting and close collaboration with the team in Germany. Every new installation and start up brought valuable feedback, which helped us refine both the mechanical and electrical aspects of the machine.
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong className="text-gray-600">Iterative Design Improvement</strong> – Leveraged continuous onsite troubleshooting and learnings over a 2.5-year period to iteratively refine the machine, ultimately enhancing its reliability, performance, and customer satisfaction.</li>
        <li><strong className="text-gray-600">High-Pressure Environment Management</strong> – Maintained clear communication and provided dedicated on-site support during challenging installations, ensuring customers and internal teams remained reassured and well-supported under high-stress conditions.</li>
        <li><strong className="text-gray-600">International Collaboration</strong> – Worked with the German engineering team to re-engineer the mechanical drive system and fine-tune motor settings, preventing mechanical failures and ensuring optimal force distribution and speed.</li>
        <li><strong className="text-gray-600">Persistent On-Site Support</strong> – Committed to staying with each installation until Site Acceptance Testing (SAT) was successfully completed and customer satisfaction was fully achieved.</li>
      </ul>
      <p>
      </p>
    </div>
  ],
  contributionsSummary: 'I played a pivotal role in bridging engineering challenges with customer needs, ensuring that every machine not only met but exceeded expectations. I maintained a hands-on approach throughout the project—engaging directly with customers, troubleshooting issues into the late hours, and tailoring solutions to meet evolving requirements. My work spanned precise parameter adjustments, process re-engineering, and system enhancements, all of which contributed to improved machine performance and reliability.',
  contributions: [
    <div key="contributions-content">
      <div>
        <div className="float-right w-2/5">
          <ContentVideo 
            src="https://github.com/garrettdfaino/portfolio/raw/refs/heads/main/public/images/projects/f600-6.mp4"
            width="large"
            position="right"
            marginLeft={8}
            className="w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              Installing new drives for the equipment.
            </p>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-gray-600">Technical Optimization</strong> – Calculated flow rates and fine-tuned filling pressure, temperature, and sealing parameters; refined the servo foil advance program by reducing the sealer's return-to-home time, thereby allowing more effective sealing and achieving uniform fills.</li>
          <li><strong className="text-gray-600">System Enhancements</strong> – Implemented custom user-level logins to control access to system parameters, thereby improving operational security and process integrity.</li>
          <li><strong className="text-gray-600">Technical Enhancements</strong> – Created comprehensive training documents and led on-site classes to empower operators and maintenance teams, ensuring smooth machine operation and long-term support.</li>
          <li><strong className="text-gray-600">System Security & Access Control</strong> – Developed and implemented custom-level logins to control parameter access based on user roles, enhancing system security and operational consistency.</li>
          <li><strong className="text-gray-600">Training & Support</strong> – Created comprehensive training documents for CIP installation and dismantling setups, and led on-site training sessions to equip operators and maintenance teams with the skills necessary for optimal machine operation..</li>
          <li><strong className="text-gray-600">Installation & Logistics Management</strong> – Coordinated with personnel, plant electrical engineers, and plumbing/piping teams to ensure smooth installations, adherence to timelines, proper validation requirements, and SAT testing protocols.</li>
          <li><strong className="text-gray-600">Integration with Film Distributors</strong> – Collaborated with film distributors to resolve issues in film alignment, tracking control, and temperature regulation, while addressing how the filled product impacts the film's integrity and longevity.</li>
        </ul>
      </div>
    </div>
  ],
  resultsSummary: 'The F600 project not only revived a discontinued sachet machine but also turned initial installations for three customers into a gateway for substantial repeat orders. Successful field validation and iterative improvements resulted in enhanced machine reliability, performance, and customer satisfaction, directly translating into increased sales and market confidence.',
  results: [
    <div key="results-content">
      <div>
        <div className="float-right w-2/5">
          <ContentVideo 
            src="https://github.com/garrettdfaino/portfolio/raw/refs/heads/main/public/images/projects/f600-7.mp4"
            width="large"
            position="right"
            marginLeft={8}
            className="w-full mb-1"
          />
          <div className="bg-blue-50 p-2 rounded-lg">
            <p className="text-xs text-gray-600">
              Final installation and testing of the F600 machine.
            </p>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li><strong className="text-gray-600">Expanded Customer Orders</strong> – Initial installations for three customers led to significant follow-on orders, reflecting strong market validation.</li>
          <li><strong className="text-gray-600">Established Reputation</strong> – Became the indispensable go-to person for F600 installations and troubleshooting—customers specifically requested my expertise and booked my services in advance, while I built strong customer relationships and collaborated effectively with them.</li>
          <li><strong className="text-gray-600">Optimized Installation & Validation</strong> – Comprehensive coordination and on-site support streamlined Site Acceptance Testing (SAT) and ensured smooth, trouble-free installations.</li>
          <li><strong className="text-gray-600">Enhanced Reliability & Performance</strong> – Iterative design improvements and persistent on-site troubleshooting dramatically increased machine reliability and performance.</li>
        </ul>
      </div>
    </div>
  ],
  technologies: ['Project Management', 'Business Development', 'Industrial Automation', 'PLC Programming', 'Servos', 'Encoders', 'Process Optimization', 'Fluid Dynamics', 'Technical Documentation', 'Customer Relations','Electromechanics']
};
