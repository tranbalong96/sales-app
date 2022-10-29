import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlDatabaseModule } from './@database';
import { ConfigModule } from './@config';
import { ExampleModule } from './example/example.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MysqlDatabaseModule.forRoot(),
        ExampleModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
