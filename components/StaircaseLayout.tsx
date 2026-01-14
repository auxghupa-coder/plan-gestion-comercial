import React from 'react';
import { Phase } from '../types';
import StepCard from './StepCard';
import { COLOR_CLASSES } from '../constants';

interface Props {
  phases: Phase[];
}

const StaircaseLayout: React.FC<Props> = ({ phases }) => {
  return (
    <div className="p-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Tablero por Niveles (Escalera)</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm uppercase font-bold tracking-widest">Avance progresivo de complejidad</p>
      </div>

      <div className="space-y-8">
        {phases.map((phase, idx) => {
          const theme = COLOR_CLASSES[phase.color] || COLOR_CLASSES.blue;
          return (
            <div 
              key={phase.id} 
              className="flex flex-col lg:flex-row gap-6"
              style={{ marginLeft: `${idx * 2.5}%` }}
            >
              {/* Phase Header */}
              <div className={`w-full lg:w-1/4 p-6 rounded-2xl text-white shadow-xl shrink-0 flex flex-col justify-center ${theme.bg}`}>
                <span className="text-[10px] font-black opacity-70 uppercase tracking-widest">Nivel {idx + 1}</span>
                <h3 className="text-xl font-black leading-tight mt-1 uppercase tracking-tighter">{phase.name.split('. ')[1] || phase.name}</h3>
                <p className="text-[11px] mt-2 opacity-90 italic font-medium">{phase.description}</p>
              </div>

              {/* Steps Container */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                {phase.steps.map((step) => (
                  <StepCard key={step.id} step={step} color={phase.color} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Finishing Indicator */}
      <div className="mt-20 flex justify-end">
        <div className="flex items-center gap-6 bg-emerald-50 px-8 py-6 rounded-3xl border-4 border-dashed border-emerald-200">
           <div className="bg-emerald-500 text-white p-3 rounded-full shadow-2xl">
             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
           </div>
           <div>
             <h4 className="text-emerald-900 font-black text-lg uppercase tracking-tighter">Proceso Finalizado</h4>
             <p className="text-emerald-700 text-xs font-bold">Cierre de O.T. y legalización exitosa en sistema HIDRO.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StaircaseLayout;