import { Injectable } from '@nestjs/common';
import { LinkRepositoryService } from 'src/link-repository.service';

@Injectable()
export class LinkResolverService {
  constructor(private readonly linkRepositoryService: LinkRepositoryService) {}

  public getOriginalLink(hash: string): string {
    return this.linkRepositoryService.getLink({ hash });
  }
}
