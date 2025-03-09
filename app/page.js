"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Arulselvan M | Blockchain & Web3 Developer</title>
        <meta name="description" content="Portfolio of Arulselvan M - Blockchain & Web3 Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background with Particles */}
      <div id="particles-js" className="fixed inset-0 z-0"></div>

      {/* Cursor Effect */}
      <div
        className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 z-0 pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Navbar */}
      <nav className="z-10 relative backdrop-blur-md bg-opacity-20 bg-black border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="text-xl font-bold gradient-text">Arulselvan M</span>
            </Link>
            <div className="flex space-x-6">
              <Link href="/about"><span className="nav-link">About</span></Link>
              <Link href="/projects"><span className="nav-link">Projects</span></Link>
              <Link href="/skills"><span className="nav-link">Skills</span></Link>
              <Link href="/certifications"><span className="nav-link">Certifications</span></Link>
              <Link href="/contact"><span className="nav-link">Contact</span></Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 z-10 relative min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold mb-4">
              <span className="block gradient-text">Blockchain & Web3</span>
              <span>Developer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Building decentralized applications and smart contracts that power the future of the web
            </p>
            <div className="flex space-x-4 mb-12">
              <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="social-icon">
                <FaGithub size={24} />
              </motion.a>
              <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="social-icon">
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a href="mailto:arulselvan.m2022csbs@sece.ac.in" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="social-icon">
                <FaEnvelope size={24} />
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary">
                  View Projects
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-secondary">
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block justify-self-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/profile.png"
                alt="Arulselvan M"
                className="rounded-full w-full h-full object-cover border-4 border-purple-600 p-1 bg-gray-900 relative z-10"
              />
              
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-black bg-opacity-30 backdrop-blur-md py-12 border-t border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Certifications', value: '8' },
              { label: 'Hackathons', value: '6' },
              { label: 'Languages', value: '5' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text">Featured Project</h2>
          <p className="text-gray-400">Check out my latest blockchain innovation</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
          className="bg-gray-900 bg-opacity-60 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 shadow-2xl"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img src="/nft-crowdfunding.png" alt="NFT Based Crowdfunding dApp" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-blue-900 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">Ethereum</span>
                <span className="bg-purple-900 text-purple-300 text-xs font-medium ml-2 px-3 py-1 rounded-full">NFT</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">NFT Based Crowdfunding dApp</h3>
              <p className="text-gray-300 mb-6">
                A cutting-edge platform that transforms fundraising by seamlessly combining the power of ERC-20 Tokens and Non-Fungible Tokens (NFTs). Creators can interact with fans worldwide in a transparent and profitable way.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Solidity', 'React', 'Node.js', 'Hardhat', 'Sepolia Testnet', 'Pinata Cloud'].map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-small-primary">
                  View Demo
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-small-secondary">
                  GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="text-center mt-10">
          <Link href="/projects">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-outline">
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 backdrop-blur-md border-t border-gray-800 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold gradient-text">Arulselvan M</span>
              <p className="text-gray-400 mt-2">Blockchain & Web3 Developer</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:arulselvan.m2022csbs@sece.ac.in" className="text-gray-400 hover:text-white transition">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Arulselvan M. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Particle Initialization */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            particlesJS("particles-js", {
              "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
                "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": { "enable": true, "mode": "repulse" },
                  "onclick": { "enable": true, "mode": "push" },
                  "resize": true
                },
                "modes": {
                  "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
                  "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                  "repulse": { "distance": 200, "duration": 0.4 },
                  "push": { "particles_nb": 4 },
                  "remove": { "particles_nb": 2 }
                }
              },
              "retina_detect": true
            });
          `,
        }}
      />

      <style jsx global>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
        .gradient-text { background: linear-gradient(to right, #38bdf8, #818cf8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .nav-link { position: relative; padding: 0.5rem; cursor: pointer; transition: all 0.3s; }
        .nav-link:after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 0; background: linear-gradient(to right, #38bdf8, #818cf8); transition: width 0.3s; }
        .nav-link:hover:after { width: 100%; }
        .social-icon { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(5px); transition: all 0.3s; }
        .social-icon:hover { background: rgba(255, 255, 255, 0.2); }
        .btn-primary { background: linear-gradient(to right, #3b82f6, #8b5cf6); color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 500; cursor: pointer; transition: all 0.3s; border: none; outline: none; box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); }
        .btn-secondary { background: transparent; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 500; cursor: pointer; transition: all 0.3s; border: 1px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(5px); }
        .btn-secondary:hover { border-color: rgba(255, 255, 255, 0.4); background: rgba(255, 255, 255, 0.05); }
        .btn-outline { background: transparent; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; font-weight: 500; cursor: pointer; transition: all 0.3s; border: 1px solid rgba(99, 102, 241, 0.6); }
        .btn-outline:hover { background: rgba(99, 102, 241, 0.1); }
        .btn-small-primary { background: linear-gradient(to right, #3b82f6, #8b5cf6); color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.3s; border: none; outline: none; display: inline-block; }
        .btn-small-secondary { background: transparent; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; transition: all 0.3s; border: 1px solid rgba(255, 255, 255, 0.2); backdrop-filter: blur(5px); display: inline-block; }
      `}</style>
    </div>
  );
}