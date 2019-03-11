import React from 'react';
import ReactDOM from 'react-dom';
import App from './Gear';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gear />, div);
  ReactDOM.unmountComponentAtNode(div);
});
