import React from 'react';
import { Phase } from '../types';
import { COLOR_CLASSES } from '../constants';

interface Props {
  phases: Phase[];
  onSelectPhase?: (phase: Phase) => void;
}

const GrowthLayout: React.FC<Props> = ({ phases, onSelectPhase }) => {
  // Paleta de colores hexadecimales para inline styles (SVG y Círculos)
  const hexColors: Record<string, string> = {
    blue: '#2563eb',
    cyan: '#0891b2',
    sky: '#0284c7',
    indigo: '#4f46e5',
    violet: '#7c3aed',
    purple: '#9333ea',
    fuchsia: '#c026d3',
    pink: '#db2777',
    rose: '#e11d48',
    amber: '#d97706',
  };

  return (
    <div className="flex-1 flex flex-col p-8 bg-white relative md:min-h-[1800px] print:min-h-0 overflow-x-hidden">
      {/* Título Principal - Estilo PDF */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-slate-800 tracking-tighter uppercase border-b-8 border-blue-600 inline-block pb-2 mb-2">
          Dashboard de Gestión Comercial
        </h2>
        <p className="text-slate-500 font-extrabold text-sm uppercase tracking-widest block">
          Flujo de Proceso Integral Detallado • 10 Estaciones de Control
        </p>
      </div>

      {/* Etiquetas de Ejes Temáticos - Leyenda Superior */}
      <div className="grid grid-cols-10 gap-2 mb-16 no-print">
        <div className="col-span-5 bg-blue-700 text-white p-3 rounded-l-xl text-center text-[10px] font-black uppercase shadow-sm">
          I. Planeación Estratégica (1-5)
        </div>
        <div className="col-span-2 bg-purple-700 text-white p-3 text-center text-[10px] font-black uppercase shadow-sm border-l border-r border-white/20">
          II. Gestión Operativa (6-7)
        </div>
        <div className="col-span-3 bg-amber-700 text-white p-3 rounded-r-xl text-center text-[10px] font-black uppercase shadow-sm">
          III. Sistemas y Cierre (8-10)
        </div>
      </div>

      <div className="relative flex-1 flex flex-col">
        {/* Línea de Guía SVG (Escalera) - Forzamos stroke para impresión */}
        <div className="absolute inset-x-0 top-[100px] h-[500px] pointer-events-none px-4 opacity-10 print:opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="none" className="overflow-visible">
            <path
              d={`M 0 500 
                 ${phases.map((_, i) => {
                   const stepX = (1000 / phases.length) * (i + 1);
                   const y = 500 - (500 / phases.length) * i;
                   const nextY = 500 - (500 / phases.length) * (i + 1);
                   return `L ${stepX} ${y} L ${stepX} ${nextY}`;
                 }).join(' ')}`}
              fill="none"
              stroke="black"
              strokeWidth="12"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Mapeo de Fases */}
        <div className="flex justify-between items-start gap-1">
          {phases.map((phase, idx) => {
            const stepPercent = (100 / phases.length);
            const topOffset = (idx * (500 / phases.length));
            const stepColor = hexColors[phase.color] || '#333';

            return (
              <div 
                key={phase.id} 
                className="relative z-10 flex flex-col items-center" 
                style={{ 
                  width: `${stepPercent}%`, 
                  marginTop: `${500 - topOffset}px` 
                }}
              >
                {/* Círculo de Paso */}
                <div 
                  className="w-16 h-16 rounded-full flex flex-col items-center justify-center text-white shadow-xl mb-6 ring-4 ring-white cursor-pointer hover:scale-110 transition-transform no-print"
                  style={{ backgroundColor: stepColor }}
                  onClick={() => onSelectPhase?.(phase)}
                >
                  <span className="text-2xl font-black leading-none">{idx + 1}</span>
                </div>
                {/* Círculo visible solo en PDF */}
                <div 
                  className="hidden print:flex w-12 h-12 rounded-full flex-col items-center justify-center text-white mb-4"
                  style={{ backgroundColor: stepColor }}
                >
                  <span className="text-xl font-black leading-none">{idx + 1}</span>
                </div>

                {/* Bloque de Información */}
                <div className="w-full px-1 text-left break-inside-avoid">
                  <div className="mb-6 text-center">
                    <h3 
                      className="text-[11px] font-black uppercase leading-none mb-2 min-h-[45px] flex items-center justify-center tracking-tighter"
                      style={{ color: stepColor }}
                    >
                      {phase.name.replace(/^\d+\.\s/, '')}
                    </h3>
                    <div className="h-1 w-10 mx-auto rounded-full mb-3" style={{ backgroundColor: stepColor }}></div>
                    <p className="text-[8px] text-slate-400 italic font-bold leading-tight px-1">
                      {phase.description}
                    </p>
                  </div>
                  
                  {/* Pasos detallados */}
                  <div className="space-y-4">
                    {phase.steps.map((s) => (
                      <div 
                        key={s.id} 
                        className={`p-3 rounded-xl border-t-4 bg-white shadow-md border-slate-100 ${s.critical ? 'border-red-500 bg-red-50/20' : ''}`}
                        style={!s.critical ? { borderTopColor: stepColor } : {}}
                      >
                        <div className="flex items-center justify-between mb-2">
                           <span 
                             className="text-[8px] font-black px-1.5 py-0.5 rounded text-white"
                             style={{ backgroundColor: s.critical ? '#ef4444' : stepColor }}
                           >
                             {s.id}
                           </span>
                           {s.critical && (
                             <span className="text-[6px] text-red-600 font-black uppercase tracking-widest">¡Crítico!</span>
                           )}
                        </div>
                        
                        <h4 className="text-[9px] font-black text-slate-900 mb-2 leading-tight uppercase border-b border-slate-50 pb-1 tracking-tighter">
                          {s.title}
                        </h4>
                        
                        <ul className="space-y-2 mb-4">
                          {s.detail.map((d, i) => (
                            <li key={i} className="flex gap-1 text-[8px] text-slate-700 leading-normal font-medium">
                              <span style={{ color: stepColor }} className="font-black">●</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-2 border-t border-slate-50 flex flex-wrap gap-1">
                          {s.responsibles.map((r, i) => (
                            <span key={i} className="text-[7px] px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded font-bold uppercase border border-slate-200">
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Pie de Página Gerencial */}
      <div className="mt-20 pt-10 border-t-4 border-slate-800 grid grid-cols-4 gap-6 text-[10px] text-slate-600">
        <div className="col-span-1 border-r border-slate-200 pr-6">
          <h5 className="font-black text-slate-900 uppercase mb-2">Propósito del Flujo</h5>
          <p>Estandarización absoluta del proceso comercial para asegurar que cada vinculación sea legalmente válida y comercialmente activa en sistemas EPM.</p>
        </div>
        <div className="col-span-1 border-r border-slate-200 pr-6">
          <h5 className="font-black text-slate-900 uppercase mb-2">Sistemas Implicados</h5>
          <p className="font-bold">• OPEN: Comercial.<br/>• HIDRO: Técnico.<br/>• DRIVE: Documental.</p>
        </div>
        <div className="col-span-1 border-r border-slate-200 pr-6">
          <h5 className="font-black text-slate-900 uppercase mb-2">Control de Calidad</h5>
          <p>Cada estación de control requiere la validación de los responsables asignados. Puntos críticos en rojo requieren supervisión inmediata.</p>
        </div>
        <div className="col-span-1 text-right italic font-black text-slate-400">
          <p className="text-slate-900 uppercase text-xs">Uso Exclusivo Gerencial</p>
          <p>Fundación en Alianza con EPM</p>
          <p>Versión 2024.3</p>
        </div>
      </div>
    </div>
  );
};

export default GrowthLayout;