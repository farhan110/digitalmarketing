export function MarsPlanet({ size=280, showMetrics=true }: { size?:number; showMetrics?:boolean }) {
  return (
    <div className="planet-stage" style={{ width:size+100, height:size+100 }}>
      <div className="orbit" style={{ width:'130%',height:'130%',animationDelay:'-4s',animationDuration:'11s',borderColor:'rgba(124,58,237,.06)' }} />
      <div className="orbit" style={{ width:'116%',height:'116%',animationDelay:'-2s',animationDuration:'9s',borderColor:'rgba(247,37,133,.08)' }} />
      <div className="orbit" style={{ width:'106%',height:'106%' }} />
      <div className="planet-wrap" style={{ width:size,height:size }}>
        <div className="planet-atmo" />
        <div className="planet-shell"><div className="planet-surface" /><div className="planet-light" /></div>
      </div>
      {showMetrics && (<>
        <div className="metric-pill hidden md:flex" style={{ top:'8%',right:'-12%' }}>
          <span className="w-2 h-2 rounded-full bg-m-gn" style={{ boxShadow:'0 0 8px #10b981' }} />
          <div><div className="text-[11px] font-semibold grad3 leading-none">+847%</div><div className="text-[8.5px] text-m-mu mt-0.5 tracking-wider uppercase">Growth</div></div>
        </div>
        <div className="metric-pill hidden md:flex" style={{ bottom:'18%',left:'-18%',animationDelay:'1.5s' }}>
          <span className="w-2 h-2 rounded-full bg-m-or" style={{ boxShadow:'0 0 8px #ff6b35' }} />
          <div><div className="text-[11px] font-semibold grad leading-none">6.8X ROAS</div><div className="text-[8.5px] text-m-mu mt-0.5 tracking-wider uppercase">Avg. ROI</div></div>
        </div>
        <div className="metric-pill hidden md:flex" style={{ bottom:'0%',right:'-6%',animationDelay:'3s' }}>
          <span className="w-2 h-2 rounded-full bg-m-cy" style={{ boxShadow:'0 0 8px #06b6d4' }} />
          <div><div className="text-[11px] font-semibold grad2 leading-none">150+ Clients</div><div className="text-[8.5px] text-m-mu mt-0.5 tracking-wider uppercase">Served</div></div>
        </div>
      </>)}
    </div>
  )
}
export function MarsPlanetSmall({ size=160 }: { size?:number }) {
  return (
    <div className="planet-stage" style={{ width:size+40,height:size+40 }}>
      <div className="orbit" style={{ width:'116%',height:'116%',animationDelay:'-2s' }} />
      <div className="orbit" style={{ width:'106%',height:'106%' }} />
      <div className="planet-wrap" style={{ width:size,height:size }}>
        <div className="planet-atmo" /><div className="planet-shell"><div className="planet-surface" /><div className="planet-light" /></div>
      </div>
    </div>
  )
}