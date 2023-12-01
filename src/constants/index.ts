import { reciclas, trd, vite, cripto } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    money,
    date,
    criptos,
    pokedex,
    movie
} from "../assets/icons/index";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Desarrollador Front-End (Voluntariado)",
        company_name: "Re-ciclas Ecuador APP",
        icon: reciclas, // Reemplazar con el icono correspondiente.
        iconBg: "#494", // Reemplazar con el color correspondiente.
        date: "Agosto 2023 - Actualmente",
        points: [
            "Desarrollo de una aplicación móvil multiplataforma para la administración del reciclaje.",
            "Implementación de navegación utilizando React Navigation.",
            "Uso de animaciones para mejorar la experiencia del usuario.",
            "Integración y consumo de API para obtener datos relevantes.",
            // Agregar más detalles técnicos según sea necesario.
        ],
    },
    {
        title: "Technical Operations Agent",
        company_name: "Trade",
        icon: trd, // Reemplazar con el icono correspondiente.
        iconBg: "#tuColor2", // Reemplazar con el color correspondiente.
        date: "2022 - 2023",
        points: [
            "Gestión de requerimientos y seguimiento de tickets, resolución de problemas.",
            "Manejo de bases de datos MySQL y MongoDB, así como servidores y servicios en la nube con AWS.",
            "Soporte y atención al cliente para aplicaciones como Juan Valdez, Appedir, KFC, Metrored, El Hornero Multicines, entre otras.",
        ],
    },
    {
        title: "Desarrollo móvil con React Native",
        company_name: "Proyecto personal AppPeliculas",
        icon: react, // Reemplazar con el icono correspondiente.
        iconBg: "#007ACC", // Reemplazar con el color correspondiente.
        date: "2023",
        points: [
            "Creación de una aplicación móvil para mostrar información de películas, consumiendo datos de una API.",
            "Repositorio: https://github.com/ThePowersr/AppPelicula",
        ],
    },
    {
        title: "Desarrollo de aplicación web con React",
        company_name: "Proyecto personal Control-Gastos-App",
        icon: vite, // Reemplazar con el icono correspondiente.
        iconBg: "#22863A", // Reemplazar con el color correspondiente.
        date: "2022",
        points: [
            "Desarrollo de una aplicación web con React utilizando Vite.",
            "Permite el control de gastos del usuario en base a un presupuesto.",
            "Repositorio: https://github.com/ThePowersr/Control-Gastos-React-Vite",
            "Sitio web: https://controlgastosrafael.netlify.app/",
        ],
    },
    {
        title: "EdMarketCriptos",
        company_name: "Proyecto personal visualización de criptomonedas",
        icon: cripto, // Reemplazar con el icono correspondiente.
        iconBg: "#tuColor5", // Reemplazar con el color correspondiente.
        date: "2022",
        points: [
            "Desarrollo de un proyecto en React para visualizar las principales 100 criptomonedas con sus precios actuales."
        ],
    },
];


export const projects = [
    {
        iconUrl: pokedex,
        theme: 'btn-back-red',
        name: 'Pokedex',
        description: 'Desarrollo de aplicación Pokedex consumiendo del PokéAPI, creada con React Native, Expo y TypeScript.',
        link: 'https://github.com/ThePowersr/Pokedex',
    },
    {
        iconUrl: movie,
        theme: 'btn-back-black',
        name: 'APP de peliculas',
        description: 'Desarrollo de aplicación para visualizar peliculas recientes, peliculas populares, Top Rated y Upcoming. Aplicación creada con React Native y TypeScript',
        link: 'https://github.com/ThePowersr/AppPelicula',
    },
    {
        iconUrl: money,
        // theme: 'btn-back-green',
        theme: 'btn-back-blue',
        name: 'Aplicación de control de gastos',
        description: 'Desarrollo de aplicación para controlar gastos que permite poder llevar un control de los mismos permitiendo editarlos, borrarlos y administrarlos de mejor manera',
        link: 'https://controlgastosrafael.netlify.app/',
    },
    {
        iconUrl: date,
        theme: 'btn-back-pink',
        name: 'Aplicación de control de citas.',
        description: 'Desarrollo de aplicación para registrar y controlar citas de una veterinaria. Desarrollado en React con LocalStorage',
        link: 'https://citasvetrafael.netlify.app/',
    },
    {
        iconUrl: criptos,
        theme: 'btn-back-green',
        name: 'EdMarket',
        description: 'Desarrollo de aplicación para visualizar las primeras 100 cripto monedas. Esta información se consume desde un API, permitiendo visualizar precio y variaciones recientes.',
        link: 'https://edmarketcriptos.netlify.app/',
    }
];