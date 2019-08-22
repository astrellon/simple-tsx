import render from '../src';
import App from './sampleApp';
import { subscribe, State, initStore, addItem } from './sampleStore';

subscribe(renderApp);
addItem('Item 1');
addItem('Item 2');

function renderApp(state: State)
{
    render(document.body, <App items={state} />);
}