import { ExampleEntity } from './../@entites/example/example.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ExampleEntity)
export class TransactionRepository extends Repository<ExampleEntity> {}
