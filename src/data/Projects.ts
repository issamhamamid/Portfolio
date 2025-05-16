
import recipehub from "../assets/Recipehub.png";
import quizzme from "../assets/quizzme.png";
import odoo from "../assets/odoo.png";

type Project = {
    name : string ,
    description : string ,
    tags : string[] ,
    gh_link : string ,
    image : string
}


const recent_projects : Project[] = [
    {
        name: "QuizzMe",
        description: "A real-time quiz trivia web app where users can authenticate, create/join rooms, and play together with live score updates. Features secure JWT-based auth, WebSocket real-time interaction via Socket.IO, and Redis-powered room state management.",
        tags: ["Web Development ", "TypeScript","WebSockets"],
        gh_link: "https://github.com/issamhamamid/QuizzMe",
        image: quizzme
        },
    {
        name: "RecipeHub",
        description: "A full-stack recipe app allowing users to browse, search, comment, and save meals, with a personalized meal generator using a genetic algorithm based on calorie/protein needs. Built with React, Node.js, PostgreSQL, and Python.",
        tags: ["JavaScript", "ReactJS", "NodeJS", "Genetic Algorithms"],
        gh_link: "https://github.com/issamhamamid/RecipeHub",
        image: recipehub
    },
    {
        name: "Odoo Prospect Manager",
        description: "A custom Odoo  module to manage regions, teams, prospects, and clients. Includes role-based workflows, prospect pipeline stages, auto-assignment, and dynamic PDF export of client acquisition details.",
        tags: ["Python", "Odoo", "XML", "PostgreSQL" , "ERP"],
        gh_link: "https://github.com/issamhamamid/Odoo-prospects-manager",
        image: odoo
    }
];

export {recent_projects}
