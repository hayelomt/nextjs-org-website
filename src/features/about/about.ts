import { Media, Model } from '../../core/ui/utils/types';

export type Team = {
  name: string;
  position: string;
  media: Media[];
} & Model;

export type OtherSay = {
  name: string;
  position: string;
  testimony: string;
  media: Media[];
} & Model;
