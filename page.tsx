

export const metadata = {
    title: 'Work',
    description: 'See my work',
}

export const work = [
    {
        "title": "UK Government",
        "description": "AWS / DevOps / Data Science"
    },
    {
        "title": "AutoPredict",
        "description": ""
    },
    {
        "title": "CityTrax",
        "description": ""
    },
    {
        "title": "Wrkout",
        "description": ""
    },
    {
        "title": "AIWOD",
        "description": ""
    },
    {
        "title": "1010 Games",
        "description": ""
    }
];


export default function Page() {


    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Work</h1>
            <hr className="h-px bg-black border-0 dark:bg-white"></hr>
            {work.map((project, index) => (
                <div
                    key={index}
                    className="m-0 b-0 relative group hover:text-neutral-800 dark:hover:text-neutral-100"
                >
                    <span className="absolute left-0 transform -translate-x-6 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                        →
                    </span>
                    <h2 className="m-0 b-0 font-light text-xl tracking-tighter group-hover:translate-x-4 transition-transform duration-300 ease-in-out">
                        {project.title}
                    </h2>
                    <p className="font-light text-xs tracking-tighter">
                        {project.description}
                    </p>
                    {/* <hr className="h-px bg-black border-0 dark:bg-white"></hr> */}
                </div>
            ))}
        </section>
    )
}
