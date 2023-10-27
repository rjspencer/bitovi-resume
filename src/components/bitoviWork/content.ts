import { Client } from "./types";

export const content: {clients: Client[]} = {
  clients: [{
    title: "Medline UI Kit",
    description: `
    Building a reusable component library for Medline.
    `,
    technologies: [
      "React",
      "Typescript",
      "Storybook",
      "SCSS",
    ]
  }, {
    title: "VeryBigThings/BigBear AI/Troy",
    description: `
    BigBear built an API to take an uploaded firmware and break it down into its software bill of materials; reverse SBOM as they called it. VBT was the lead and we were hired for development. 
    
    I assisted in the requirements gathering, definition, scoping, and planning. I encouraged the VBT team to use a design library with Figma and React components to stay within the short timeline.
    
    As the BigBear team only focused on the firmware evaluation functionality, I designed a Remix implementation that could handle the UI along with backend concerns including authentication and sharing within organizations. The delivered product was fast and configurable with a custom CMS interface.
    
    The dev experience included Docker for the app and database, Prettier, Cypress tests, and Husky hooks on commit. I setup the pipeline to run PR validations and deploy to a staging server on merge. When BigBear hired a devops person, I worked with him to transition the Docker deployment into their AWS setup.
    
    More than any other project I’ve ever worked on, we over-delivered on this project. We still ended with an unhappy client. This was a huge learning experience. VBT managed the relationship with the client, but there were opportunities to be more active in communication directly to the client I should have taken advantage of. 
    `,
    technologies: [
      "Remix",
      "React",
      "Prisma",
      "Postgres",
      "Sanity",
      "MUI",
      "Docker"
    ]
  }, {
    title: "Attestd",
    description: `
    Short, two-week, fixed-bid project for established customers with a new startup. They asked for a site built with Remix. They already had devs and a MUI-based design, but no frontend talent or Remix experience. They needed someone to build the major design elements and frame out the app structure for them so they could then copy/paste. As the only one with Remix experience, the project was handed to me. 
    `,
    technologies: [
      "Remix",
      "MUI",
    ]
  }, {
    title: "WiseCode",
    description: `
    Swapped in for someone else on an active project making web components. Brought in Lit to simplify and speed up the development process. 
    `,
    technologies: [
      "Lit",
      "Web components",
      "Next",
    ]
  }, {
    title: "BellaWatt/ZappyRide",
    description: `
    Electric vehicle individual and fleet TCO calculator sites using real vehicle data. One site involved plotting charging stations and cost data on Google Maps. Added JSDoc to some sites for type hinting and eventually convinced the client to move to Typescript.

    Clients included GM, Shell, and PG&E.
    `,
    technologies: [
      "React",
      "Typescript",
      "Google Maps",
      "JSDoc",
      "MUI",
    ]
  }]
}