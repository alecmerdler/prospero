import { html, render } from 'lit-html/lib/lit-extended';
import { TemplateResult } from 'lit-html';

import { Component, initialize } from './framework';
import { GooeyMenu } from './components/gooey-menu';

export const Button: Component<ButtonProps> = (props) => {
  return html`
    <button onclick="${props.engage}">Engage</button>
  `;
};

export const App: Component<AppProps> = (props) => {
  const engage = () => {
    console.log(props.name);
    props.dispatch({name: 'Alec'});
  };

  return html`<div>
    <div style="width: 100%; height: 100%;">
      ${GooeyMenu({})}
    </div>
  </div>`;
};

// FIXME: Global store :(
const store = {};

initialize(store)({})(App);

type AppProps = {
  name: string;
  dispatch: (newStore: any) => void;
};

export type ButtonProps = {
  engage: () => void;
};
