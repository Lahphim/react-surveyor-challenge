export interface ApiError {
  code: string;
  detail: string;
}

export type ApiErrorList = {
  errors: ApiError[];
};
