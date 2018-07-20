interface IClipEmbed {
  content: string;
  height: number;
  width: number;
  media_domain_url: string;
  scrolling: boolean;
}

export interface IClip {
  pk: string;
  sk: string;
  id: string;
  created_utc: number;
  title: string;
  author: string;
  permalink: string;
  url: string;
  thumbnail: string;
  embed: IClipEmbed;
}
