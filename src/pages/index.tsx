import { TypewriterEffect } from '@/app/components/ui/typewriter-effect';
import { BentoGrid, BentoGridItem } from '@/app/components/ui/bento-grid';
import Image, { StaticImageData } from "next/image";

import CarmaxImage from "../app/components/project-thumbnails/carmax.png";
import HHCImage from "../app/components/project-thumbnails/hhc.png";
import GTImage from "../app/components/project-thumbnails/garden-time.png";
import MSAImage from "../app/components/project-thumbnails/msa-laptop-mobile.png";
import DearMImage from "../app/components/project-thumbnails/dearm.png";
import ShinyImage from "../app/components/project-thumbnails/shinyapp.png";

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

    const projectNames = (image: StaticImageData, altText: string) => {
        return (
            <Image 
                src={image} 
                alt={altText} 
                className="w-max place-self-center my-14" 
            />
        );
    }

    const works = [
        {
            title: "HerHeartCo Mobile Application",
            date: "2024",
            description: "Mobile & Design",
            header: projectNames(HHCImage, "HerHeartCo Prototype"),
            link: "/works/herheartco"
        },
        {
            title: "Garden Time",
            date: "2024",
            description: "Web",
            header: projectNames(GTImage, "Garden Time Prototype"),
            link: "/works/garden-time"
        },
        {
            title: "Muslim Student Association",
            date: "2023",
            description: "Web",
            header: projectNames(MSAImage, "Muslim Student Association (MSA) Prototype"),
            link: "/works/msa"
        },
        {
            title: "Case Study: Carmax",
            date: "2023",
            description: "Design",
            header: projectNames(CarmaxImage, "Carmax Prototype"),
            link: "/works/carmax"
        },
        {
            title: "Dear.M Journal",
            date: "2023",
            description: "Web",
            header: projectNames(DearMImage, "DearM Prototype"),
            link: "/works/dear-m-journal"
        },
        {
            title: "Indicators of Diabetes",
            date: "2022",
            description: "Shiny App & Data Analysis",
            header: projectNames(ShinyImage, "Shiny App Image"),
            link: "/works/indicators-of-diabetes"
        }
    ]
    
    return ( 
        <main id="home" className="flex min-h-screen flex-col place-items-center py-24 font-satoshi">
            <div className="z-10 w-full max-w-7xl text-sm lg:flex">
                <TypewriterEffect words={words} />
            </div>
            <div className="z-10 w-full max-w-7xl text-sm lg:flex">
                <p className="font-bold text-2xl text-davys-grey pb-6">I am a Seattle-based software developer with a passion for designing intuitive and accessible solutions through the implementation of code and human-centered design.</p>
            </div>
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-16 mb-32" />
            <div id="works" className="z-10 w-full max-w-7xl lg:flex">
                <p className="text-5xl text-reseda-green font-bold pb-16">works</p>
            </div>
                <BentoGrid className="projects">
                    {works.map((card, index) => (
                        <BentoGridItem 
                            key={index}
                            header={card.header}
                            title={card.title}
                            date={card.date}
                            description={card.description}
                            link={card.link}
                        />
                    ))}
                </BentoGrid>
            <div className="w-full border border-french-gray dark:border-secondary-dark mt-28 mb-12" />
        </main>
  );
}
