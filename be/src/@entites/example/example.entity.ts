import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity('example')
export class ExampleEntity extends BaseEntity {
    @Column({
        name: 'code',
    })
    code: string;

    @Column({
        name: 'name',
    })
    name: string;
}
