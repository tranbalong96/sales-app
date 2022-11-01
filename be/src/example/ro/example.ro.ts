import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ExampleRo {
    @ApiProperty({ type: String })
    @Expose()
    id: string;

    @ApiProperty({ type: String })
    @Expose()
    name: string;

    @ApiProperty({ type: String })
    @Expose()
    code: string;
}
