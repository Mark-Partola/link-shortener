import { Module } from '@nestjs/common';
import { LinkRepositoryService } from './link-repository.service';
import { LinkResolverController } from './link-resolver/link-resolver.controller';
import { LinkResolverService } from './link-resolver/link-resolver.service';
import { LinkShortenerController } from './link-shortener/link-shortener.controller';
import { LinkShortenerService } from './link-shortener/link-shortener.service';

@Module({
  imports: [],
  controllers: [LinkShortenerController, LinkResolverController],
  providers: [LinkShortenerService, LinkResolverService, LinkRepositoryService],
})
export class AppModule {}
