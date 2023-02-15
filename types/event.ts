import { Image } from '@/types';

export interface Event {
  /** イベント名 */
  title: string;

  /** 開催日時(開始時間) */
  date: string;

  /** 開催場所 */
  place: string;

  /** 開催場所の住所 */
  address?: string;

  /** twipla URL */
  url: string;

  /** サムネイル画像 */
  thumbnail: Image;
}
