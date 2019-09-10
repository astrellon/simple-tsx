import { vdom, render } from '../../src';
import App from './app';
import { subscribe, State, addItem } from './store';

const root = document.getElementById('root');
if (root == null)
{
    alert('Missing root!');
}

subscribe(renderApp);
addItem('Item 1');
addItem('Item 2');

function renderApp(state: State)
{
    if (root)
    {
        render(<App items={state} />, root);
    }
}