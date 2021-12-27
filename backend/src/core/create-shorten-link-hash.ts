import { randomBytes } from 'crypto';

export function createShortenLinkHash(): string {
  return randomBytes(4).toString('base64url').slice(0, 5);
}
