const skills = [
  {
    id: 1,
    icon: "devicon-html5-plain",
    name: "HTML5"
  },
  {
    id: 2,
    icon: "devicon-css3-plain",
    name: "CSS3"
  },
  {
    id: 3,
    icon: "devicon-javascript-plain",
    name: "JavaScript"
  },
  {
    id: 4,
    icon: "devicon-typescript-plain",
    name: "Typescript"
  },
  {
    id: 5,
    icon: "devicon-python-plain",
    name: "PYTHON"
  },
  {
    id: 6,
    icon: "devicon-git-plain",
    name: "Git"
  },
  {
    id: 7,
    icon: "devicon-react-original",
    name: "React JS"
  },
  {
    id: 8,
    icon: "devicon-nextjs-original",
    name: "Next JS"
  },
  {
    id: 9,
    icon: "devicon-bootstrap-plain",
    name: "Bootstrap"
  },
  {
    id: 10,
    icon: "devicon-tailwindcss-plain",
    name: "Tailwind CSS"
  },
  {
    id: 11,
    icon: "devicon-sass-original",
    name: "Sass"
  },
  {
    id: 12,
    icon: "devicon-nodejs-plain",
    name: "Node JS"
  },
  {
    id: 13,
    icon: "devicon-mongodb-plain",
    name: "MongoDB"
  },
  {
    id: 14,
    icon: "devicon-postgresql-plain",
    name: "PostgresSQL"
  },
  {
    id: 15,
    icon: "devicon-express-original",
    name: "Express"
  }
  ,
  {
    id: 15,
    icon: "devicon-firebase-plain",
    name: "Firebase"
  },
  {
    id: 17,
    icon: "devicon-fastapi-plain",
    name: "Fastapi"
  }
]


export default function Skills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 place-items-center mt-14 gap-8" data-aos="zoom-in-down" data-aos-duration="1500">
      {skills.map(skill => (
        <div key={skill.id} className="skill">
          <i className={`${skill.icon} text-6xl md:text-7xl`}></i>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
