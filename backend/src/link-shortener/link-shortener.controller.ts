import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { LinkShortenerService } from './link-shortener.service';

class PostValueRequestDTO {
  @ApiProperty()
  link: string;
}

interface PostValueResponseDTO {
  link: string;
}

@Controller('api/v1')
@ApiTags('Links')
export class LinkShortenerController {
  constructor(private readonly linkShortenerService: LinkShortenerService) {}

  @Post('shorten')
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
