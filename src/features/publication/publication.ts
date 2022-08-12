import { Media, Model } from '../../core/ui/utils/types';

export type Publication = {
  title: string;
  description: string;
  date: string;
  tag: string;
  content: string;
  media: Media[];
} & Model;
