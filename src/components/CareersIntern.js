import React from "react";
import { useNavigate } from "react-router-dom";


const InternshipCard = ({ title, description,  }) => {
  const navigate = useNavigate();
  const handleFormClick = () => { 
    navigate("/careers-intern/form");
  }

  return (
    <div className="card" style={{ width: "19rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a  className="btn btn-primary" style={{ marginTop: "20px", marginLeft: "70px" }}
         onClick={handleFormClick}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const internshipData = [
  {
    id: 1,
    title: "AI/ML Intern",
    description:
      "Work with AI and Machine Learning technologies.",
    link: "/careers-intern/ai-ml",
  },
  {
    id: 2,
    title: "Gen AI Intern",
    description: "Work with Generative AI technologies.",
    link: "/careers-intern/gen-ai",
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    description: "Design user interfaces and improve user experience.",
    link: "/careers-intern/uiux",
  },
  {
    id: 4,
    title: "Digital Marketing Intern",
    description: "Learn digital marketing strategies and tools.",
    link: "/careers-intern/digital-marketing",
  },
  {
    id: 5,
    title: "Data Science Intern",
    description: "Work with data analysis and machine learning.",
    link: "/careers-intern/data-science",
  },
   {
    id: 6,
    title: "DevOps Intern",
    description: "Learn deployment and infrastructure management.",
    link: "/careers-intern/devops",
  },
  {
    id: 7,
    title: "Full Stack  Intern",
    description: "Work with both frontend and backend technologies.",
    link: "/careers-intern/full-stack",
  },
  {
    id: 8,
    title: "Mobile App Developer Intern",
    description: "Develop mobile applications for iOS and Android.",
    link: "/careers-intern/mobile-app",
  },

];

const CareersIntern = () => {
  return (
    <div style={{ marginTop: "120px", paddingLeft: "80px" }}>
      <div className="d-flex gap-4 flex-wrap">
        {internshipData.map((item) => (
          <InternshipCard
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CareersIntern;
