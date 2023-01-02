import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { TodosController } from './modules/todos/todos.controller';
import { TodosModule } from './modules/todos/todos.module';
import { TodosService } from './modules/todos/todos.service';

@Module({
  imports: [DatabaseModule,ConfigModule.forRoot({ isGlobal: true }), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}