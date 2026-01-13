
import React from 'react';
import { Step } from '../types';

interface StepCardProps {
  step: Step;
  color: string;
  isCompact?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, color, isCompact }) => {
  const colorMap: Record<string, string> = {
    blue: 'border-blue-500 text-blue-700 bg-blue-50',
    indigo: 'border-indigo-500 text-indigo-700 bg-indigo-50',
    emerald: 'border-emerald-500 text-emerald-700 bg-emerald-50',
    amber: 'border-amber-500 text-amber-700 bg-amber-50',
    slate: 'border-slate-500 text-slate-700 bg-slate-50',
  };

  const badgeColorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-800',
    indigo: 'bg-indigo-100 text-indigo-800',
    emerald: 'bg-emerald-100 text-emerald-800',
    amber: 'bg-amber-100 text-amber-800',
    slate: 'bg-slate-100 text-slate-800',
  };

  return (
    <div className={`p-4 rounded-lg border-l-4 shadow-sm bg-white ${step.critical ? 'border-red-500 ring-1 ring-red-100' : 'border-slate-200 hover:border-' + color + '-400'} transition-all`}>
      <div className="flex justify-between items-start mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">Paso {step.id}</span>
        {step.critical && (
          <span className="bg-red-100 text-red-700 text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse uppercase">Control Clave</span>
        )}
      </div>
      
      <h4 className="text-sm font-bold text-slate-800 mb-2 leading-tight">{step.title}</h4>
      
      <ul className="space-y-1.5 mb-3">
        {step.detail.map((item, idx) => (
          <li key={idx} className="flex gap-2 text-[11px] text-slate-600 leading-normal">
            <span className="text-slate-300">•</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-slate-100">
        {step.responsibles.map((resp, idx) => (
          <span key={idx} className="text-[9px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
            {resp}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepCard;
