import { resolve } from 'path';

/**
 * @param str file or folder in client
 * @returns Path to client concatenated with str
 */
export function resolveClientPath(...str: string[]) {
  return resolve(__dirname, '..', '..', 'client', ...str);
}
