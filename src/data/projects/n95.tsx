export const n95 = {
  title: 'Innovative Respirator Solution: Transforming Pocket Masks with 3D Printing',
  image: 'https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/mask-1.png?raw=true',
  impact: "This was a fun project I took on outside of my work, spending countless long nights designing and troubleshooting. It brought me a lot of joy to know I was creating something that could truly make an impact and drive change. The long nights were worth it, and it solidified my passion for rapid prototyping. This experience became one of the greatest pleasures of my career, as I discovered how rewarding it is to innovate quickly and effectively when the stakes are high.",
  overview: [
    <div key="overview" className="flex gap-8">
      <div className="flex-1">
        <p className="mb-6">
          During the COVID-19 pandemic, respirators were in short supply, but hospitals had an abundance of pocket masks that weren't designed for daily use. To address this issue, we designed and built a 3D-printed adapter that converted pocket masks into reusable respirators with proper filtration.
        </p>
        <p>
          We approached this by researching airflow dynamics, filtration efficiency, and user comfort. Through multiple design iterations and prototyping, we refined the adapter to ensure a secure fit and effective air filtration. The final design featured two key airflow components: one inlet housed a HEPA filter, ensuring that all incoming air was properly filtered before being inhaled, while the other side incorporated a check valve that only allowed air to exit, preventing contaminated air from being drawn back in. Additionally, we designed a custom strap system to keep the mask securely in place, ensuring both comfort and a reliable seal.
        </p>
      </div>
      <div className="w-1/2 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src="https://github.com/garrettdfaino/portfolio/blob/main/public/images/projects/mask-3.png?raw=true"
          alt="N95 mask adapter design"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  ],
  contributionsSummary: 'I led the entire project from concept to final testing, focusing on creating a practical solution to address the urgent need for PPE during the pandemic.',
  contributions: [
    'Designed 3D-printed adapter system',
    'Developed custom filtration solution',
    'Created and tested multiple prototypes',
    'Conducted fit testing and validation'
  ],
  resultsSummary: 'While ultimately not implemented due to the arrival of traditional N95 masks, the project demonstrated rapid innovation capabilities and the potential of 3D printing in crisis response.',
  results: [
    'Successfully passed official fit testing',
    'Achieved proper seal and filtration',
    'Developed reusable, cost-effective solution',
    'Created detailed documentation for reproduction'
  ],
  technologies: ['3D Printing', 'CAD Design', 'Rapid Prototyping', 'Filtration Systems']
};