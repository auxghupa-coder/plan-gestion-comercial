
import React from 'react';
import { Phase } from '../types';

interface Props {
  phases: Phase[];
  onSelectPhase?: (phase: Phase) => void;
}

const GrowthLayout: React.FC<Props> = ({ phases, onSelectPhase }) => {
  const colorMap: Record<string, string> = {
    blue: '#3b82f6',
    indigo: '#6366f1',
    emerald: '#10b981',
    amber: '#f59e0b',
    slate: '#475569',
  };

  return (
    <div className="flex-1 flex flex-col p-6 bg-[#f4f7f9] relative min-h-[2000px] overflow-x-hidden">
      {/* Encabezado Corporativo */}
      <div className="text-center mb-10 no-print">
        <h2 className="text-4xl font-black text-slate-800 tracking-tight uppercase border-b-8 border-blue-600 inline-block pb-2 mb-2">
          Dashboard de Gestión Comercial
        </h2>
        <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Flujo de Proceso Integral Sin Omisiones - Vista Gerencial</p>
      </div>

      {/* Etiquetas de Ejes Temáticos con Proporción 5:2:3 */}
      <div className="grid grid-cols-10 gap-2 mb-12 no-print font-black text-[11px] uppercase tracking-tighter shadow-lg">
        <div className="col-span-5 bg-blue-700 text-white p-3 rounded-l-xl text-center flex items-center justify-center border-r-2 border-blue-800">
          I. Planeación Estratégica (Fases 1-5)
        </div>
        <div className="col-span-2 bg-indigo-700 text-white p-3 text-center flex items-center justify-center border-r-2 border-indigo-800">
          II. Gestión Operativa (Fases 6-7)
        </div>
        <div className="col-span-3 bg-amber-700 text-white p-3 rounded-r-xl text-center flex items-center justify-center">
          III. Sistemas y Cierre Gerencial (Fases 8-10)
        </div>
      </div>

      <div className="relative flex-1 flex flex-col">
        {/* SVG Ribbon de Escalera - Trayectoria Dinámica para 10 Pasos */}
        <div className="absolute inset-x-0 top-[120px] h-[500px] pointer-events-none px-4 no-print opacity-25">
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
              stroke="#475569"
              strokeWidth="14"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Contenedor de Fases - Grid de 10 columnas para alineación perfecta */}
        <div className="flex justify-between items-start gap-1">
          {phases.map((phase, idx) => {
            const stepPercent = (100 / phases.length);
            const topOffset = (idx * (500 / phases.length));
            const stepColor = colorMap[phase.color] || '#333';

            return (
              <div 
                key={phase.id} 
                className="relative z-10 flex flex-col items-center group" 
                style={{ 
                  width: `${stepPercent}%`, 
                  marginTop: `${500 - topOffset}px` 
                }}
              >
                {/* Indicador de Escalón Circular Interactivo */}
                <div 
                  className="w-16 h-16 rounded-full flex flex-col items-center justify-center text-white shadow-2xl mb-6 cursor-pointer hover:scale-125 transition-all duration-500 ring-4 ring-white group-hover:ring-blue-400 group-hover:z-50"
                  style={{ backgroundColor: stepColor }}
                  onClick={() => onSelectPhase?.(phase)}
                >
                  <span className="text-[10px] font-bold opacity-70 uppercase leading-none">Paso</span>
                  <span className="text-2xl font-black leading-none">{idx + 1}</span>
                </div>

                {/* BLOQUE DE INFORMACIÓN EXTENSA (Sin resúmenes) */}
                <div className="w-full px-1 text-left">
                  {/* Título de Fase Principal */}
                  <div className="mb-4 text-center">
                    <h3 className="text-[11px] font-black text-slate-900 uppercase leading-none mb-2 min-h-[40px] flex items-center justify-center tracking-tighter">
                      {phase.name.replace(/^\d+\.\s/, '')}
                    </h3>
                    <div className="h-1.5 w-12 mx-auto rounded-full mb-3" style={{ backgroundColor: stepColor }}></div>
                    <p className="text-[9px] text-slate-500 italic leading-snug px-1 font-semibold">
                      {phase.description}
                    </p>
                  </div>
                  
                  {/* Lista de Detalles Completos */}
                  <div className="space-y-4">
                    {phase.steps.map((s) => (
                      <div 
                        key={s.id} 
                        className={`p-3 rounded-xl border-2 bg-white shadow-lg transition-all group-hover:border-${phase.color}-400 ${s.critical ? 'border-red-500 bg-red-50' : 'border-slate-100'}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                           <span className={`text-[8px] font-black px-2 py-0.5 rounded-full ${s.critical ? 'bg-red-500 text-white' : 'bg-slate-800 text-white'}`}>
                             {s.id}
                           </span>
                           {s.critical && (
                             <span className="text-[7px] text-red-600 font-black animate-pulse uppercase">Control Crítico</span>
                           )}
                        </div>
                        
                        <h4 className="text-[10px] font-black text-slate-800 mb-3 leading-tight uppercase border-b border-slate-100 pb-1">
                          {s.title}
                        </h4>
                        
                        <ul className="space-y-2 mb-4">
                          {s.detail.map((d, i) => (
                            <li key={i} className="flex gap-1.5 text-[9px] text-slate-700 leading-normal font-medium">
                              <span className="text-blue-500 font-bold">▶</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2 border-t border-slate-100 bg-slate-50 -mx-3 -mb-3 rounded-b-xl px-3 pb-2">
                           <p className="text-[7px] text-slate-400 font-black uppercase mb-1 tracking-widest">Responsables Asignados:</p>
                           <div className="flex flex-wrap gap-1">
                             {s.responsibles.map((r, i) => (
                               <span key={i} className="text-[7px] bg-white text-slate-700 px-1.5 py-0.5 rounded border border-slate-200 font-black shadow-sm">
                                 {r}
                               </span>
                             ))}
                           </div>
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

      {/* Pie de Página Gerencial - Información de Respaldo */}
      <div className="mt-20 pt-10 border-t-4 border-slate-800 grid grid-cols-4 gap-6 text-[10px] text-slate-600">
        <div className="col-span-1 border-r border-slate-300 pr-6">
          <h5 className="font-black text-slate-900 uppercase mb-2 text-xs">Propósito del Flujo</h5>
          <p className="leading-relaxed">Estandarización absoluta del proceso comercial para garantizar que cada vinculación sea legalmente válida, técnicamente perfecta y comercialmente activa en los sistemas OPEN e HIDRO de EPM.</p>
        </div>
        <div className="col-span-1 border-r border-slate-300 pr-6">
          <h5 className="font-black text-slate-900 uppercase mb-2 text-xs">Soberanía de Datos</h5>
          <p className="leading-relaxed font-bold">• Sistema OPEN: Base comercial activa.<br/>• Sistema HIDRO: Registro técnico de obra.<br/>• Drive Corporativo: Trazabilidad documental.</p>
        </div>
        <div className="col-span-1 border-r border-slate-300 pr-6">
          <h5 className="font-black text-slate-900 uppercase mb-2 text-xs">Protocolos de Control</h5>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-600 shadow-sm animate-pulse"></div> 
            <span className="font-bold">CRÍTICO: Validaciones de sistema y firmas legales.</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-slate-400 shadow-sm"></div> 
            <span>OPERATIVO: Ejecución estándar en campo.</span>
          </div>
        </div>
        <div className="col-span-1 text-right italic font-bold text-slate-400">
          <p className="text-slate-900 text-xs mb-1 uppercase tracking-tighter">Documento de Carácter Operativo-Gerencial</p>
          <p>No compartir sin autorización de Planeación.</p>
          <p>Última Revisión: Marzo 2024</p>
          <p className="text-blue-600">Fundación en Alianza con EPM</p>
        </div>
      </div>
    </div>
  );
};

export default GrowthLayout;
