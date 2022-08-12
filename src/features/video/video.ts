import { Model } from '../../core/ui/utils/types';

export type Video = {
  title: string;
  tag: string;
  link: string;
  date: string;
} & Model;
