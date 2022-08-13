import { Model } from '../../core/ui/utils/types';

export type Vacancy = {
  title: string;
  description: string;
  deadline: string;
  positions: number;
  active: number;
  min_experience: string;
} & Model;

export type VacancyCreate = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  vacancy_id: number;
  cv: File | null;
};
