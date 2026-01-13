
import React from 'react';
import { Phase } from '../types';
import StepCard from './StepCard';

interface Props {
  phases: Phase[];
}

const StaircaseLayout: React.FC<Props> = ({ phases }) => {
  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Tablero por Niveles (Escalera)</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm">Visualización de avance progresivo y niveles de complejidad/control.</p>
      </div>

      <div className="space-y-6">
        {phases.map((phase, idx) => (
          <div 
            key={phase.id} 
            className="flex flex-col lg:flex-row gap-4"
            style={{ marginLeft: `${idx * 4}%` }}
          >
            {/* Phase Header - Sidebar style */}
            <div className={`w-full lg:w-1/4 p-4 rounded-lg bg-${phase.color}-500 text-white shadow-md shrink-0 flex flex-col justify-center`}>
              <span className="text-xs font-bold opacity-70 uppercase tracking-widest">Nivel {idx + 1}</span>
              <h3 className="text-lg font-black leading-tight mt-1">{phase.name.split('. ')[1] || phase.name}</h3>
              <p className="text-[10px] mt-2 opacity-90">{phase.description}</p>
            </div>

            {/* Steps Container */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {phase.steps.map((step) => (
                <StepCard key={step.id} step={step} color={phase.color} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Finishing Indicator */}
      <div className="mt-16 flex justify-end">
        <div className="flex items-center gap-4 bg-emerald-50 px-6 py-4 rounded-2xl border-2 border-dashed border-emerald-200">
           <div className="bg-emerald-500 text-white p-2 rounded-full shadow-lg">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </div>
           <div>
             <h4 className="text-emerald-800 font-bold">Proceso Finalizado</h4>
             <p className="text-emerald-600 text-[10px]">Cierre de O.T. y legalización exitosa en sistema HIDRO.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StaircaseLayout;
