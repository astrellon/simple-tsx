import DataStore, { Modifier } from 'simple-data-store';

export interface TodoItem
{
    readonly text: string;
    readonly id: number;
}

export interface State
{
    readonly todoItems: TodoItem[];
}

let nextId = 0;
export const store = new DataStore<State>({todoItems: []});

export const addItem = (text: string): Modifier<State> =>
{
    const id = ++nextId;
    return (state: State) => ({todoItems: [...state.todoItems, {text, id}]});
}

export const removeItem = (id: number): Modifier<State> =>
{
    return (state: State) => ({todoItems: state.todoItems.filter(item => item.id !== id)});
}