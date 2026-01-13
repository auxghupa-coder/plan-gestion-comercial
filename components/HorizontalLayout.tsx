
import React from 'react';
import { Phase } from '../types';
import StepCard from './StepCard';

interface Props {
  phases: Phase[];
}

const HorizontalLayout: React.FC<Props> = ({ phases }) => {
  return (
    <div className="p-8 overflow-x-auto min-w-full">
      <div className="text-center mb-12 shrink-0">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Tablero de Flujo Horizontal</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm">Visualización de continuidad de izquierda a derecha.</p>
      </div>

      <div className="flex gap-6 pb-8">
        {phases.map((phase, phaseIdx) => (
          <div key={phase.id} className="w-[320px] shrink-0">
            <div className={`p-4 rounded-t-xl text-white bg-${phase.color}-600 mb-4 shadow-sm`}>
              <div className="text-[10px] font-bold opacity-80 uppercase mb-1">Fase {phaseIdx + 1}</div>
              <h3 className="text-sm font-bold leading-tight">{phase.name}</h3>
            </div>
            
            <div className="space-y-4 px-1">
              {phase.steps.map((step) => (
                <StepCard key={step.id} step={step} color={phase.color} />
              ))}
            </div>

            {phaseIdx < phases.length - 1 && (
              <div className="hidden lg:flex items-center justify-center h-full absolute -right-6 top-0 text-slate-300">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalLayout;
