import { v4 } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UserService {

  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findOneById(id: string): User {
    const result = this.users.find((User) => id === User.id);
    if (!result) {
      throw new NotFoundException();
    }
    return
  }

  insert(name: string, address: string, age: number, comment: string): User {
    const user = new User();
    user.id = v4();
    user.name = name;
    user.address = address;
    user.age = age;
    user.comment = comment;
    user.createdAt = new Date();

    this.users.push(user);

    return user;
  }
}
