import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Vistaura</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Delivered features across React.js and Node.js stacks for scalable,
              responsive web applications. Integrated Apache Kafka for real-time
              data streaming and optimized MySQL queries, reducing load time by
              30%. Built an internal communication platform with WebSocket-powered
              real-time messaging, WhatsApp integration, and bulk messaging
              capabilities. Led features delivering a 12% rise in new user signups
              within 9 weeks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Yellow.ai</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed AI-powered conversational experiences using NLP and ML,
              increasing user engagement by 25–30%. Built high-throughput services
              for systems handling 16+ billion conversations annually. Established
              CI/CD pipelines shortening release cycles by ~30% and achieved 85%+
              test coverage across core modules.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Engineer</h4>
                <h5>Fairtility</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architected scalable frontend-backend solutions with Vue.js, NestJS,
              and TypeScript. Led UI engineering for complex reporting workflows,
              improving code quality by 30%. Re-engineered media storage to lower
              infrastructure costs by 20% and reduce latency by 15%. Implemented
              secure multi-tenant capabilities with full internationalization,
              driving 5–6 new clinic signups within two months.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
