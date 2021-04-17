import { Logger } from './logger';

export const LegacyLogger: Logger = {
  prefix: 'legacyLogger',
  log: (message) => {
    console.log(`legacyLogger: ${message}\n`);
  },
};
