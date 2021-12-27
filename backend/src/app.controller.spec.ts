import { Test, TestingModule } from '@nestjs/testing';
import { LinkShortenerController } from './link-shortener.controller';
import { LinkShortenerService } from './link-shortener.service';

describe('AppController', () => {
  let linkShortenerController: LinkShortenerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LinkShortenerController],
      providers: [LinkShortenerService],
    }).compile();

    linkShortenerController = app.get<LinkShortenerController>(
      LinkShortenerController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(linkShortenerController.postValue({ value: '1' })).toBe(
        'Hello World!',
      );
    });
  });
});
