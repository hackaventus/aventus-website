

import React, { useEffect, useRef, useState } from 'react';
import './css/AventusStyles.css'
/**
 * Enhanced Text Animations for Aventus 3.0 Landing Page
 * This component adds advanced animations to the existing landing page
 */

const EnhancedAventusLanding = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [textLoaded, setTextLoaded] = useState(false);
  
  useEffect(() => {
    // All the original canvas animation code remains the same
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Animation elements
    const particles = [];
    const polygons = [];
    const lines = [];
    const flashes = [];
    
    // Generate a bright neon green color (from reference)
    const getNeonGreenColor = (opacity = 1) => {
      return `rgba(0, 255, 60, ${opacity})`; // Bright neon green from reference
    };
    
    // Generate a teal accent color (from reference)
    const getTealAccentColor = (opacity = 1) => {
      return `rgba(0, 230, 220, ${opacity})`; // Teal accent from reference
    };
    
    // Initialize the scene (original code)
    const initScene = () => {
      // Create particles
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1,
          angle: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      
      // Create polygons
      for (let i = 0; i < 10; i++) {
        polygons.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 150 + 50,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.001,
          moveSpeed: Math.random() * 0.2 + 0.1,
          moveAngle: Math.random() * Math.PI * 2,
          color: Math.random() > 0.3 ? getNeonGreenColor(Math.random() * 0.2 + 0.1) : getTealAccentColor(Math.random() * 0.2 + 0.1),
          points: 6
        });
      }
      
      // Create lines
      for (let i = 0; i < 15; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 200 + 100,
          angle: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.2 + 0.1,
          pulseSpeed: Math.random() * 0.01 + 0.005,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };
    
    // Create a flash at random position (original code)
    const createFlash = () => {
      flashes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 50 + 50,
        opacity: 0.7,
        fadeSpeed: 0.01,
        color: Math.random() > 0.7 ? getNeonGreenColor(1) : getTealAccentColor(1)
      });
      
      // Schedule next flash
      setTimeout(createFlash, Math.random() * 3000 + 1000);
    };
    
    // Animation function (original code)
    const animate = () => {
      // Clear canvas with slight trail effect for particles
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Black background with slight opacity for trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update polygons
      polygons.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        
        ctx.beginPath();
        for (let i = 0; i < p.points; i++) {
          const angle = (i / p.points) * Math.PI * 2;
          const x = Math.cos(angle) * p.size / 2;
          const y = Math.sin(angle) * p.size / 2;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
        
        // Update polygon position
        p.x += Math.cos(p.moveAngle) * p.moveSpeed;
        p.y += Math.sin(p.moveAngle) * p.moveSpeed;
        p.rotation += p.rotationSpeed;
        
        // Wrap around edges
        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = canvas.height + p.size;
        if (p.y > canvas.height + p.size) p.y = -p.size;
      });
      
      // Draw and update lines
      lines.forEach(l => {
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.angle);
        
        const pulseOpacity = Math.sin(Date.now() * l.pulseSpeed + l.pulsePhase) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.moveTo(-l.length / 2, 0);
        ctx.lineTo(l.length / 2, 0);
        
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(0, 255, 60, ${l.opacity * pulseOpacity})`; // Neon green lines
        ctx.stroke();
        ctx.restore();
        
        // Move lines slowly
        l.x += Math.cos(l.angle + Math.PI/2) * 0.1;
        l.y += Math.sin(l.angle + Math.PI/2) * 0.1;
        
        // Wrap around edges
        if (l.x < -l.length) l.x = canvas.width + l.length;
        if (l.x > canvas.width + l.length) l.x = -l.length;
        if (l.y < -l.length) l.y = canvas.height + l.length;
        if (l.y > canvas.height + l.length) l.y = -l.length;
      });
      
      // Draw and update particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.7 ? getTealAccentColor(p.opacity) : getNeonGreenColor(p.opacity);
        ctx.fill();
        
        // Update particle position
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      
      // Draw and update flashes
      for (let i = flashes.length - 1; i >= 0; i--) {
        const f = flashes[i];
        const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size);
        gradient.addColorStop(0, `rgba(0, 255, 60, ${f.opacity})`); // Neon green center
        gradient.addColorStop(1, 'rgba(0, 255, 60, 0)'); // Fade to transparent
        
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Update flash opacity
        f.opacity -= f.fadeSpeed;
        
        // Remove faded flashes
        if (f.opacity <= 0) {
          flashes.splice(i, 1);
        }
      }
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    initScene();
    animate();
    setTimeout(createFlash, 1000);
    
    // Show text elements after canvas is initialized
    setTimeout(() => {
      setTextLoaded(true);
    }, 500);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <div className="aventus-container">
      <canvas 
        ref={canvasRef} 
        className="background-canvas" 
      />
      
      <div className={`content ${textLoaded ? 'visible' : ''}`}>
        {/* Split AVENTUS into individual letters for letter-by-letter animation */}
        <h1 id="title" className="title-animate">
          <span className="letra">A</span>
          <span className="letra">V</span>
          <span className="letra">E</span>
          <span className="letra">N</span>
          <span className="letra">T</span>
          <span className="letra">U</span>
          <span className="letra">S</span>
          <span className="title-space"> </span>
          <span className="title-green letra">3</span>
          <span className="title-green letra">.</span>
          <span className="title-green letra">0</span>
        </h1>
        <br></br>
        
        {/* Split COMING SOON into individual characters */}
        <div id="subtitle" className="coming-soon">
          <span className="letra-sub">C</span>
          <span className="letra-sub">O</span>
          <span className="letra-sub">M</span>
          <span className="letra-sub">I</span>
          <span className="letra-sub">N</span>
          <span className="letra-sub">G</span>
          <span className="letra-sub-space"> </span>
          <span className="letra-sub">S</span>
          <span className="letra-sub">O</span>
          <span className="letra-sub">O</span>
          <span className="letra-sub">N</span>
        </div>
        
        {/* Scanning line effect */}
        <div className="scan-line"></div>
        
        {/* Digital glitch overlays */}
        <div className="glitch-overlay"></div>
        
        {/* Futuristic data blocks */}
        <div className="data-block left"></div>
        <div className="data-block right"></div>
      </div>
    </div>
  );
};

export default EnhancedAventusLanding;