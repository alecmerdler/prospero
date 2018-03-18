import { html, render } from 'lit-html/lib/lit-extended';
import { TemplateResult } from 'lit-html';

import { Component, initialize } from './framework';

export const App: Component<AppProps> = (props) => {
  const onClick = () => {
    console.log(props.name);
    props.dispatch({name: 'Alec'});
  };

  return html`<div>
    <button onclick="${onClick}">Engage</button>
    <div>
      ${props.name ? props.name.toUpperCase() : 'Unknown'}
    </div>
  </div>`;
};

// FIXME: Global store :(
const store = {};

initialize(store);

type AppProps = {
  name: string;
  dispatch: (newStore: any) => void;
};
