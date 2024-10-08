type SuccessStatusCodeMessage = {
  200: 'OK';
  201: 'Created';
  202: 'Accepted';
  203: 'Non-Authoritative Information';
  204: 'No Content';
  205: 'Reset Content';
  206: 'Partial Content';
};

export interface CommonResponse<T> {
  status: number;
  message: SuccessStatusCodeMessage[keyof SuccessStatusCodeMessage];
  isLogin: boolean;
  data: T;
}
