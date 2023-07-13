import { Widgets } from '../components/';
export default function Viewjobs() {
  const jobs = [
    {
      id: 1,
      title: 'Sales Manager',
      location: 'Bangalore',
      company: 'Codemonk',
      postedby: 'Kakila Joseph',
      experience: '4-6 years',
      salary: '4-9LPA',
      keywords: [
        'sales',
        'inside sales',
        'sales and operations planning',
        'communication skills',
      ],
      jobdescription: `Job Description:

      We are seeking a highly motivated and results-driven B2B Sales Representative to join our team as an individual contributor. Reporting to the VP of Sales, you will be responsible for driving sales of our product engineering services through various channels, including cold calling, outbound sales, and inside sales efforts. As a B2B Sales Representative at Codemonk.in, you will develop and implement effective sales strategies, build strong client relationships, and achieve sales targets in the product engineering services sector.
      
       
      
      Responsibilities:
      
      - Develop and execute a comprehensive sales strategy for our product engineering services to achieve sales targets and revenue growth.
      
      - Conduct cold calling and engage in outbound sales activities to identify and pursue new business opportunities in the target market.
      
      - Actively manage inside sales efforts, including lead qualification, nurturing, and conversion through phone calls, emails, and virtual meetings.
      
      - Build and maintain strong relationships with key decision-makers and stakeholders within target client organizations, including engineering managers, product managers, and C-level executives.
      
      - Conduct thorough needs assessments and present tailored solutions to prospective clients, effectively communicating the value of our product engineering services.
      
      - Meet or exceed individual sales targets of 1M USD annually by actively prospecting and qualifying leads, managing the sales pipeline, and closing deals.
      
      - Collaborate with the marketing team to develop effective lead generation campaigns, nurture leads, and track conversion rates.
      
      - Stay up to date with industry trends, emerging technologies, and competitors' activities to identify opportunities for growth and maintain a competitive edge.
      
      - Collaborate closely with the marketing and delivery teams to align sales strategies with market needs and provide valuable insights for service enhancements.
      
      - Provide accurate sales forecasts, activity reports, and updates on progress to the VP of Sales on a regular basis.
      
      - Utilize CRM software and other sales tools to manage customer relationships, track sales activities, and maintain accurate sales records.
      
      - Attend industry events, conferences, and trade shows to network, generate leads, and promote our product engineering services.
      
      - Continuously improve product knowledge, stay informed about industry developments, and actively seek opportunities for professional growth.
      
      - Collaborate with marketing to develop effective outbound sales campaigns and initiatives.
      
       
      
      Requirements:
      
      - Bachelor's degree in Engineering, Business Administration, or a related field.
      
      - Proven track record of success in B2B sales within the product engineering services sector, including experience with cold calling, outbound sales, and inside sales.
      
      - Strong understanding of product engineering processes, methodologies, and the ability to effectively communicate their value to clients.
      
      - Excellent communication, negotiation, and interpersonal skills, with the ability to build and maintain strong client relationships.
      
      - Self-motivated, results-oriented, and able to work independently under minimal supervision.
      
      - Demonstrated ability to meet or exceed sales targets, with a target of 750k USD annually, in a competitive environment.
      
      - Proficiency in using CRM software and other sales tools to manage customer relationships and track sales activities.
      
      - Analytical mindset with the ability to identify customer needs and tailor solutions accordingly.
      
      - Willingness to travel as required to meet with clients and attend industry events.
      
       
      
      We offer a competitive salary package, including commission-based incentives and benefits, to the successful candidate.
      
       
      
      If you are a dynamic individual with a passion for product engineering services sales, including cold calling, outbound sales, and inside sales, and a proven track record of success, we would love to hear from you. Please submit your resume and a cover letter detailing your relevant experience.`,
    },
    {
      id: 1,
      title: 'Sales Manager',
      location: 'Bangalore',
      company: 'Codemonk',
      postedby: 'Kakila Joseph',
      experience: '4-6 years',
      salary: '4-9LPA',
      keywords: [
        'sales',
        'inside sales',
        'sales and operations planning',
        'communication skills',
      ],
      jobdescription: `Job Description:

      We are seeking a highly motivated and results-driven B2B Sales Representative to join our team as an individual contributor. Reporting to the VP of Sales, you will be responsible for driving sales of our product engineering services through various channels, including cold calling, outbound sales, and inside sales efforts. As a B2B Sales Representative at Codemonk.in, you will develop and implement effective sales strategies, build strong client relationships, and achieve sales targets in the product engineering services sector.
      
       
      
      Responsibilities:
      
      - Develop and execute a comprehensive sales strategy for our product engineering services to achieve sales targets and revenue growth.
      
      - Conduct cold calling and engage in outbound sales activities to identify and pursue new business opportunities in the target market.
      
      - Actively manage inside sales efforts, including lead qualification, nurturing, and conversion through phone calls, emails, and virtual meetings.
      
      - Build and maintain strong relationships with key decision-makers and stakeholders within target client organizations, including engineering managers, product managers, and C-level executives.
      
      - Conduct thorough needs assessments and present tailored solutions to prospective clients, effectively communicating the value of our product engineering services.
      
      - Meet or exceed individual sales targets of 1M USD annually by actively prospecting and qualifying leads, managing the sales pipeline, and closing deals.
      
      - Collaborate with the marketing team to develop effective lead generation campaigns, nurture leads, and track conversion rates.
      
      - Stay up to date with industry trends, emerging technologies, and competitors' activities to identify opportunities for growth and maintain a competitive edge.
      
      - Collaborate closely with the marketing and delivery teams to align sales strategies with market needs and provide valuable insights for service enhancements.
      
      - Provide accurate sales forecasts, activity reports, and updates on progress to the VP of Sales on a regular basis.
      
      - Utilize CRM software and other sales tools to manage customer relationships, track sales activities, and maintain accurate sales records.
      
      - Attend industry events, conferences, and trade shows to network, generate leads, and promote our product engineering services.
      
      - Continuously improve product knowledge, stay informed about industry developments, and actively seek opportunities for professional growth.
      
      - Collaborate with marketing to develop effective outbound sales campaigns and initiatives.
      
       
      
      Requirements:
      
      - Bachelor's degree in Engineering, Business Administration, or a related field.
      
      - Proven track record of success in B2B sales within the product engineering services sector, including experience with cold calling, outbound sales, and inside sales.
      
      - Strong understanding of product engineering processes, methodologies, and the ability to effectively communicate their value to clients.
      
      - Excellent communication, negotiation, and interpersonal skills, with the ability to build and maintain strong client relationships.
      
      - Self-motivated, results-oriented, and able to work independently under minimal supervision.
      
      - Demonstrated ability to meet or exceed sales targets, with a target of 750k USD annually, in a competitive environment.
      
      - Proficiency in using CRM software and other sales tools to manage customer relationships and track sales activities.
      
      - Analytical mindset with the ability to identify customer needs and tailor solutions accordingly.
      
      - Willingness to travel as required to meet with clients and attend industry events.
      
       
      
      We offer a competitive salary package, including commission-based incentives and benefits, to the successful candidate.
      
       
      
      If you are a dynamic individual with a passion for product engineering services sales, including cold calling, outbound sales, and inside sales, and a proven track record of success, we would love to hear from you. Please submit your resume and a cover letter detailing your relevant experience.`,
    },
  ];
  const JobCard = ({ jobs }) => {
    return (
      jobs &&
      jobs.map((item) => {
        return (
          <div key={item.id} className="card">
            <div className="flex justify-between">
              <div className="flex">
                <div>image</div>
                <div className="m-2">
                  <h3>{item.title}</h3>
                  <div>at {item.company}</div>
                  <div>Posted by{item.postedby}</div>
                </div>
              </div>
              <div>
                <div>
                  <button type="text" className="primary-button">
                    Apply Now
                  </button>
                  <button type="text" className="default-button">
                    Not Interested
                  </button>
                  <a href="#">Save for Later</a>
                </div>
              </div>
            </div>
            <div className="flex justify-arround">
              <div>Location:{item.location}</div>
              <div>Location:{item.experience}</div>
              <div>Location:{item.salary}</div>
            </div>
            <div className="flex">
              {item &&
                item.keywords.map((item) => {
                  return (
                    <div className="bg-gray-200 rounded-lg border pl-2 pr-2 m-1">
                      {item}
                    </div>
                  );
                })}
            </div>
            <div className="p-2 mt-2 mr-2 overflow-y-auto h-32">
              {item.jobdescription}
            </div>
          </div>
        );
      })
    );
  };
  return (
    <div className="grid grid-cols-5 gap-4 flex bg-gray-100">
      <div className="col-span-4 m-3">
        <h3>Showing 30892 jobs</h3>
        <JobCard jobs={jobs} />
      </div>
      <div className="col-span-1 m-2">
        <Widgets
          title="Moonlighting Ground Report"
          content="3000+ tech professionals have weighed in on the moonlighting debate. While, the industry is divided on the topic, with some leaders calling it cheating while others openly announcing their moonlighting policies. Read the report to learn about what's happening in the tech job market!"
          button="Get the Insights"
        >
          <button type="button" className="default-button">
            Get the Insights
          </button>
        </Widgets>
        <Widgets
          title="Are programmers getting replaced by AI?"
          content="March has been filled with launches by AI product companies. The Generative AI wave has taken over the tech world. As OpenAI leads this revolution, questions arise about its capabilities and if programmers and others need to be concerned about their jobs being snatched by AI systems."
          button="Get the Insights"
        >
          <button type="button" className="default-button">
            Watch and find out
          </button>
        </Widgets>
      </div>
    </div>
  );
}
