
import React from 'react';
import { Phase } from '../types';
import StepCard from './StepCard';

interface Props {
  phases: Phase[];
}

const VerticalLayout: React.FC<Props> = ({ phases }) => {
  return (
    <div className="p-8 space-y-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Tablero Escalonado Vertical</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm">Proceso completo de flujo descendente por etapas operativas.</p>
      </div>

      <div className="relative">
        {/* Central timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16">
          {phases.map((phase, phaseIdx) => (
            <div key={phase.id} className="relative z-10">
              <div className="flex flex-col items-center mb-6">
                <div className={`w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center text-white font-bold text-lg mb-2 z-20 bg-${phase.color}-500`}>
                  {phaseIdx + 1}
                </div>
                <h3 className={`text-lg font-bold text-${phase.color}-700 uppercase tracking-wide`}>{phase.name}</h3>
                <p className="text-xs text-slate-400 font-medium">{phase.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {phase.steps.map((step, stepIdx) => (
                  <div key={step.id} className={stepIdx % 2 === 0 ? 'md:text-right' : ''}>
                    <StepCard step={step} color={phase.color} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalLayout;
