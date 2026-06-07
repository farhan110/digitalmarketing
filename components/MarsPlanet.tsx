export function MarsPlanet({
  size = 280,
  showMetrics = true,
  showOrbits = true,
}: {
  size?: number
  showMetrics?: boolean
  showOrbits?: boolean
}) {
  return (
    <div
      className="planet-stage"
      style={{ width: size + 100, height: size + 100, position: 'relative' }}
    >
      {showOrbits && (
        <>
          <div className="orbit" style={{ width: '130%', height: '130%', animationDelay: '-4s', animationDuration: '11s', borderColor: 'rgba(124,58,237,.06)' }}>
            <span className="orbit-dot" style={{ width: 5, height: 5, background: '#06b6d4', boxShadow: '0 0 8px #06b6d4', top: '50%', right: -2.5, animation: 'orbitMove3 26s linear infinite' }} />
          </div>
          <div className="orbit" style={{ width: '116%', height: '116%', animationDelay: '-2s', animationDuration: '9s', borderColor: 'rgba(247,37,133,.08)' }}>
            <span className="orbit-dot" style={{ width: 6, height: 6, background: '#f72585', boxShadow: '0 0 8px #f72585', bottom: -3, left: '50%', animation: 'orbitMove2 22s linear infinite' }} />
          </div>
          <div className="orbit" style={{ width: '106%', height: '106%' }}>
            <span className="orbit-dot" style={{ width: 8, height: 8, background: '#ff6b35', boxShadow: '0 0 10px #ff6b35', top: -4, left: '50%', animation: 'orbitMove1 18s linear infinite' }} />
          </div>
        </>
      )}

      <div className="planet-wrap" style={{ width: size, height: size }}>
        <div className="planet-atmo" />
        <div className="planet-shell">
          <div className="planet-surface" />
          <div className="planet-light" />
        </div>
      </div>

      {showMetrics && (
        <>
          <div className="metric-pill" style={{ top: '8%', right: '-12%', animationDelay: '0s' }}>
            <span className="w-2 h-2 rounded-full bg-mars-gn" style={{ boxShadow: '0 0 8px #10b981' }} />
            <div>
              <div className="text-[11px] font-semibold grad-text3 leading-none">+847%</div>
              <div className="text-[8.5px] text-mars-mu mt-0.5 tracking-wider uppercase">Growth</div>
            </div>
          </div>
          <div className="metric-pill" style={{ bottom: '18%', left: '-18%', animationDelay: '1.5s' }}>
            <span className="w-2 h-2 rounded-full bg-mars-or" style={{ boxShadow: '0 0 8px #ff6b35' }} />
            <div>
              <div className="text-[11px] font-semibold grad-text leading-none">6.8X ROAS</div>
              <div className="text-[8.5px] text-mars-mu mt-0.5 tracking-wider uppercase">Avg. ROI</div>
            </div>
          </div>
          <div className="metric-pill" style={{ bottom: '0%', right: '-6%', animationDelay: '3s' }}>
            <span className="w-2 h-2 rounded-full bg-mars-cy" style={{ boxShadow: '0 0 8px #06b6d4' }} />
            <div>
              <div className="text-[11px] font-semibold grad-text2 leading-none">150+ Clients</div>
              <div className="text-[8.5px] text-mars-mu mt-0.5 tracking-wider uppercase">Served</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Smaller version for inner pages — just planet + orbits, no metrics
export function MarsPlanetSmall({ size = 180 }: { size?: number }) {
  return (
    <div className="planet-stage" style={{ width: size + 60, height: size + 60 }}>
      <div className="orbit" style={{ width: '116%', height: '116%', animationDelay: '-2s' }} />
      <div className="orbit" style={{ width: '106%', height: '106%' }} />
      <div className="planet-wrap" style={{ width: size, height: size }}>
        <div className="planet-atmo" />
        <div className="planet-shell">
          <div className="planet-surface" />
          <div className="planet-light" />
        </div>
      </div>
    </div>
  )
}
