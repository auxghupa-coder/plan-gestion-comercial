
import React, { useState, useEffect } from 'react';
import { ViewMode, Phase } from './types';
import { PROCESS_DATA } from './constants';
import VerticalLayout from './components/VerticalLayout';
import HorizontalLayout from './components/HorizontalLayout';
import StaircaseLayout from './components/StaircaseLayout';
import GrowthLayout from './components/GrowthLayout';
import PhaseDetailModal from './components/PhaseDetailModal';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.GROWTH_DIAGRAM);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);

  const handlePrint = () => {
    // Pequeña notificación o delay antes de imprimir para asegurar que el DOM esté listo
    window.print();
  };

  const renderContent = () => {
    switch (viewMode) {
      case ViewMode.VERTICAL:
        return <VerticalLayout phases={PROCESS_DATA} />;
      case ViewMode.HORIZONTAL:
        return <HorizontalLayout phases={PROCESS_DATA} />;
      case ViewMode.STAIRCASE:
        return <StaircaseLayout phases={PROCESS_DATA} />;
      case ViewMode.GROWTH_DIAGRAM:
        return <GrowthLayout phases={PROCESS_DATA} onSelectPhase={setSelectedPhase} />;
      default:
        return <GrowthLayout phases={PROCESS_DATA} onSelectPhase={setSelectedPhase} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Fixed on top */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 no-print px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Tablero de Proceso: Gestión Comercial
          </h1>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-tight">LIDER COMERCIAL (VINCULACIÓN Y MICROMEDICIÓN)</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
          <button 
            onClick={() => setViewMode(ViewMode.GROWTH_DIAGRAM)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === ViewMode.GROWTH_DIAGRAM ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}
          >
            Tablero Principal
          </button>
          <button 
            onClick={() => setViewMode(ViewMode.VERTICAL)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === ViewMode.VERTICAL ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}
          >
            Vertical
          </button>
          <button 
            onClick={() => setViewMode(ViewMode.HORIZONTAL)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === ViewMode.HORIZONTAL ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}
          >
            Horizontal
          </button>
          <button 
            onClick={() => setViewMode(ViewMode.STAIRCASE)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${viewMode === ViewMode.STAIRCASE ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}
          >
            Escalera
          </button>
        </div>

        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-700 text-white rounded-xl text-sm font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
          title="Descargar tablero actual como PDF"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Descargar PDF
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 bg-slate-50 overflow-auto">
        <div className="max-w-[1400px] mx-auto bg-white shadow-2xl border border-slate-200 min-h-[800px] flex flex-col relative print:shadow-none print:border-none">
          {renderContent()}
        </div>
      </main>

      {/* Detail Modal Overlay */}
      {selectedPhase && (
        <PhaseDetailModal 
          phase={selectedPhase} 
          onClose={() => setSelectedPhase(null)} 
        />
      )}

      {/* Footer / Legend */}
      <footer className="bg-white border-t border-slate-200 px-8 py-4 text-[10px] text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 no-print">
        <div className="flex flex-col">
          <span className="font-bold text-slate-700">© 2024 Planeación Estratégica - Tablero Gerencial Operativo</span>
          <span>Para descargar en PDF: Use el botón superior y seleccione "Guardar como PDF" en su navegador.</span>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></span> Control Crítico</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500 shadow-sm"></span> Operación Estándar</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-slate-400 shadow-sm"></span> Cierre Administrativo</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
