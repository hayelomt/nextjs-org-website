export type Media = {
  id: number;
  name: string;
  file_name: string;
  size: number;
};

export type Model = {
  id: number;
  created_at: string;
  updated_at: string;
};

export type Paginated<T> = {
  current_page: number;
  total: number;
  per_page: number;
  data: T[];
};

export type ValidationError = {
  errors: Record<string, string>;
};

export type ValidationHandler = (err: ValidationError) => void;

export type ErrorHandler = (err: string) => void;

export type SuccessHandler = (data: any, status?: number) => void;
