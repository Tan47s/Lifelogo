import "./Services.css"

export const Services = () => {
  const leftColumn = [
    "Anger",
    "Anxiety",
    "Autism",
    "ADHD",
    "Adolescent Crisis",
    "Behavior Issues",
    "Career Counselling",
    "Depression",
    "Drug Addiction"
  ];

  const rightColumn = [
    "Exam Phobia",
    "Frustration",
    "Internet Addiction",
    "Lack of Attention",
    "OCD",
    "Panic Disorder",
    "PTSD",
    "Relationship Issues",
    "Stress"
  ];

  return (
    <div className="serbox">
      <div className="service-content">
        <h1>We Support Managing:</h1>
        
        <div className="columns-wrapper">
          <div className="sercard">
            {leftColumn.map((item, index) => (
              <h3 key={index}>• {item}</h3>
            ))}
          </div>
          
          <div className="sercard">
            {rightColumn.map((item, index) => (
              <h3 key={index}>• {item}</h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};