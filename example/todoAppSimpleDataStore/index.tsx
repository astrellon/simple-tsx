import render from '../../src';
import App from './app';
import { store, addItem, State, initStore, defaultState } from './store';

initStore(loadState());

renderApp(store.state());
store.subscribeAny(saveState);
store.subscribeAny(renderApp);

function renderApp(state: State)
{
    render(document.body, <App state={state} />);
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