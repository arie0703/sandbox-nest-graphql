import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) { }
  @Query(() => [User], { nullable: 'items' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User)
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.userService.findOneById(id);
  }

  @Mutation(() => User)
  insert(
    @Args('name') name: string,
    @Args('address') address: string,
    @Args('age') age: number,
    @Args('comment') comment: string,
  ): User {
    return this.userService.insert(name, address, age, comment);
  }
}
