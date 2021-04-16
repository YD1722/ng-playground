export interface Logger {
  prefix: string;
  log: (message: string) => void;
}
