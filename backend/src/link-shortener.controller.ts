import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { LinkShortenerService } from './link-shortener.service';

interface GetLinkRequestParams {
  hash: string;
}

interface PostValueRequestDTO {
  value: string;
}

interface PostValueResponseDTO {
  link: string;
}

@Controller()
export class LinkShortenerController {
  constructor(private readonly linkShortenerService: LinkShortenerService) {}

  @Get(':hash')
  getLink(@Param() params: GetLinkRequestParams, @Res() response: Response) {
    const link = this.linkShortenerService.getOriginalLink(params.hash);

    if (!link) {
      throw new NotFoundException();
    }

    response.redirect(link);
  }

  @Post()
  postValue(@Body() body: PostValueRequestDTO): PostValueResponseDTO {
    const isValid = this.linkShortenerService.isValidUrl(body.value);

    if (!isValid) {
      throw new BadRequestException();
    }

    return {
      link: this.linkShortenerService.shorten(body.value),
    };
  }
}
