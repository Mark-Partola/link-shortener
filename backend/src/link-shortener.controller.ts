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
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { LinkShortenerService } from './link-shortener.service';

class GetLinkRequestParams {
  @ApiProperty()
  hash: string;
}

class PostValueRequestDTO {
  @ApiProperty()
  link: string;
}

interface PostValueResponseDTO {
  link: string;
}

@Controller()
@ApiTags('Links')
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

  @Post('api/v1/shorten')
  shorten(@Body() body: PostValueRequestDTO): PostValueResponseDTO {
    const isValid = this.linkShortenerService.isValidUrl(body.link);

    if (!isValid) {
      throw new BadRequestException('Link is not a valid URL');
    }

    return {
      link: this.linkShortenerService.shorten(body.link),
    };
  }
}
