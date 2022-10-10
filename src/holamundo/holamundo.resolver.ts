import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HolamundoResolver {
  @Query(() => String, {
    description: 'Hola mundo es lo que retorna', //descripcion de la query
    name: 'hello', //nombre de la query
  })
  hellowWorld(): string {
    return 'hola mundo';
  }
  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomFromZeroTo',
    description: 'From zero to argument TO',
  })
  getRandomZeroTo(
    //el nulltable es para decirle que se pude no enviar datos ya que por defecto me pone un 6
    @Args('to', { nullable: true, type: () => Int }) to = 6, //args es para especificar que vienen argumentos
  ): number {
    return Math.floor(Math.random() * 10);
  }
}
