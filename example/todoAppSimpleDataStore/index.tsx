import render from '../../src';
import App from './app';
import { store, addItem, State } from './store';

store.subscribeAny(renderApp);
store.execute(addItem('Item 1'));
store.execute(addItem('Item 2'));

function renderApp(state: State)
{
    render(document.body, <App state={state} />);
}