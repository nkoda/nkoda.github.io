import React, { useRef, useEffect } from 'react';
import { palette } from '../../theme';

/**
 * "Dark Blueprint" background — a sparse, slow node lattice in copper/champagne
 * over a faint blueprint grid, on a warm-charcoal gradient. Reads as precise
 * engineering rather than a hacker network: few nodes, gentle motion, warm tones.
 * Fixed behind all content, pointer-events disabled, respects reduced motion.
 */
const DataLinesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let mouse = { x: -9999, y: -9999 };
    let rafId;

    const copper = '200, 130, 90'; // palette.accent
    const gold = '217, 179, 108'; // palette.accentGold

    const config = () => {
      const area = width * height;
      // deliberately sparse — keeps it calm, not a dense web
      const target = Math.min(34, Math.max(12, Math.round(area / 52000)));
      const connectDist = width < 700 ? 150 : 190;
      return { target, connectDist };
    };

    const makeNode = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      r: Math.random() * 1.3 + 0.7,
      gold: Math.random() > 0.6,
    });

    const init = () => {
      const { target } = config();
      nodes = Array.from({ length: target }, makeNode);
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const draw = () => {
      const { connectDist } = config();
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 130 && md > 0.01) {
          const f = ((130 - md) / 130) * 0.5;
          n.x += (mdx / md) * f;
          n.y += (mdy / md) * f;
        }
      }

      // connecting lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.3;
            ctx.strokeStyle = `rgba(${copper}, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const c = n.gold ? gold : copper;
        ctx.fillStyle = `rgba(${c}, 0.75)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReduced) rafId = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: `radial-gradient(130% 130% at 70% 18%, #2A1F22 0%, ${palette.bg} 52%, #120C0E 100%)`,
      }}
    >
      {/* faint blueprint grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(200, 130, 90, 0.05) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(200, 130, 90, 0.05) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      {/* warm vignette keeps text readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 52%, rgba(12, 8, 9, 0.6) 100%)',
        }}
      />
    </div>
  );
};

export default DataLinesBackground;
