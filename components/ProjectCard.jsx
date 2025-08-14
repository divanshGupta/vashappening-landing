import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link key={project.id} href={project.link}>
    <article className="space-y-4">
        <div className="h-72 bg-gray-100 rounded overflow-hidden">
        <img
            src={project.thumbnail}
            alt="project"
            className="w-full h-full object-cover"
        />
        </div>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-500">{project.description}</p>
    </article>
    </Link>
  );
}
