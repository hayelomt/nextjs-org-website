import { Media, Model } from '../../core/ui/utils/types';

export type UpcomingEvent = {
  title: string;
  description: string;
  date: string;
  media: Media[];
} & Model;
