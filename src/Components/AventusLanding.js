
import React, { useEffect, useRef } from 'react';

/**
 * Aventus 3.0 Landing Page Animation as a React Component
 * With colors matched to the reference design (black background and bright green)
 */
const AventusLanding = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    // Initialize everything when component mounts
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
    
    // Initialize the scene
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
    
    // Create a flash at random position
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
    
    // Animation function
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
      
      // Animate text
      const title = document.getElementById('title');
      const subtitle = document.getElementById('subtitle');
      
      if (title && subtitle) {
        const time = Date.now();
        title.style.textShadow = `0 0 ${10 + Math.sin(time * 0.001) * 5}px rgba(0, 255, 60, ${0.7 + Math.sin(time * 0.002) * 0.3})`; // Neon green glow
        subtitle.style.opacity = 0.7 + Math.sin(time * 0.003) * 0.3;
      }
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    initScene();
    animate();
    setTimeout(createFlash, 1000);
    
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
      
      <div className="content">
        <h1 id="title">AVENTUS <span className="title-green">3.0</span></h1>
        <div id="subtitle" className="coming-soon">COMING SOON</div>
      </div>
    </div>
  );
};

/**
 * Styles for the Aventus Landing component
 */
const AventusStyles = () => {
  return (
    <style jsx>{`
      .aventus-container {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #000000; /* Pure black background */
        color: white;
      }
      
      .background-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
      
      .content {
        z-index: 2;
        text-align: center;
        position: relative;
      }
      
      #title {
        font-size: 4rem;
        letter-spacing: 3px;
        margin-bottom: 1rem;
        color: #FFFFFF; /* White color for AVENTUS */
        text-shadow: 0 0 10px rgba(0, 255, 60, 0.8); /* Neon green glow */
      }
      
      .title-green {
        color: #00FF3C; /* Bright neon green for 3.0 */
      }
      
      .coming-soon {
        font-size: 1.8rem;
        color: #00FF3C; /* Bright neon green */
        letter-spacing: 2px;
        text-shadow: 0 0 8px rgba(0, 255, 60, 0.5); /* Neon green glow */
      }
      
      @media (max-width: 768px) {
        #title {
          font-size: 3rem;
        }
        
        .coming-soon {
          font-size: 1.4rem;
        }
      }
    `}</style>
  );
};

/**
 * Aventus3Landing component that includes both the animation and styles
 */
const Aventus3Landing = () => {
  return (
    <>
      <AventusStyles />
      <AventusLanding />
    </>
  );
};

export default Aventus3Landing;