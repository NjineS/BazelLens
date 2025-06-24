export interface BazelTarget {
  name: string;
  kind: string;
  label: string;
  tags?: string[];
  dependencies?: string[];
}

export interface BuildStatus {
  target: string;
  success: boolean;
  output?: string;
  error?: string;
  durationMs?: number;
}
