import { ArrowRight, ExternalLink, Github } from "lucide-react";
import netfliximg from '../assets/images/netflix-clone.png'
import jeweryimg from '../assets/images/jewellery.png'
import mypro from '../assets/images/mypro.jpg'
import portfolio from '../assets/images/basic-portfolio.png'


const projects = [
  {
    id: 1,
    title: "Netflix Clone",
    description: "build a Netflix clone using HTML,CSS and boostrap",
    image: netfliximg,
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://netfliix-clone99.netlify.app/",
    githubUrl: "https://github.com/dharmikrathod99/NEtflix-clone",
  },
  {
    id: 2,
    title: "Basic Portfolio",
    description:
      "build a basic portfolio site  using HTML,CSS and boostrap",
    image: portfolio,
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://dharmikrathodport99.netlify.app/",
    githubUrl: "https://github.com/dharmikrathod99/port/tree/main/portfolio_web",
  },
  {
    id: 3,
    title: "jewellery shop basic website",
    description:
      "it's my frist multi page website.",
    image: jeweryimg,
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "https://6877eb70b0ab0b84be6d546e--remarkable-panda-4f27f5.netlify.app/",
    githubUrl: "https://github.com/dharmikrathod99/jws_wesite/tree/main/jws",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
