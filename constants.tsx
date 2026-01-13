
import { Phase } from './types';

export const PROCESS_DATA: Phase[] = [
  {
    id: 'P1',
    name: '1. Planeación y Análisis de Sectores',
    description: 'Identificación y priorización de áreas de intervención.',
    color: 'blue',
    steps: [
      {
        id: '1.1',
        title: 'Descarga y Análisis de Datos',
        detail: [
          'Descargar "Análisis de Sectores" desde Drive compartido.',
          'Identificar sectores no intervenidos recientemente.',
          'Articular validación con área social y técnica (Wilmer Oviedo).'
        ],
        responsibles: ['Luisa Cadavid', 'Mariana Botero']
      },
      {
        id: '1.2',
        title: 'Validación Comercial OPEN',
        detail: [
          'Verificar en sistema OPEN que viviendas estén paginadas.',
          'PUNTO CLAVE: Si no está paginada en OPEN, reportar error de desinstalación.',
          'Definir muestra final de trabajo por cobertura y accesibilidad.'
        ],
        responsibles: ['Mariana Botero'],
        critical: true
      }
    ]
  },
  {
    id: 'P2',
    name: '2. Verificación y Clasificación en Campo',
    description: 'Recibo de insumos y definición de acciones por vivienda.',
    color: 'indigo',
    steps: [
      {
        id: '2.1',
        title: 'Consolidación de Reportes',
        detail: [
          'Recibir insumos de verificadores y consolidar en archivo general.',
          'Validar clasificación: Acometida nueva, micromedición, casa sola, etc.',
          'Definir redireccionamiento: Ejecución, Social, Interventoría o Descarte.'
        ],
        responsibles: ['Mariana Botero', 'Natalia Cataño']
      },
      {
        id: '2.2',
        title: 'Programación Operativa',
        detail: [
          'Incorporar viviendas aptas en archivo "Control_regadas_Wilmer".',
          'Coordinar visitas de prueba de derrame o visitas técnicas adicionales.'
        ],
        responsibles: ['Mariana Botero', 'Wilmer Oviedo']
      }
    ]
  },
  {
    id: 'P3',
    name: '3. Vinculación y Micromedición (Físico)',
    description: 'Gestión documental y trazabilidad de instalaciones.',
    color: 'emerald',
    steps: [
      {
        id: '3.1',
        title: 'Recibo y Digitalización',
        detail: [
          'Recibo de vinculaciones físicas y digitales (WhatsApp/PDF).',
          'Revisión de diligenciamiento: Letra legible, sin enmendaduras, firma usuario.',
          'Carga de carpetas a OneDrive "VINCULACIONES".'
        ],
        responsibles: ['Yulitza Cadena', 'Mariana Botero']
      },
      {
        id: '3.2',
        title: 'Organización de Expedientes',
        detail: [
          'Impresión de cédulas y grapado con vinculación.',
          'Relacionar "Planilla de remisión de documentos Expediente del Cliente".',
          'Entrega de documentos físicos a EPM en orden establecido.'
        ],
        responsibles: ['Yulitza Cadena', 'Luisa Cadavid']
      }
    ]
  },
  {
    id: 'P4',
    name: '4. Gestión de Información en Sistemas (HIDRO)',
    description: 'Cargue operativo y legalización de órdenes de trabajo.',
    color: 'amber',
    steps: [
      {
        id: '4.1',
        title: 'Descargue de Papeletas HIDRO',
        detail: [
          'Ingreso a VPN y aplicación Citrix (Hidro).',
          'Escaneo y organización de fotos (10 fotos por medidor).',
          'Conversión de formato JPEG a JPG para carga masiva.'
        ],
        responsibles: ['Digitador', 'Mariana Botero']
      },
      {
        id: '4.2',
        title: 'Cierre de O.T.s en Sistema',
        detail: [
          'Ingresar datos: Serie medidor, sello, localización (frente).',
          'Configurar atributos: Abastecimiento comunitario con medidor.',
          'Realizar descarga parcial y validar mensaje de éxito.'
        ],
        responsibles: ['Digitador', 'Mariana Botero']
      }
    ]
  },
  {
    id: 'P5',
    name: '5. Reporte y Seguimiento Gerencial',
    description: 'Control de avances, inconsistencias y cumplimiento.',
    color: 'slate',
    steps: [
      {
        id: '5.1',
        title: 'Control de Inconsistencias',
        detail: [
          'Exportar inconsistencias de cierre y liquidación desde Hidro.',
          'Identificar ejecutor de vinculación (EPM vs Fundación).',
          'Crear comentarios de solución para cada caso.'
        ],
        responsibles: ['Mariana Botero']
      },
      {
        id: '5.2',
        title: 'Reportes Periódicos',
        detail: [
          'Reporte diario de direcciones descargadas a Ricardo EPM.',
          'Reporte quincenal de estado de ejecución y clasificación.',
          'Seguimiento en Comité Comercial mensual.'
        ],
        responsibles: ['Luisa Cadavid', 'Mariana Botero']
      }
    ]
  }
];
