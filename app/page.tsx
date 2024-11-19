"use client"
import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink  } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-black shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Laiba Muskan</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover:text-gray-600">About</a>
              <a href="#Skills" className="text-white hover:text-gray-600">Skills</a>
              <a href="#contact" className="text-white hover:text-gray-600">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-white hover:text-gray-600">About</a>
              <a href="#projects" className="block px-3 py-2 text-white hover:text-gray-600">Skills</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-gray-600">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm Laiba Muskan</span>
              <span className="block text-white">Full Stack Developer</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              I build exceptional websites, applications, and everything in between.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-white leading-relaxed">
                I'm an IT professional focused on delivering efficient and innovative tech solutions. Passionate about continuous learning, I'm currently expanding my skills in Next.js and exploring new challenges. My goal is to drive impactful projects that advance digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="Skills" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "NextJS", "TypeScript", "Node.js", "Javascript", "TailwindCSS"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-950 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-white text-center max-w-2xl">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/laibamuskan" className="text-white hover:text-gray-900">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/laiba-muskan-3bb7242bb/" className="text-white hover:text-gray-900">
                <Linkedin size={24} />
              </a>
                <a href="mailto:laibamuskan4352@gmail.com" className="text-white hover:text-gray-900">
                <Mail size={24} />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-white">
            <p>© 2024 Laiba Muskan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;