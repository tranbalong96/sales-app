import { DynamicModule, Global, Module } from '@nestjs/common';
import {
  ConfigFactory,
  ConfigModule as NestConfigModule,
  ConfigModuleOptions,
} from '@nestjs/config';
const nodeEnv = process.env.NODE_ENV || 'development';

@Global()
@Module({})
export class ConfigModule {
  static forRoot(): DynamicModule {
    return {
      module: ConfigModule,
      imports: [
        NestConfigModule.forRoot({
          isGlobal: true,
          envFilePath: [`.env.${nodeEnv}`, '.env'],
          cache: true,
        }),
      ],
    };
  }

  // noinspection JSUnusedGlobalSymbols
  static forFeature(options: ConfigFactory) {
    return NestConfigModule.forFeature(options);
  }
}
