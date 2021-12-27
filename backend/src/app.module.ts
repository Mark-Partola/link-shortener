import { Module } from '@nestjs/common';
import { LinkShortenerController } from './link-shortener.controller';
import { LinkShortenerService } from './link-shortener.service';

@Module({
  imports: [],
  controllers: [LinkShortenerController],
  providers: [LinkShortenerService],
})
export class AppModule {}
