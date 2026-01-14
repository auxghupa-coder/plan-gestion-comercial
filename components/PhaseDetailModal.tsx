import React from 'react';
import { Phase } from '../types';
import StepCard from './StepCard';
import { COLOR_CLASSES } from '../constants';

interface PhaseDetailModalProps {
  phase: Phase;
  onClose: () => void;
}

const PhaseDetailModal: React.FC<PhaseDetailModalProps> = ({ phase, onClose }) => {
  const theme = COLOR_CLASSES[phase.color] || COLOR_CLASSES.blue;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col scale-in-center">
        {/* Header */}
        <div className={`p-8 border-b border-slate-100 flex items-center justify-between ${theme.lightBg}`}>
          <div className="flex items-center gap-6">
            <div className={`w-16 h-16 rounded-full text-white flex items-center justify-center font-black text-2xl shadow-xl ${theme.bg}`}>
              {phase.id.replace('P', '')}
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{phase.name}</h3>
              <p className="text-sm text-slate-500 font-bold uppercase">{phase.description}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900 shadow-sm border border-slate-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 bg-slate-50/50">
          <div className="mb-10">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Desglose Técnico de Actividades</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {phase.steps.map((step) => (
                <StepCard key={step.id} step={step} color={phase.color} />
              ))}
            </div>
          </div>

          <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
             <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-widest mb-3">Protocolos de Seguimiento</h4>
             <p className="text-xs text-slate-600 leading-relaxed italic font-medium">
               Este nivel requiere una validación exhaustiva de los responsables indicados. El flujo debe ser continuo y cualquier desviación en los puntos de control clave (marcados en rojo) debe ser reportada de inmediato al área de Gerencia Comercial. La calidad de la información en este paso impacta directamente en la facturación y satisfacción del usuario final.
             </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className={`px-8 py-3 text-white rounded-xl text-sm font-black shadow-lg hover:brightness-110 transition-all uppercase tracking-widest ${theme.bg}`}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhaseDetailModal;