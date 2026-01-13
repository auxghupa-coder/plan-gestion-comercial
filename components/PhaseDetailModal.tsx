
import React from 'react';
import { Phase } from '../types';
import StepCard from './StepCard';

interface PhaseDetailModalProps {
  phase: Phase;
  onClose: () => void;
}

const PhaseDetailModal: React.FC<PhaseDetailModalProps> = ({ phase, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className={`p-6 border-b border-slate-100 flex items-center justify-between bg-${phase.color}-50`}>
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full bg-${phase.color}-500 text-white flex items-center justify-center font-black text-xl shadow-lg`}>
              {phase.id.replace('P', '')}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 uppercase tracking-tight">{phase.name}</h3>
              <p className="text-sm text-slate-500 font-medium">{phase.description}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <div className="mb-8">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Desglose Detallado del Nivel</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phase.steps.map((step) => (
                <StepCard key={step.id} step={step} color={phase.color} />
              ))}
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-xl">
             <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Notas de Seguimiento y Escalabilidad</h4>
             <p className="text-xs text-slate-600 leading-relaxed italic">
               Este nivel requiere una validación exhaustiva de los responsables indicados. El flujo debe ser continuo y cualquier desviación en los puntos de control clave (marcados en rojo) debe ser reportada de inmediato al área de Gerencia Comercial.
             </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className={`px-6 py-2 bg-${phase.color}-600 text-white rounded-lg text-sm font-bold shadow-md hover:brightness-110 transition-all`}
          >
            Cerrar Detalle
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhaseDetailModal;
