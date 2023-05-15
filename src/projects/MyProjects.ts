import {v1} from "uuid";
import counter from "../images/projects/counter.png";
import network from "../images/projects/network.png";
import todolist from "../images/projects/todolist.png";

export const projects = [
    {id: v1(),
        name: 'Counter',
        description: 'Краткое описание проекта',
        url: 'https://bozhenavlasova.github.io/counter2/',
        gitUrl: 'https://github.com/BozhenaVlasova/counter2',
        image: counter},
    {id: v1(),
        name: 'Social Network',
        description: 'Краткое описание проекта',
        url: '#',
        gitUrl: 'https://github.com/BozhenaVlasova/samurai-way-main',
        image: network},
    {id: v1(),
        name: 'Todolist',
        description: 'Краткое описание проекта',
        url: '#',
        gitUrl: '#',
        image: todolist},
]