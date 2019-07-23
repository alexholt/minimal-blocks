import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/theme.css';

import { registerCoreBlocks } from '@wordpress/block-library';
import { getSaveElement, createBlock, getBlockTypes } from '@wordpress/blocks';
import { render, createElement, Fragment } from '@wordpress/element';
import { toHTMLString, create } from '@wordpress/rich-text';

import { registerCustomBlocks } from './custom-blocks';

registerCoreBlocks();
registerCustomBlocks();

const quote = createBlock('core/quote', { align: 'left', value: 'Hello, world' });
const customContainer = getSaveElement(
  'blox/container-with-header',
  { content: 'This is a custom container that will take other blocks as children' },
  [ quote ]
);

const heading = getSaveElement('core/heading', { level: 2, content: 'The quick brown fox jumped over the lazy dog.' });

const everyBlockName = getBlockTypes().map(block => `<li>${block.name}</li>`);

const listHTML = toHTMLString({
  value: create({ html: everyBlockName }),
});

const allBlocks = getSaveElement('core/list', { values: everyBlockName.join('') });

const post = (
  <Fragment>
    {heading}
    {customContainer}
    {getSaveElement('core/heading', { level: 3, content: 'All registered blocks'}) }
    {allBlocks}
  </Fragment>
);

render(post, document.querySelector('#app'));
