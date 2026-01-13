
import { Phase } from './types';

export const PROCESS_DATA: Phase[] = [
  {
    id: 'P1',
    name: '1. Análisis de Sectores y Pareto',
    description: 'Identificación técnica y priorización de zonas de intervención basada en datos históricos.',
    color: 'blue',
    steps: [
      {
        id: '1.1',
        title: 'Priorización y Mapeo de Zonas',
        detail: [
          'Descargar archivos maestros de "Análisis de Sectores" directamente del Drive Corporativo de Luisa Cadavid.',
          'Aplicar filtros avanzados por fecha de última intervención y densidad de viviendas sin servicio activo.',
          'Ejecutar análisis de Pareto (80/20) para identificar los sectores con mayor probabilidad de vinculación efectiva.',
          'Mapear "Zonas Blancas" identificando áreas con factibilidad técnica inmediata para nuevas conexiones.',
          'Definir polígonos de trabajo semanales para el despliegue del equipo social y técnico.'
        ],
        responsibles: ['Luisa Cadavid', 'Analista de Planeación']
      }
    ]
  },
  {
    id: 'P2',
    name: '2. Planeación Estratégica Social',
    description: 'Articulación comunitaria y sensibilización para asegurar el acceso a territorio.',
    color: 'blue',
    steps: [
      {
        id: '2.1',
        title: 'Gestión de Acceso y Sensibilización',
        detail: [
          'Coordinar con Wilmer Oviedo el protocolo de ingreso a barrios con condiciones complejas de orden público.',
          'Programar jornadas de sensibilización comunitaria con líderes barriales previas al ingreso del equipo técnico.',
          'Establecer metas semanales de vinculación ajustadas a la topografía y realidad sociopolítica del sector.',
          'Asegurar que el equipo cuente con el material POP, volantes y kits de información para el usuario final.',
          'Verificar la disponibilidad de acompañamiento de seguridad si el sector lo requiere según el mapa de riesgos.'
        ],
        responsibles: ['Mariana Botero', 'Wilmer Oviedo (Social)']
      }
    ]
  },
  {
    id: 'P3',
    name: '3. Validación en Sistema OPEN',
    description: 'Aseguramiento de la integridad de datos comerciales en la plataforma de EPM.',
    color: 'blue',
    steps: [
      {
        id: '3.1',
        title: 'Depuración y Paginación Comercial',
        detail: [
          'Cruzar la base de datos de campo preliminar con el Sistema Comercial OPEN de EPM para validar estados.',
          'Verificar la paginación correcta de cada vivienda para prevenir errores críticos en la facturación posterior.',
          'Identificar y marcar viviendas con reportes previos de "No instalado" o rechazos históricos por desinstalación.',
          'Confirmar las coordenadas GPS de las viviendas en áreas de difícil acceso para garantizar la ruta de lectura.',
          'Generar la muestra final de trabajo depurada y cargada con el número de contrato asignado en sistema.'
        ],
        responsibles: ['Mariana Botero', 'Soporte Sistemas']
      }
    ]
  },
  {
    id: 'P4',
    name: '4. Verificación y Censo de Campo',
    description: 'Inspección física detallada de la infraestructura y clasificación de predios.',
    color: 'blue',
    steps: [
      {
        id: '4.1',
        title: 'Censo Técnico y Registro Fotográfico',
        detail: [
          'Realizar censo físico exhaustivo clasificando en: Acometida Nueva, Micromedición, Casa Sola o Lote Vacío.',
          'Clasificar técnicamente los predios según el estado actual de la infraestructura hidráulica existente.',
          'Capturar registro fotográfico obligatorio de fachadas y puntos de conexión para el expediente digital.',
          'Detectar y reportar de inmediato anomalías técnicas como fraudes, bypass o conexiones directas no autorizadas.',
          'Actualizar en tiempo real el estado de factibilidad de cada vivienda en el panel de control de campo.'
        ],
        responsibles: ['Verificadores de Campo', 'Natalia Cataño']
      }
    ]
  },
  {
    id: 'P5',
    name: '5. Programación de Logística',
    description: 'Asignación de recursos y optimización de rutas para la ejecución de obra.',
    color: 'blue',
    steps: [
      {
        id: '5.1',
        title: 'Gestión de Insumos y Rutas (Regadas)',
        detail: [
          'Cargar el listado de viviendas aptas en el archivo de control compartido "Control_regadas_Wilmer".',
          'Gestionar ante almacén el stock necesario de medidores, sellos de seguridad y tubería según demanda estimada.',
          'Diseñar rutas lógicas de trabajo para minimizar tiempos de desplazamiento y maximizar la productividad diaria.',
          'Verificar que cada cuadrilla técnica tenga asignada su zona específica y los materiales correspondientes.',
          'Consolidar el reporte de materiales entregados vs materiales instalados para el control de inventarios.'
        ],
        responsibles: ['Coordinador Logístico', 'Mariana Botero']
      }
    ]
  },
  {
    id: 'P6',
    name: '6. Vinculación y Documental',
    description: 'Formalización legal del servicio y recolección de soportes contractuales.',
    color: 'indigo',
    steps: [
      {
        id: '6.1',
        title: 'Contratación y Digitalización',
        detail: [
          'Gestionar la firma de contratos de vinculación (Contrato de Condiciones Uniformes) con el titular del predio.',
          'Recolección obligatoria de documentos: Copia de Cédula de Ciudadanía y Certificado de Tradición y Libertad.',
          'Asegurar que las vinculaciones físicas tengan letra legible, sin tachones, enmendaduras o espacios vacíos.',
          'Digitalizar los expedientes completos mediante escaneo de alta resolución o fotografía técnica de soporte.',
          'Enviar reporte diario de vinculaciones efectivas vía WhatsApp para el seguimiento de metas de la gerencia.'
        ],
        responsibles: ['Gestores Sociales', 'Yulitza Cadena']
      }
    ]
  },
  {
    id: 'P7',
    name: '7. Instalación y Ejecución Técnica',
    description: 'Montaje de infraestructura de medición bajo normativa vigente.',
    color: 'indigo',
    steps: [
      {
        id: '7.1',
        title: 'Montaje de Medición y Registro',
        detail: [
          'Instalar medidores de agua cumpliendo estrictamente con la normativa técnica vigente de EPM.',
          'Aplicar sellos de seguridad numerados y registrar con precisión los números de serie en la papeleta técnica.',
          'Ejecutar la secuencia obligatoria de 10 fotos (Antes de obra, proceso de excavación, sellado, y acabado final).',
          'Reportar como "Punto Crítico" cualquier oposición del usuario o impedimento técnico que bloquee la obra.',
          'Garantizar la limpieza y restauración del espacio público intervenido tras la finalización del montaje.'
        ],
        responsibles: ['Técnicos Instaladores', 'Digitador de Campo'],
        critical: true
      }
    ]
  },
  {
    id: 'P8',
    name: '8. Legalización en Sistema HIDRO',
    description: 'Registro digital de la ejecución técnica para activación comercial.',
    color: 'amber',
    steps: [
      {
        id: '8.1',
        title: 'Cargue Digital y Procesamiento',
        detail: [
          'Realizar la conversión masiva de archivos fotográficos de formato JPEG a JPG (requisito de compatibilidad).',
          'Establecer conexión segura mediante VPN para acceder al Sistema Corporativo HIDRO de EPM.',
          'Ingresar todos los datos técnicos del medidor: marca, serie, lectura inicial y ubicación exacta (N/S/E/W).',
          'Asegurar que la información cargada en sistema coincida al 100% con la papeleta física recolectada.',
          'Cerrar digitalmente la orden de trabajo para habilitar el proceso de facturación inmediata.'
        ],
        responsibles: ['Digitadores', 'Mariana Botero'],
        critical: true
      }
    ]
  },
  {
    id: 'P9',
    name: '9. Gestión de Inconsistencias',
    description: 'Auditoría interna y resolución de rechazos técnicos o administrativos.',
    color: 'amber',
    steps: [
      {
        id: '9.1',
        title: 'Auditoría de Calidad y Liquidación',
        detail: [
          'Identificar y categorizar rechazos del sistema por duplicidad de series, errores de dirección o lecturas erróneas.',
          'Realizar auditoría comparativa entre ejecuciones directas de EPM y ejecuciones realizadas por la Fundación.',
          'Gestionar y solventar oportunamente las inconsistencias reportadas por la interventoría técnica de campo.',
          'Re-procesar órdenes de trabajo rechazadas adjuntando soportes fotográficos adicionales o actas de corrección.',
          'Validar la liquidación de materiales y mano de obra para el cierre financiero del sector intervenido.'
        ],
        responsibles: ['Mariana Botero', 'Interventoría Técnica']
      }
    ]
  },
  {
    id: 'P10',
    name: '10. Cierre y Comité Comercial',
    description: 'Consolidación de indicadores gerenciales y entrega de activos documentales.',
    color: 'amber',
    steps: [
      {
        id: '10.1',
        title: 'Entrega de Expedientes y Reporte Final',
        detail: [
          'Organizar y foliar los expedientes físicos originales en carpetas normalizadas por sector y fecha.',
          'Generar la planilla de remisión oficial para la entrega física de documentos al área de Gestión Documental EPM.',
          'Consolidar el reporte diario de descargas y legalizaciones para la coordinación externa (Ricardo EPM).',
          'Presentar el informe de cumplimiento de KPIs (Metas vs Ejecución) en el Comité Comercial mensual.',
          'Realizar el cierre administrativo del proyecto asegurando que no queden órdenes de trabajo pendientes.'
        ],
        responsibles: ['Luisa Cadavid', 'Gerencia Operativa']
      }
    ]
  }
];
