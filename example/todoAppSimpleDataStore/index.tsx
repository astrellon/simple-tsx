import { vdom, render } from '../../src';
import App from './app';
import { store, addItem, State, initStore, defaultState } from './store';

const root = document.getElementById('root');

initStore(loadState());

renderApp(store.state());
store.subscribeAny(saveState);
store.subscribeAny(renderApp);

function renderApp(state: State)
{
    if (root)
    {
        render(<App state={state} />, root);
    }
}

function saveState(state: State)
{
    localStorage.setItem('todoState', JSON.stringify(state));
}

function loadState()
{
    const stateJson = localStorage.getItem('todoState');
    if (stateJson)
    {
        return JSON.parse(stateJson) as State;
    }

    return defaultState;
}