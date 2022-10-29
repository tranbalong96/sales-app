import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import entities from '../@entites';

@Module({})
export class MysqlDatabaseModule {
    static forRoot(): DynamicModule {
        return {
            module: MysqlDatabaseModule,
            imports: [
                TypeOrmModule.forRootAsync({
                    imports: [ConfigModule],
                    inject: [ConfigService],
                    useFactory: async (
                        configService: ConfigService,
                    ): Promise<TypeOrmModuleOptions> => {
                        return {
                            type: configService.get<string>(
                                'DB_TYPE',
                            ) as 'mysql',
                            host: configService.get<string>('DB_HOST'),
                            port: +configService.get<string>('DB_PORT') || 3309,
                            username: configService.get<string>('DB_USERNAME'),
                            password: configService.get<string>('DB_PASSWORD'),
                            database: configService.get<string>('DB_DATABASE'),
                            autoLoadEntities: true,
                            entities,
                            synchronize:
                                configService
                                    .get<string>('DB_SYNCHRONIZE')
                                    .toLowerCase() === 'true',
                            timezone:
                                configService.get<string>('DB_TIMEZONE') ||
                                'local',
                            logging: ['error'],
                            extra: {
                                decimalNumbers: true,
                            },
                            multipleStatements: true,
                        };
                    },
                }),
            ],
            exports: [TypeOrmModule],
        };
    }
}
