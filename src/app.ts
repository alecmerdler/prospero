import { html, render } from 'lit-html/lib/lit-extended';
import { TemplateResult } from 'lit-html';

import { Component, initialize } from './framework';

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
    ${Button({engage})}
    <div>
      ${props.name ? props.name.toUpperCase() : 'Unknown'}
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
