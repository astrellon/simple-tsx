import render from '../../src';
import { TodoItem, addItem, removeItem, State, store } from './store';

interface Props
{
    readonly state: State;
}

export default function App(props: Props): JSX.Element
{
    const items = props.state.todoItems;

    return <div>
        <h1>Todo App using Simple Data Store</h1>
        <button onclick={promptAddItem}>Add Item</button>
        { items.map(item => <Item item={item}/>)}
    </div>
}

function Item(props: {item: TodoItem})
{
    const {item} = props;
    return <div>
        {item.text}
        <button onclick={() => store.execute(removeItem(item.id))}>X</button>
    </div>;
}

function promptAddItem()
{
    const text = prompt('Add new todo item');
    if (text)
    {
        store.execute(addItem(text));
    }
}