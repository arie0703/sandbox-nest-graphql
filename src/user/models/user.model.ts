import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {

  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  age: number;

  @Field({ nullable: true })
  comment: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}