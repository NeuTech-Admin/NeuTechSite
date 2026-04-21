import { useEffect, useRef } from 'react'

// ─── Scene constants ──────────────────────────────────────────────────────────

const VB_W = 620
const VB_H = 500
const CX = 310
const CY = 250
const TWO_PI = 2 * Math.PI

// ─── Seeded LCG RNG — runs once at module load for deterministic values ───────


// ─── Orbit definitions ────────────────────────────────────────────────────────
// Each pillar oscillates back-and-forth around its phase angle (±oscAmp rad)
// rather than completing full orbits. oscFreq controls how fast it rocks.

const ORBITS = [
  {
    // Dark — upper-left (phase π puts it above CY → back layer / top of graphic)
    rx: 200, ry: 50,
    tiltDeg: 15,
    phase: Math.PI,
    oscAmp: 0.48,
    oscFreq: 0.24,
    swayFreq: 0.18,
    swayPhase: 1.5,
    pillar: 'dark' as const,
  },
  {
    // Dark — upper-right (mirror of the first, tilt 160° = reflection)
    rx: 200, ry: 50,
    tiltDeg: 145,
    phase: Math.PI,
    oscAmp: 0.45,
    oscFreq: 0.21,
    swayFreq: 0.19,
    swayPhase: 0.8,
    pillar: 'dark' as const,
  },
  {
    // Light — center bottom (phase π/2 puts it below CY → front layer / bottom)
    rx: 300, ry: 70,
    tiltDeg: 60,
    phase: 1.15 * TWO_PI,   // 90° = straight down
    oscAmp: 0.22,
    oscFreq: 0.20,
    swayFreq: 0.20,
    swayPhase: 3,
    pillar: 'light' as const,
  },
]

// Precompute tilt trig so RAF doesn't recompute every frame
const ORBIT_TRIG = ORBITS.map(o => {
  const rad = o.tiltDeg * (Math.PI / 180)
  return { cosT: Math.cos(rad), sinT: Math.sin(rad) }
})

// ─── Pillar geometry constants ────────────────────────────────────────────────

const PILLAR_SCALE = 0.44 * 1.2   // ← adjust multiplier to resize all pillars
const CENTRAL_R = 32           // ← central sphere radius
const PILLAR_TX = -52.6358
const PILLAR_TY = -138.6074

// ─── Pillar shape — flat solid colours + subtle drop shadow ──────────────────

function Pillar({ type }: { type: 'light' | 'dark' }) {
  const fill = type === 'light' ? '#63E2FF' : '#075876'
  const filter = type === 'light' ? 'url(#ntf-shadow-light)' : 'url(#ntf-shadow-dark)'
  const t = `scale(${PILLAR_SCALE}) translate(${PILLAR_TX}, ${PILLAR_TY})`
  return (
    <g transform={t} filter={filter}>
      <circle cx={52.6358} cy={52.6358} r={52.6358} fill={fill} />
      <rect x={31.5815} y={97.376} width={41.2314} height={80.708} fill={fill} />
      <circle cx={52.6358} cy={224.579} r={52.6358} fill={fill} />
    </g>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function NeuTechOrbit({ className }: { className?: string }) {
  const backRefs = useRef<(SVGGElement | null)[]>([null, null, null])
  const frontRefs = useRef<(SVGGElement | null)[]>([null, null, null])
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    function frame(ts: number) {
      if (startRef.current === null) startRef.current = ts
      const t = (ts - startRef.current) / 1000

      ORBITS.forEach((o, i) => {
        const backEl = backRefs.current[i]
        const frontEl = frontRefs.current[i]
        if (!backEl || !frontEl) return

        // Oscillate around the resting phase angle
        const angle = o.phase + o.oscAmp * Math.sin(t * o.oscFreq)
        const localX = o.rx * Math.cos(angle)
        const localY = o.ry * Math.sin(angle)
        const { cosT, sinT } = ORBIT_TRIG[i]

        const x = CX + localX * cosT - localY * sinT
        const y = CY + localX * sinT + localY * cosT

        const sway = Math.sin(t * o.swayFreq + o.swayPhase) * 8
        const tf = `translate(${x.toFixed(2)},${y.toFixed(2)}) rotate(${sway.toFixed(2)})`

        // y < CY → upper (far) half → render BEHIND the central sphere
        if (y < CY) {
          backEl.setAttribute('transform', tf)
          backEl.removeAttribute('display')
          frontEl.setAttribute('display', 'none')
        } else {
          frontEl.setAttribute('transform', tf)
          frontEl.removeAttribute('display')
          backEl.setAttribute('display', 'none')
        }
      })

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
  }, [])

  function ellipsePath(rx: number, ry: number) {
    return (
      `M ${CX - rx},${CY} ` +
      `A ${rx},${ry},0,0,1,${CX + rx},${CY} ` +
      `A ${rx},${ry},0,0,1,${CX - rx},${CY} Z`
    )
  }

  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Drop shadows for each pillar colour */}
          <filter id="ntf-shadow-dark" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#022D3E" floodOpacity="0.55" />
          </filter>
          <filter id="ntf-shadow-light" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="5" stdDeviation="10" floodColor="#0A6080" floodOpacity="0.45" />
          </filter>
          <style>{`
            @keyframes ntf-march { to { stroke-dashoffset: -30; } }
            .ntf-orbit-0 { animation: ntf-march 2.0s linear infinite; }
            .ntf-orbit-1 { animation: ntf-march 2.5s linear infinite; }
            .ntf-orbit-2 { animation: ntf-march 3.2s linear infinite; }
          `}</style>
        </defs>

        {/* Orbit ring strokes — each rotated to its own tilt angle */}
        {ORBITS.map((o, i) => (
          <path
            key={i}
            className={`ntf-orbit-${i}`}
            d={ellipsePath(o.rx, o.ry)}
            transform={`rotate(${o.tiltDeg}, ${CX}, ${CY})`}
            fill="none"
            stroke="#2585BB"
            strokeWidth="2.5"
            strokeDasharray="6 24"
            strokeDashoffset="0"
            strokeLinecap="round"
            opacity="0.45"
          />
        ))}

        {/* ── BACK layer — rendered before central sphere ── */}
        {ORBITS.map((o, i) => (
          <g
            key={`back-${i}`}
            ref={(el) => { backRefs.current[i] = el }}
            display="none"
          >
            <Pillar type={o.pillar} />
          </g>
        ))}

        {/* Central sphere — always at middle z-order */}
        <circle cx={CX} cy={CY} r={CENTRAL_R} fill="#075876" filter="url(#ntf-shadow-dark)" />
        <circle cx={CX - CENTRAL_R * 0.30} cy={CY - CENTRAL_R * 0.30} r={CENTRAL_R * 0.30} fill="white" opacity="0.22" />

        {/* ── FRONT layer — rendered after central sphere ── */}
        {ORBITS.map((o, i) => {
          const { cosT, sinT } = ORBIT_TRIG[i]
          const initLocalX = o.rx * Math.cos(o.phase)
          const initLocalY = o.ry * Math.sin(o.phase)
          const initX = CX + initLocalX * cosT - initLocalY * sinT
          const initY = CY + initLocalX * sinT + initLocalY * cosT
          return (
            <g
              key={`front-${i}`}
              ref={(el) => { frontRefs.current[i] = el }}
              transform={`translate(${initX.toFixed(2)},${initY.toFixed(2)})`}
            >
              <Pillar type={o.pillar} />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
