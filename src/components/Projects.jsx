const Projects = () => {
    const projectArr = [
        {
            title: "Soft Minds",
            img: "/soft_minds.png",
            technos: "HTML, CSS3, Tailwindcss and Reactjs/Vite.",
            description: "A simple community website project about members opinions and ideas sharing.",
            live: "https://antho137.github.io/soft-minds/",
            code: "https://github.com/Antho137/soft-minds"
        },
        {
            title: "Ontime Meal",
            img: "/ontime_meal.png",
            technos: "HTML, CSS3, Tailwindcss and React.js/vite.",
            description: "A simple online food order project where clients check menus and make order online.",
            live: "https://antho137.github.io/ontime-meal/",
            code: "https://github.com/Antho137/ontime-meal"
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
            title: "Apartment Rental",
            img: "/apartment_rental.png",
            technos: "React.js-vite, Tailwindcss, and Typescript",
            description: "A simple project for apartment rental with search criteria based by the number of bedrooms.",
            live: "https://antho137.github.io/apartment-rent/",
            code: "https://github.com/Antho137/apartment-rent"
        },
        {
            title: "Discover Angola",
            img: "/discover_angola.png",
            technos: "HTML, CSS3, Tailwindcss and React.js/vite.",
            description: "A website project showing Angola as an exceptional destination that offers to businesses and tourists an unique experience",
            live: "https://antho137.github.io/discover-angola/",
            code: "https://github.com/Antho137/discover-angola"
        },
        {
            title: "Analytics Dashboard",
            img: "/analytics_dashboard.png",
            technos: "HTML, CSS3, Tailwindcss, Chart.js, and React.js/vite",
            description: "A single page Dashboard project with basic informations about weekly products sales.",
            live: "https://antho137.github.io/analytics-dashboard/",
            code: "https://github.com/Antho137/analytics-dashboard"
        }
    ];

    return (
        <div className="bg-blue-300 text-center pt-5 pb-10 px-5 md:pt-10 md:pb-15">
            <h2 className="text-3xl text-orange-600 mb-5 md:mb-10">
                Projects
            </h2>
            <div className="mx-auto flex flex-col justify-center items-center 
            md:flex-row md:flex-wrap md:gap-7 lg:gap-15 xl:px-30">
                {projectArr.map((project, index) => {
                    return (
                        <div className="bg-blue-100 p-3 md:w-[360px] rounded-md" key={index}>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='m-3 mx-auto rounded-lg'
                            />
                            <h3 className="mt-3 text-orange-600 text-xl text-center font-medium ">{project.title}</h3>
                            <div className="mt-2 text-center text-md font-bold">
                                <span className="description">
                                    {project.technos}
                                </span>
                            </div>
                            <p className="mt-2 text-center text-sm">
                                {project.description}
                            </p>
                            <div className="my-3 flex justify-center items-center gap-2">
                                <a href={project.live}>
                                    <button 
                                        className="bg-white text-sm text-orange-600 py-1 px-4 rounded-md font-medium border border-orange-600 cursor-pointer"
                                    >
                                        LIVE
                                    </button>
                                </a>
                                <a href={project.code}>
                                    <button 
                                        className="bg-white text-sm text-orange-600 py-1 px-4 rounded-md font-medium border border-orange-600 cursor-pointer"
                                    >
                                        CODE
                                    </button>
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