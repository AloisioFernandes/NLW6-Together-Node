// sobrescrevendo  request do express, adicionando user_id ao request
declare namespace Express {
  export interface Request {
    user_id: string;
  }
}