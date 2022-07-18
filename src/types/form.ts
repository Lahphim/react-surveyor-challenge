export interface FormState {
  status: 'idle' | 'submitting' | 'succeeded' | 'failed';
  errorList: string[];
}

export interface Login {
  email: string;
  password: string;
}
