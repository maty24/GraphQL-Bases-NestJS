import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType() //objeto personalizado y graph para hacer peticiones
export class Todo {
  @Field(() => Int)
  id: number;

  @Field(() => String) //el field es para saber  que tipo de campo es
  description: string;

  @Field(() => Boolean)
  done = false;
}
