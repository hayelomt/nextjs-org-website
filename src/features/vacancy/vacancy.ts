import { Model } from '../../core/ui/utils/types';

export type Vacancy = {
  title: string;
  description: string;
  deadline: string;
  positions: number;
  active: number;
  min_experience: string;
} & Model;
