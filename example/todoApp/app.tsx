import render from '../../src';
import { TodoItem, addItem, removeItem } from './store';

interface Props
{
    readonly items: TodoItem[];
}

export default function App(props: Props): JSX.Element
{
    return <div>
        <button onclick={promptAddItem}>Add Item</button>
        { props.items.map(item => <Item item={item}/>)}
    </div>
}

function Item(props: {item: TodoItem})
{
    const {item} = props;
    return <div>{item.text} <button onclick={() => removeItem(item.id)}>X</button></div>;
}

function promptAddItem()
{
    const text = prompt('Add new todo item');
    if (text)
    {
        addItem(text);
    }
}