export interface TodoItem
{
    readonly text: string;
    readonly id: number;
}

export type State = TodoItem[];

export type Subscription = (state: State) => void;

let nextId = 0;
let store: State = [];
let subscription: Subscription = () => {};

export function initStore(items: TodoItem[] = [])
{
    store = items;
    subscription(store);
}

export function addItem(text: string)
{
    const id = ++nextId;
    store = [...store, {text, id}];
    subscription(store);
}

export function removeItem(id: number)
{
    store = store.filter(item => item.id !== id);
    subscription(store);
}

export function subscribe(callback: Subscription)
{
    subscription = callback;
}