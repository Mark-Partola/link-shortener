import { Injectable } from '@nestjs/common';

const map = new Map<string, string>();

interface ISaveLinkParams {
  hash: string;
  link: string;
}

interface IGetLinkParams {
  hash: string;
}

@Injectable()
export class LinkRepositoryService {
  public saveLink(params: ISaveLinkParams): void {
    map.set(params.hash, params.link);
  }

  public getLink(params: IGetLinkParams): string {
    return map.get(params.hash);
  }
}
