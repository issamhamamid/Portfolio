import {Docker , Redis , NestJS , TypeScript , JavaScript , PostgreSQL , React_Icon , Python , Nodejs , Odoo} from "./Icons.tsx";
import React from "react";
type Skill = {
    name: string;
    progress: number;
    Icon: React.ComponentType<{ width: number; height: number }>;
}

const skills: Skill[] = [
    { name: "Python", progress: 80 , Icon : Python  },
    { name: "JavaScript", progress: 80 , Icon : JavaScript },
    { name: "TypeScript", progress: 65 , Icon : TypeScript },
    { name: "Node.js", progress: 80 , Icon : Nodejs },
    { name: "Nest.js", progress: 60 , Icon : NestJS },
    { name: "React.js", progress: 75 , Icon : React_Icon },
    { name: "Docker", progress: 65 , Icon : Docker },
    { name: "Redis", progress: 70 , Icon : Redis },
    { name: "PostgresSQL", progress: 80 , Icon : PostgreSQL },
    { name: "Odoo ERP", progress: 70 , Icon : Odoo },
];


export {skills}