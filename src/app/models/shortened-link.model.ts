export interface ShortenedLink {
  ok: boolean;
  result: ShortenedLinkResult;
}

export interface ShortenedLinkResult {
  short_link: string;
  original_link: string;
}

export interface ShortenedLinkResponse {
  ok: boolean;
  shortLink: string;
  originalLink: string;
}
