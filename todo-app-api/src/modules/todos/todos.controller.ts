import { Controller, Get, Post, Delete, Param, Request } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo as TodoEntity } from './todo.entity';
import { TodoDto } from './dto/todo.dto';
import { apiResponse } from './interfaces/apiResponse.interface';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Get()
    findAll(): Promise<TodoEntity[]> {
        const response = this.todoService.findAll();
        return response;
    }

    @Post()
    create(@Request() req): Promise<TodoEntity> {
        const todo: TodoDto = {
            title: req.body.title,
            description: req.body.description,
            dueDate: new Date(),
            priority : req.body.priority,
        }
        const response = this.todoService.create(todo);
        return response;
    }

    @Get(':id')
    findOneById(@Param('id') id: number): Promise<TodoEntity> {
        const response = this.todoService.findOneById(id);
        return response;
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<apiResponse> {
        
        const deleted = await this.todoService.delete(id);
        if (deleted === 0) {
            return {
                statusCode: 400,
                message: 'Record not deleted'
            };
        }
        return {
            statusCode: 200,
            message: 'Successfully deleted'
        };
    }
}