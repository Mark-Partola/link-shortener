import { Injectable } from '@nestjs/common';
import { checkURLIsValid } from 'src/core/check-url-is-valid';
import { createShortenLinkHash } from 'src/core/create-shorten-link-hash';
import { LinkRepositoryService } from 'src/link-repository.service';

@Injectable()
export class LinkShortenerService {
  constructor(private readonly linkRepositoryService: LinkRepositoryService) {}

  public isValidUrl(value: string): boolean {
    return checkURLIsValid(value);
  }

  public shorten(link: string): string {
    const hash = createShortenLinkHash();

    const linkByHash = this.linkRepositoryService.getLink({ hash });

    if (linkByHash) {
      return this.shorten(link);
    }

    this.linkRepositoryService.saveLink({ hash, link });

    return hash;
  }

  public getOriginalLink(hash: string): string {
    return this.linkRepositoryService.getLink({ hash });
  }
}
