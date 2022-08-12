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
