import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { todosProviders } from './todos.providers';

@Module({
    controllers: [TodosController],
    providers: [TodosService, ...todosProviders],
    exports: [TodosService],
})
export class TodosModule {}