import { TemplateResult } from 'lit-html';
import { render } from 'lit-html/lib/lit-extended';

/**
 * This module defines a simple declarative application framework that utilizes `lit-html`, based on components and 
 * unidirectional data flow of "props".
 */

export type Connect = (store: any) => <P extends ConnectProps>(component: Component<P>) => WrappedComponent<Omit<P, "dispatch">>
export const connect: Connect = (store) => (component) => {
  // FIXME: Replace `as any` with proper type
  return (props) => component(Object.assign({}, store, props, {dispatch: initialize}) as any);
};

export const initialize = (store: any) => (values: any) => (EntryComponent: Component) => render(connect(store)(EntryComponent)(values), document.getElementById('app'));

export type Component<P = {}> = (props: P) => TemplateResult;
export type WrappedComponent<P = {}> = (props: P) => TemplateResult;
export type ConnectProps = {dispatch: (newStore: any) => void};

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
declare type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
declare type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
