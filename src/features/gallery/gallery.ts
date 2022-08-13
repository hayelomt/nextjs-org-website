import { Media, Model } from '../../core/ui/utils/types';

export type Gallery = {
  alt: string;
  mode: 'landscape' | 'portrait';
  media: Media[];
} & Model;
