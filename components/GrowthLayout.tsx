
import React from 'react';
import { Phase } from '../types';

interface Props {
  phases: Phase[];
  onSelectPhase?: (phase: Phase) => void;
}

const GrowthLayout: React.FC<Props> = ({ phases, onSelectPhase }) => {
  // Map internal colors to solid hex for consistency with the "stylish" look
  const colorMap: Record<string, string> = {
    blue: '#3b82f6',
    indigo: '#6366f1',
    emerald: '#10b981',
    amber: '#f59e0b',
    slate: '#475569',
  };

  return (
    <div className="flex-1 flex flex-col p-12 bg-[#f8f9fa] overflow-hidden relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-800 tracking-tight uppercase">Dashboard Gerencial Interactivo</h2>
        <p className="text-slate-400 mt-2 font-medium">Haga clic en un nivel para profundizar en los detalles operativos</p>
      </div>

      <div className="relative flex-1 flex items-end justify-between px-4 pb-20">
        {/* The Ribbon/Path */}
        <div className="absolute inset-x-0 bottom-[120px] h-[300px] pointer-events-none px-4">
          <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none" className="overflow-visible">
            <path
              d={`M 0 300 
                 ${phases.map((_, i) => {
                   const stepX = (1000 / phases.length) * (i + 1);
                   const startX = (1000 / phases.length) * i;
                   const y = 300 - (300 / phases.length) * i;
                   const nextY = 300 - (300 / phases.length) * (i + 1);
                   return `L ${stepX} ${y} L ${stepX} ${nextY}`;
                 }).join(' ')}`}
              fill="none"
              stroke="#bdbdbd"
              strokeWidth="14"
              strokeLinejoin="round"
              strokeLinecap="butt"
              className="drop-shadow-sm opacity-60"
            />
          </svg>
        </div>

        {/* The Steps */}
        {phases.map((phase, idx) => {
          const stepPercent = (100 / phases.length);
          const bottomOffset = (idx * (300 / phases.length));
          const stepColor = colorMap[phase.color] || '#333';

          return (
            <div 
              key={phase.id} 
              className="relative z-10 flex flex-col items-center group cursor-pointer" 
              style={{ width: `${stepPercent}%`, marginBottom: `${bottomOffset}px` }}
              onClick={() => onSelectPhase?.(phase)}
            >
              {/* Floating Circle Marker */}
              <div 
                className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-white shadow-xl mb-12 transition-all group-hover:scale-110 group-hover:shadow-2xl duration-300 ring-4 ring-transparent group-hover:ring-white/50"
                style={{ backgroundColor: stepColor }}
              >
                <span className="text-[10px] font-bold opacity-80 tracking-widest uppercase">Nivel</span>
                <span className="text-3xl font-black leading-none">{idx + 1}</span>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              {/* Text Blocks Below Ribbon */}
              <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[90%] text-center mt-8 group-hover:-translate-y-2 transition-transform duration-300">
                 <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tighter mb-2 group-hover:text-blue-600 transition-colors">
                   {phase.name.split('. ')[1] || phase.name}
                 </h3>
                 <p className="text-[10px] text-slate-500 leading-tight mb-4 px-2 italic font-medium opacity-80 group-hover:opacity-100">
                   {phase.description}
                 </p>
                 
                 {/* Detail Preview Box */}
                 <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-slate-200 text-left shadow-sm group-hover:shadow-md group-hover:bg-white transition-all">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Resumen</span>
                       <span className={`text-[9px] font-bold text-${phase.color}-500 group-hover:underline`}>Ver detalles</span>
                    </div>
                    {phase.steps.slice(0, 1).map(s => (
                      <div key={s.id} className="mb-0">
                         <div className="flex items-start gap-1">
                           <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${s.critical ? 'bg-red-500' : 'bg-slate-300'}`}></div>
                           <span className="text-[9px] font-bold text-slate-700 leading-none">{s.title}</span>
                         </div>
                         <ul className="pl-3 mt-1 space-y-0.5">
                            {s.detail.slice(0, 2).map((d, i) => (
                              <li key={i} className="text-[8px] text-slate-500 line-clamp-1 leading-tight">• {d}</li>
                            ))}
                         </ul>
                      </div>
                    ))}
                    {phase.steps.length > 1 && (
                      <div className="mt-2 text-[8px] text-slate-400 font-medium italic text-center">
                        + {phase.steps.length - 1} actividades adicionales
                      </div>
                    )}
                 </div>
              </div>
            </div>
          );
        })}

        {/* Final Step Path Continuation */}
        <div className="absolute right-0 bottom-[300px] w-[5%] h-[14px] bg-[#bdbdbd] opacity-40"></div>
      </div>

      {/* Decorative footer text */}
      <div className="mt-12 text-center text-slate-400 text-xs font-light italic">
        "Gestión escalonada diseñada para la excelencia operativa y trazabilidad total"
      </div>
    </div>
  );
};

export default GrowthLayout;
