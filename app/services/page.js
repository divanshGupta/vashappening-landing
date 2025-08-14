import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
    return (
        <div>
            {/* Projects Grid */}
            <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-extrabold mb-10">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Card 1 */}
                {projects.map((project)=>(
                    <ProjectCard key={project.id} project={project} />
                ))}
                </div>
            </div>
            </section>

        </div>
    )
}