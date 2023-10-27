import { Job } from "./types";

export const content: {jobs: Job[]} = {
  jobs: [{
    title: "Bitovi",
    role: "Front-end Consultant",
    field: "EVs, security, e-commerce",
    years: "2021-2023",
    description: [
      "Managed blogging for React team",
      "Wrote several blogs on React, Remix, and development processes",
      "Wrote and presented a variety of internal and external trainings"
    ],
    technologies: [
      "React",
      "Remix",
      "Web components",
      "Typescript",
    ]
  }, {
    title: "Clearcover",
    role: "Software Engineer",
    field: "Car Insurance",
    years: "2019-2021",
    description: [
      "Met Tony",
      "Built a new agent policy management system",
      "Experienced a rapid growth startup"
    ],
    technologies: [
      "React",
      "Typescript",
    ]
  }, {
    title: "Snapsheet",
    role: "Software Engineer",
    field: "Car Insurance",
    years: "2018-2019",
    description: [
      "Worked on payments product used by Lyft and Outdoorsy",
      "Member of front end standards committee",
      "Mentored new engineers",
      "Introduced new technologies including Typescript, RxJs, and React Hooks.",
      "Lead a new insurance agent product used by Zurich.",
      "Setup new project including github repo and branch rules, Rails skeleton, multi-tenancy, data seeding, Rails + React + Typescript structure and build through deployment",
      "Worked with product and design teams to identify user stories and define incremental version feature-sets"
    ],
    technologies: [
      "Rails",
      "React",
      "Typescript",
      "RxJs",
      "Postgres",
    ]
  }, {
    title: "Everspring",
    role: "Senior Web Developer",
    field: "Education",
    years: "2015-2018",
    description: [
      "Lead & mentor junior developers",
      "Define testing, deployment, and code standards",
      "Marketing full stack development",
      "Designed classroom app with customizable log and",
      "color settings for university clients",
      "Mobile & desktop hybrid app development",
      "Build and deploy scripting in bash and npm",
      "QA automation",
    ],
    technologies: [
      "PHP",
      "Node",
      "Angular",
      "Ember",
      "Ionic",
      "MySql",
      "MongoDb",
    ]
  }, {
    title: "StageBloc",
    role: "Backend Developer",
    field: "Music",
    years: "2014-2015",
    description: [
      "Backend Developer",
      "Integration with social media and shipping APIs",
    ], 
    technologies: [
      "PHP",
      "MySql",
    ]
  }]
}