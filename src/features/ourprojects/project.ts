import { Media, Model } from '../../core/ui/utils/types';

export type Project = {
  title: string;
  tag: string;
  description: string;
  content: string;
  progress: string;
  media: Media[];
} & Model;
