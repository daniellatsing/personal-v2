import { TypewriterEffect } from '@/app/components/typewriter-effect';
import { BentoGrid, BentoGridItem } from '@/app/components/bento-grid';
import Image from "next/image";

export default function Home() {
    const words = [
        {
            text: "hi",
            className: "font-bold font-satoshi text-5xl text-night pb-10 mt-2"
        },
        {
            text: "there,",
            className: "font-bold font-satoshi text-5xl text-night pb-10 mt-2"
        },
        {
            text: "i'm",
            className: "font-bold font-satoshi text-5xl text-night pb-10 mt-2"
        },
        {
            text: "daniella",
            className: "font-bold font-satoshi text-5xl text-reseda-green pb-10 mt-2"
        }
    ]

    const projectNames = (image: string, altText: string) => {
        return (
            <Image 
                src={image} 
                alt={altText} 
                width={350}
                height={100}
                className="w-max place-self-center my-14"
                priority={false}
            />
        );
    }

    const works = [
        {
            title: "HerHeartCo",
            date: "2024",
            description: "Mobile & Design",
            header: projectNames("/project-thumbnails/hhc.png", "HerHeartCo Prototype"),
            link: "/works/herheartco"
        },
        {
            title: "Garden Time",
            date: "2024",
            description: "Web",
            header: projectNames("/project-thumbnails/garden-time.png", "Garden Time Prototype"),
            link: "/works/garden-time"
        },
        {
            title: "Muslim Student Association",
            date: "2023",
            description: "Web",
            header: projectNames("/project-thumbnails/msa-laptop-mobile.png", "Muslim Student Association (MSA) Prototype"),
            link: "/works/msa"
        },
        {
            title: "MotorVerse",
            date: "2023",
            description: "Design",
            header: projectNames("/project-thumbnails/carmax.png", "Carmax Prototype"),
            link: "/works/motorverse"
        },
        {
            title: "Dear.M Journal",
            date: "2023",
            description: "Web",
            header: projectNames("/project-thumbnails/dearm.png", "DearM Prototype"),
            link: "/works/dear-m-journal"
        },
        // {
        //     title: "Indicators of Diabetes",
        //     date: "2022",
        //     description: "Shiny App & Data Analysis",
        //     header: projectNames("/project-thumbnails/shinyapp.png", "Shiny App Image"),
        //     link: "/works/indicators-of-diabetes"
        // }
    ]

    const home_blurb = (
        <p className="font-bold text-2xl text-davys-grey pb-6">
            I am a Seattle-based software developer with a passion 
            for designing intuitive and accessible solutions through 
            the implementation of code and human-centered design.
        </p>
    )
    
    return ( 
        <main id="home" className="flex min-h-screen flex-col place-items-center py-20 font-satoshi">
            <div className="z-10 w-full max-w-6xl text-sm lg:flex">
                <TypewriterEffect words={words} />
            </div>
            <div className="z-10 w-full max-w-6xl text-sm lg:flex">
                {[home_blurb]}
            </div>
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-16 mb-32" />
            <div id="works" className="z-10 w-full max-w-6xl lg:flex">
                <p className="text-5xl text-reseda-green font-bold pb-16">works</p>
            </div>
                <BentoGrid className="projects">
                    {works.map((card, i) => (
                        <BentoGridItem 
                            key={i}
                            header={card.header}
                            title={card.title}
                            date={card.date}
                            description={card.description}
                            link={card.link}
                        />
                    ))}
                </BentoGrid>
        </main>
  );
}
