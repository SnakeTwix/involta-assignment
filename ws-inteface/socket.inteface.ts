export interface ClientToServerEvents {
  'table/change': (data: CellChange) => void;
}

export interface ServerToClientEvents {
  'table/change': (data: CellChange) => void;
}

interface CellChange {
  x: number;
  y: number;
  data: string;
}

