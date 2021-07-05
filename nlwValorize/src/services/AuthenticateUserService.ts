import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    // Verificar se email existe
    const user = await usersRepositories.findOne({
      email
    })

    if(!user) {
      throw new Error("Email/Password incorrect")
    }

    // Verificar se senha está correta
    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    // Gerar token
    const token = sign({
      email: user.email
    }, '64aa5879634dea4ad9a0fa6661919c25', {
      subject: user.id,
      expiresIn: '1d' // 1 dia
    })

    return token
  }
}

export { AuthenticateUserService }