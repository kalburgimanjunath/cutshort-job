import { Widgets } from '../components';
export default function dashboard() {
  return (
    <div className="grid grid-cols-5 gap-4 flex bg-gray-100">
      <div className="col-span-4">
        <div className="dashboard-card card">
          <h3>Conversations with companies</h3>
        </div>
        <div className="dashboard-card card">
          <h3>Your talent card</h3>
        </div>
        <div className="dashboard-card card">
          <h3>Increase your chances of getting shortlisted</h3>
        </div>
        <div className="dashboard-card card">
          <h3>5 jobs for you</h3>
        </div>
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
