'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Note: Replace image placeholders with your own images or next/image for optimization.
export default function LandingPage() {

    const ques = [
        {
            id: 1,
            question: 'How much does it cost to develop an app?',
            answer: 'On average, from $45,000 to $130,000. The exact price depends on the design complexity, number of features, and specific project requirements. Learn more about factors influencing the costs in our article. If you want to know the tailored quote for your project, leave your contacts below.',

        }, 
        {
            id: 2,
            question: 'How long does it take to build an app?',
            answer: 'On average, from 3 to 6 months. As with costs, the timeframe depends on the specific project requirements. Fill out the form and share your request with us. We’ll analyze it and provide an estimated cost and timeline.',     
        },
        {
            id: 3,
            question: 'Do you sign NDAs?',
            answer: 'Yes, we do. If needed, we can sign the NDA before the first meeting.',      
        },
        {
            id: 4,
            question: 'Can you work with my in-house team?',
            answer: 'Yes, we can integrate with your in-house team and collaborate on project tasks. In this article, we explain our approach to working with the client team, including the methodologies we use and examples from previous projects.',       
        },
        {
            id: 5,
            question: 'How to ensure your code is high-quality?',
            answer: 'You can request an external audit of our code. We’ll give access to the code and provide project documentation for your external expert.',       
        },
        {
            id: 6,
            question: 'What do I need to do before starting development?',
            answer:'After a kick-off meeting, we’ll provide you with a detailed estimate. It will include expenditures, the project timeline, a team members list, and the tech stack. We’ll walk you through every detail and answer your questions.',       
        },
    ];
  return (
    <div className="min-h-screen font-sans text-gray-900" style={{ fontFamily: 'Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial' }}>
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-6">
              <a href="#" className="text-xl font-semibold flex items-center gap-2">
                <span className="text-2xl">//</span>
                <span>Vashappening Media</span>
              </a>

              {/* Nav Links - hidden on small screens */}
              <nav className="hidden md:flex gap-8 text-sm">
                <a className="hover:underline" href="#projects">Projects</a>
                <a className="hover:underline" href="#technologies">Technologies</a>
                <a className="hover:underline" href="#services">Services</a>
                <a className="hover:underline" href="#team">Development Team</a>
                <a className="hover:underline" href="#blog">Blog</a>
                <a className="hover:underline" href="#about">About</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <a href='mailto:aainashaw556@gmail.com' className="hidden md:flex items-center gap-3 text-sm py-2 px-4 rounded-full border border-gray-200">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 11-3.8-11.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Request a quote
              </a>

              {/* Mobile menu button (simple) */}
              <button className="md:hidden p-2">
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none"><rect width="22" height="2" rx="1" fill="currentColor"/><rect y="6" width="22" height="2" rx="1" fill="currentColor"/><rect y="12" width="22" height="2" rx="1" fill="currentColor"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Mobile & web app
              <br />
              development
            </motion.h1>

            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              We help established businesses and startups automate processes, increase customer loyalty and quickly bring new products to market.
            </p>

            <div className="mt-10">
              <a href="tel:8127388337" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-lg shadow-sm">Contact us</a>
            </div>
          </div>
        </section>

        {/* Feature visual - purple band as in screenshot */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-gradient-to-r from-purple-300 to-purple-200 rounded-md p-12">
              {/* Replace this box with a mockup or image */}
              <div className="max-w-3xl mx-auto">
                <video autoPlay muted loop playsInline>
                    <source src="/video-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>

                {/* <div className="h-80  bg-center bg-cover rounded-2xl shadow-lg"></div> */}
                {/* //bg-[url('/mockup-placeholder.png')] */}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

              {/* Add more cards as needed */}
            </div>

            <div className="mt-12 text-center">
              <a href="#" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full">See all projects</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-8">About us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-gray-700 leading-relaxed">We are a software development company that builds web and mobile products for startups and enterprises. Our team includes designers, product managers and engineers focused on shipping quality product fast.</p>
              </div>
              <div>
                <div className="h-80 bg-gray-100 rounded overflow-hidden">
                  <img src="/about.jpeg" alt="about" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-8">Our services</h2>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Analytics</h4>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-gray-100 rounded-full">UI/UX audit</span>
                  <span className="px-6 py-3 bg-gray-100 rounded-full">Discovery phase</span>
                  <span className="px-6 py-3 bg-gray-100 rounded-full">System analysis</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Design</h4>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-gray-100 rounded-full">UI/UX design</span>
                  <span className="px-6 py-3 bg-gray-100 rounded-full">Web design</span>
                  <span className="px-6 py-3 bg-gray-100 rounded-full">Mobile app design</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Development</h4>
                <div className="flex flex-wrap gap-4">
                  <span className="px-6 py-3 bg-gray-100 rounded-full">Mobile App Development</span>
                  <span className="px-6 py-3 bg-gray-100 rounded-full">Web development</span>
                  <span className="px-6 py-3 bg-gray-100 rounded-full">Custom software development</span>
                </div>
              </div>
            </div>

            {/* Technologies row (icons or text) */}
            <div id="technologies" className="mt-12 grid grid-cols-2 md:grid-cols-6 gap-6 text-sm text-gray-500">
              <div className="text-center py-6">Electron</div>
              <div className="text-center py-6">Node.js</div>
              <div className="text-center py-6">JavaScript</div>
              <div className="text-center py-6">React Native</div>
              <div className="text-center py-6">Flutter</div>
              <div className="text-center py-6">PWA</div>
            </div>
          </div>
        </section>

        {/* Team carousel-like section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-8">Need a team for your project?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team Card */}
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Hi! I’m Sarthak, a seasoned team lead who builds robust backend architectures</h3>
                  <p className="text-gray-600">I’ve led development of Infijoy, ERP-School, and WAW. I’m ready to design your project’s architecture with scalability and security in mind.</p>
                </div>
                <div className="mt-6 self-start">
                  <a href="mailto:aainashaw556@gmail.com" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full">Request a quote</a>
                </div>
              </div>

              {/* Duplicate to simulate carousel */}
              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Hi! I’m Rose, a passionate product designer</h3>
                  <p className="text-gray-600">I help teams create intuitive interfaces and delightful user experiences.</p>
                </div>
                <div className="mt-6 self-start">
                  <a href="mailto:aainashaw556@gmail.com" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full">Request a quote</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Hi! I’m Divyansh, senior frontend engineer</h3>
                  <p className="text-gray-600">I implement pixel-perfect responsive UI and help scale frontend architecture.</p>
                </div>
                <div className="mt-6 self-start">
                  <a href="mailto:aainashaw556@gmail.com" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full">Request a quote</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-8">Our blog</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article>
                <div className="h-52 bg-pink-300 rounded overflow-hidden">
                  <img src="/blog-1.png" alt="blog" className="w-full h-full object-cover" />
                </div>
                <h4 className="mt-4">Product Development Life Cycle: Key Stages and Best Practices</h4>
              </article>

              <article>
                <div className="h-52 bg-pink-300 rounded overflow-hidden">
                  <img src="/blog-2.png" alt="blog" className="w-full h-full object-cover" />
                </div>
                <h4 className="mt-4">What Is a UX Audit and How to Conduct It</h4>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold mb-8">FAQ's</h2>

            <div className="space-y-6">
              {ques.map((q) => (
                <details key={q.id} className="border-t py-6">
                  <summary className="cursor-pointer text-lg">{q.question}</summary>
                  <div className="mt-4 text-gray-600">{q.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold mb-8">Need help with your project?</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input className="border-b py-3 placeholder-gray-400 focus:outline-none" placeholder="Name" />
                <input className="border-b py-3 placeholder-gray-400 focus:outline-none" placeholder="Phone number" />
                <input className="border-b py-3 placeholder-gray-400 focus:outline-none" placeholder="E-mail" />
              </div>

              <textarea className="w-full border-b py-6 placeholder-gray-400 focus:outline-none" placeholder="Project details"></textarea>

              <div className="flex justify-end">
                <button type="submit" className="bg-gray-900 text-white px-8 py-4 rounded-full">Next</button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold">// Vashappening Media</h3>
              <p className="mt-4 text-gray-600">Software development company</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-600">
                <li>React Native</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Flutter</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Mobile App Development</li>
                <li>Web Development</li>
                <li>UI/UX design services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="font-medium">+91 8127388337</p>
              <p className="text-gray-600 mt-2">connect@vashappening.com</p>
              <p className="text-gray-600 mt-2">D-Block, IT Colony, Ambalpadi</p>
              <p className="text-gray-600 mt-2">576103, Udupi, Karnataka</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
