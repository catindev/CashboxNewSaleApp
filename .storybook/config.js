import { addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    panelPosition: 'right'
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.story\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
