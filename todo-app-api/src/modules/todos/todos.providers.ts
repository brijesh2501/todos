import { Todo } from './todo.entity';
import { TODO_REPOSITORY } from '../../core/constants';

export const todosProviders = [{
    provide: TODO_REPOSITORY,
    useValue: Todo,
}];
