
import React, { useState } from 'react';
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
            Interactivo
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
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Exportar PDF
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 bg-slate-50 overflow-auto">
        <div className="max-w-[1400px] mx-auto bg-white shadow-2xl border border-slate-200 min-h-[800px] flex flex-col relative">
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
      <footer className="bg-slate-100 border-t border-slate-200 px-8 py-3 text-[10px] text-slate-500 flex justify-between no-print">
        <span>© 2024 Planeación Estratégica - Tablero Gerencial One-Page</span>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Punto Crítico / Control</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Acción Operativa</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
