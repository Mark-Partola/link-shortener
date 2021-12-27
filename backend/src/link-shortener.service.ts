import { Injectable } from '@nestjs/common';
import { createShortenLinkHash } from './core/create-shorten-link-hash';

const map = new Map();

@Injectable()
export class LinkShortenerService {
  public isValidUrl(value: string): boolean {
    try {
      new URL(value);

      return true;
    } catch {
      return false;
    }
  }

  public shorten(value: string): string {
    const hash = createShortenLinkHash();

    if (map.has(hash)) {
      return this.shorten(value);
    }

    map.set(hash, value);

    return hash;
  }

  public getOriginalLink(hash: string): string {
    return map.get(hash);
  }
}
