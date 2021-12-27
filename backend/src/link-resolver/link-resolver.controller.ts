import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { LinkResolverService } from './link-resolver.service';

class GetLinkRequestParams {
  @ApiProperty()
  hash: string;
}

@Controller()
@ApiTags('Links')
export class LinkResolverController {
  constructor(private readonly linkResolverService: LinkResolverService) {}

  @Get(':hash')
  getLink(@Param() params: GetLinkRequestParams, @Res() response: Response) {
    const link = this.linkResolverService.getOriginalLink(params.hash);

    if (!link) {
      throw new NotFoundException();
    }

    response.redirect(link);
  }
}
