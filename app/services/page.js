import Link from 'next/link'

export default function Projects() {
    return (
        <div>
            {/* Projects Grid */}
            <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-5xl font-extrabold mb-10">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Card 1 */}
                <Link href='https://demo.vercel.store/'>
                    <article className="space-y-4">
                        <div className="h-64 bg-gray-100 rounded overflow-hidden">
                        {/* Replace with <Image/> optimized component */}
                        <img src="/project-5.png" alt="project" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-semibold">Acme Store - Modern Ecommerce</h3>
                        <p className="text-gray-500">Blazingly Fast Ecom Store</p>
                    </article>
                </Link>
                
                {/* Card 1 */}
                <Link href='http://design-world.vercel.app'>
                    <article className="space-y-4">
                        <div className="h-64 bg-gray-100 rounded overflow-hidden">
                        {/* Replace with <Image/> optimized component */}
                        <img src="/project-1.png" alt="project" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-semibold">Design World — An Ecommerce Brand</h3>
                        <p className="text-gray-500">Design World is merchandise brand, curated by their own customers.</p>
                    </article>
                </Link>

                {/* Card 2 */}
                <Link href='http://jk-adventure.vercel.app'>
                    <article className="space-y-4">
                        <div className="h-64 bg-gray-100 rounded overflow-hidden">
                        <img src="/project-2.png" alt="project" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-semibold">JK Adventure - A Travel Agency</h3>
                        <p className="text-gray-500">Travel, Adventure</p>
                    </article>
                </Link>

                {/* Card 2 */}
                <Link href='http://pandeytuitions.vercel.app'>
                    <article className="space-y-4">
                        <div className="h-64 bg-gray-100 rounded overflow-hidden">
                        <img src="/project-3.png" alt="project" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-semibold">Pandey Tuitions - Educational Organisation
                        </h3>
                        <p className="text-gray-500">Edtech - Education</p>
                    </article>
                </Link>

                {/* Card 2 */}
                <Link href='http://wevstack.vercel.app'>
                    <article className="space-y-4">
                        <div className="h-64 bg-gray-100 rounded overflow-hidden">
                        <img src="/project-4.png" alt="project" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-semibold">Wevstack - Tools Organiser</h3>
                        <p className="text-gray-500">Tools, Saas, Front End</p>
                    </article>
                </Link>

                {/* Add more cards as needed */}
                </div>
            </div>
            </section>

        </div>
    )
}