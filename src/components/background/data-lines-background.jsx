import React, { useRef, useEffect } from 'react';
import { palette } from '../../theme';

/**
 * Animated "data / code lines" background.
 * A field of drifting nodes connected by lines, with small packets of light
 * traveling along the connections — evoking data streams / a network graph.
 * Sits fixed behind all content, pointer-events disabled, and blends into the
 * dark background. Respects prefers-reduced-motion and scales density to screen.
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
    let packets = [];
    let mouse = { x: -9999, y: -9999 };
    let rafId;

    const accentRGB = '52, 211, 153'; // palette.accent

    const config = () => {
      const area = width * height;
      // density tuned for performance; fewer nodes on small screens
      const target = Math.min(110, Math.max(28, Math.round(area / 16000)));
      const connectDist = width < 700 ? 130 : 165;
      return { target, connectDist };
    };

    const makeNode = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.6,
    });

    const init = () => {
      const { target } = config();
      nodes = Array.from({ length: target }, makeNode);
      packets = [];
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

    const spawnPacket = (connectDist) => {
      // pick a node and a nearby node to travel between
      if (nodes.length < 2) return;
      const a = nodes[(Math.random() * nodes.length) | 0];
      let best = null;
      let bestD = connectDist;
      for (let i = 0; i < nodes.length; i++) {
        const b = nodes[i];
        if (b === a) continue;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < bestD && Math.random() > 0.6) {
          bestD = d;
          best = b;
          break;
        }
      }
      if (best) {
        packets.push({ a, b: best, t: 0, speed: 0.006 + Math.random() * 0.01 });
      }
    };

    const draw = () => {
      const { connectDist } = config();
      ctx.clearRect(0, 0, width, height);

      // update + draw connections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // gentle wrap
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        // subtle mouse repulsion
        const mdx = n.x - mouse.x;
        const mdy = n.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 120 && md > 0.01) {
          const f = (120 - md) / 120 * 0.6;
          n.x += (mdx / md) * f;
          n.y += (mdy / md) * f;
        }
      }

      // lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.5;
            ctx.strokeStyle = `rgba(${accentRGB}, ${alpha * 0.5})`;
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
        ctx.fillStyle = `rgba(${accentRGB}, 0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // packets traveling along connections
      if (!prefersReduced && Math.random() < 0.08 && packets.length < 26) {
        spawnPacket(connectDist);
      }
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) {
          packets.splice(i, 1);
          continue;
        }
        const px = p.a.x + (p.b.x - p.a.x) * p.t;
        const py = p.a.y + (p.b.y - p.a.y) * p.t;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 6);
        glow.addColorStop(0, `rgba(${accentRGB}, 0.9)`);
        glow.addColorStop(1, `rgba(${accentRGB}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#d8fff0';
        ctx.beginPath();
        ctx.arc(px, py, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
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

    if (prefersReduced) {
      draw(); // single frame; rAF still loops but motion is minimal
    } else {
      rafId = requestAnimationFrame(draw);
    }

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
        background: `radial-gradient(1200px 800px at 75% 12%, rgba(24, 94, 68, 0.22), transparent 60%),
                     radial-gradient(900px 700px at 12% 88%, rgba(52, 211, 153, 0.10), transparent 55%),
                     linear-gradient(160deg, #0a1119 0%, ${palette.bg} 55%, #060a0e 100%)`,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
      {/* subtle vignette to keep text readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(4, 7, 10, 0.55) 100%)',
        }}
      />
    </div>
  );
};

export default DataLinesBackground;
