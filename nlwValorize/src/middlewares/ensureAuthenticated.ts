import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o token
  const authToken = request.headers.authorization

  // Validar se token está preenchido
  if(!authToken) {
    return response.status(401).end()
  }

  // Verificar se token é válido
  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, '64aa5879634dea4ad9a0fa6661919c25') as IPayload
    
    // Recuperar informações do usuário
    request.user_id = sub

    return next()
  }catch(err) {
    return response.status(401).end()
  }
}
