
export interface Step {
  id: string;
  title: string;
  detail: string[];
  responsibles: string[];
  critical?: boolean;
  notes?: string;
  validation?: string;
}

export interface Phase {
  id: string;
  name: string;
  description: string;
  color: string;
  steps: Step[];
}

export enum ViewMode {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
  STAIRCASE = 'STAIRCASE',
  GROWTH_DIAGRAM = 'GROWTH_DIAGRAM'
}
