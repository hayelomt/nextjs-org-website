import { Model } from '../../core/ui/utils/types';

export type Tender = {
  title: string;
  description: string;
  deadline: string;
} & Model;

export type TenderCreate = {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  company: string;
  tender_id: number;
  doc: File | null;
};
