import React from 'react';
import { Phase } from '../types';
import StepCard from './StepCard';
import { COLOR_CLASSES } from '../constants';

interface Props {
  phases: Phase[];
}

const HorizontalLayout: React.FC<Props> = ({ phases }) => {
  return (
    <div className="p-8 overflow-x-auto min-w-full bg-white">
      <div className="text-center mb-12 shrink-0">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Tablero de Flujo Horizontal</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm uppercase font-bold tracking-widest">Continuidad de izquierda a derecha</p>
      </div>

      <div className="flex gap-6 pb-8 min-w-max">
        {phases.map((phase, phaseIdx) => {
          const theme = COLOR_CLASSES[phase.color] || COLOR_CLASSES.blue;
          return (
            <div key={phase.id} className="w-[340px] shrink-0">
              <div className={`p-5 rounded-t-xl text-white mb-4 shadow-lg ${theme.bg}`}>
                <div className="text-[10px] font-black opacity-80 uppercase mb-1">Fase {phaseIdx + 1}</div>
                <h3 className="text-sm font-black leading-tight uppercase tracking-tighter">{phase.name}</h3>
              </div>
              
              <div className="space-y-4 px-1">
                {phase.steps.map((step) => (
                  <StepCard key={step.id} step={step} color={phase.color} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalLayout;