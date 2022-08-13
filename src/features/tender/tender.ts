import { Model } from '../../core/ui/utils/types';

export type Tender = {
  title: string;
  description: string;
  deadline: string;
} & Model;
