import { ApiError, ApiErrorList } from "@/types/error";

const getErrorList = (payload: ApiErrorList) => {
  if (!payload) { return []; }

  const { errors } = payload;
  const errorList = errors.map((item: ApiError, _index: number) => {
    return item.detail;
  });
  
  return errorList;
};

export { getErrorList };
