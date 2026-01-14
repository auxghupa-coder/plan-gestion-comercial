import React from 'react';
import { Step } from '../types';
import { COLOR_CLASSES } from '../constants';

interface StepCardProps {
  step: Step;
  color: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, color }) => {
  const theme = COLOR_CLASSES[color] || COLOR_CLASSES.blue;

  return (
    <div className={`p-4 rounded-lg border-l-4 shadow-sm bg-white h-full flex flex-col ${step.critical ? 'border-red-500 ring-1 ring-red-100' : theme.border + ' ' + theme.hoverBorder} transition-all`}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Paso {step.id}</span>
        {step.critical && (
          <span className="bg-red-100 text-red-700 text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse uppercase">Control Clave</span>
        )}
      </div>
      
      <h4 className="text-sm font-bold text-slate-800 mb-2 leading-tight uppercase tracking-tighter">{step.title}</h4>
      
      <ul className="space-y-1.5 mb-3 flex-1">
        {step.detail.map((item, idx) => (
          <li key={idx} className="flex gap-2 text-[10px] text-slate-600 leading-tight">
            <span className={theme.text + " font-black"}>▶</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-slate-100">
        <p className="w-full text-[8px] font-black text-slate-400 uppercase mb-1">Responsables:</p>
        {step.responsibles.map((resp, idx) => (
          <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded bg-slate-50 text-slate-600 font-bold border border-slate-200">
            {resp}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepCard;