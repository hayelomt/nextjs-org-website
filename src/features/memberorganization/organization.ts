import { Media, Model } from '../../core/ui/utils/types';

export type Organization = {
  name: string;
  media: Media[];
} & Model;
