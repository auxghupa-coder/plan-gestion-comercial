import React from 'react';
import { Phase } from '../types';
import StepCard from './StepCard';
import { COLOR_CLASSES } from '../constants';

interface Props {
  phases: Phase[];
}

const VerticalLayout: React.FC<Props> = ({ phases }) => {
  return (
    <div className="p-8 space-y-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Tablero Escalonado Vertical</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm uppercase font-bold tracking-widest">Flujo de proceso descendente</p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16">
          {phases.map((phase, phaseIdx) => {
            const theme = COLOR_CLASSES[phase.color] || COLOR_CLASSES.blue;
            return (
              <div key={phase.id} className="relative z-10">
                <div className="flex flex-col items-center mb-8">
                  <div className={`w-14 h-14 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white font-black text-xl mb-3 z-20 ${theme.bg}`}>
                    {phaseIdx + 1}
                  </div>
                  <h3 className={`text-xl font-black uppercase tracking-tighter ${theme.text}`}>{phase.name}</h3>
                  <p className="text-xs text-slate-400 font-bold uppercase">{phase.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                  {phase.steps.map((step, stepIdx) => (
                    <div key={step.id} className={stepIdx % 2 === 0 ? 'md:text-right' : ''}>
                      <StepCard step={step} color={phase.color} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VerticalLayout;