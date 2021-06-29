
interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    //
  }
}

export { CreateUserService }

// 1:21:00