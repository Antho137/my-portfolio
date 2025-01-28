import React from "react";
import Image from 'next/image';

const Projects = () => {
    const projectArr = [
        {
            title: "Active People",
            img: "/active_people.png",
            technos: "HTML, Tailwindcss and Nextjs.",
            description: "A simple community website project about members opinions and ideas sharing.",
            live: "https://antho137.github.io/active-people/",
            code: "https://github.com/Antho137/active-people"
        },
        {
            title: "Student Record",
            img: "/student_grade.png",
            technos: "React.js and CSS",
            description: "A CRUD project about management of student record in a class. The aim is to get the student grade.",
            live: "https://antho137.github.io/student-record/",
            code: "https://github.com/Antho137/student-record"
        },
        {
            title: "Sweet Meal",
            img: "/sweet_lunch.png",
            technos: "React.js-vite, HTML and Tailwindcss.",
            description: "A simple online food order project where clients check menus and make order online.",
            live: "https://antho137.github.io/sweet-meal/",
            code: "https://github.com/Antho137/sweet-meal"
        },
        {
            title: "Apartment Rental",
            img: "/apartment_rental.png",
            technos: "React.js-vite, Tailwindcss, and Typescript",
            description: "A simple project for apartment rental. The search criteria is by the number of bedrooms.",
            live: "https://antho137.github.io/apartment-rent/",
            code: "https://github.com/Antho137/apartment-rent"
        },
        {
            title: "Blog App",
            img: "/blog_app.png",
            technos: "HTML, Tailwindcss and Nextjs.",
            description: "A blog project about user posts including author, description and date.",
            live: "https://antho137.github.io/blog-app/",
            code: "https://github.com/Antho137/blog-app"
        },
        {
            title: "Survey Form",
            img: "/survey-form.png",
            technos: "HTML, CSS and React.js-vite",
            description: "The survey form project which is about the research on user's  experience with Internet interaction.",
            live: "https://antho137.github.io/survey-form/",
            code: "https://github.com/Antho137/survey-form"
        }
    ];

    return (
        <div className="bg-blue-300 text-center py-10 px-5" id="my-projects">
            <h2 className="text-3xl text-orange-600 mb-5">Projects</h2>
            <div className="mx-auto flex flex-col justify-center content-center 
            md:flex-row md:flex-wrap md:justify-space-around gap-7">
                {projectArr.map((project, index) => {
                    return (
                        <div className="bg-blue-100 p-3 md:w-[360px] rounded-md" key={index}>
                            <Image
                                src={project.img}
                                alt={project.title}
                                width={320}
                                height={285}
                                className='m-3 mx-auto rounded-lg'
                            />
                            <h3 className="mt-3 text-orange-600 text-xl text-center font-medium ">{project.title}</h3>
                            <div className="mt-2 text-center text-md font-bold">
                                <span className="description">{project.technos}</span>
                            </div>
                            <p className="mt-2 text-center text-sm">{project.description}</p>
                            <div className="my-3 flex justify-center content-center gap-2">
                                <a href={project.live}>
                                    <button className="bg-whitetext-sm text-orange-600 py-1 px-4 rounded-md font-medium border border-orange-600 pointer">LIVE</button>
                                </a>
                                <a href={project.code}>
                                    <button className="bg-whitetext-sm text-orange-600 py-1 px-4 rounded-md font-medium border border-orange-600 pointer">CODE</button>
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;