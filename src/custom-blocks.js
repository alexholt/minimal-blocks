import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

// This is needed for the JSX
import { createElement } from '@wordpress/element';

import './custom-blocks.css';


export const registerCustomBlocks = () => {

  registerBlockType('blox/container-with-header', {
    title: 'Container with Heading',
    icon: 'universal-access-alt',
    category: 'layout',

    attributes: {
      content: {
        type: 'array',
        source: 'children',
        selector: 'h2',
      }
    },

    edit: (props) => {
      const { attributes: { content }, setAttributes, className } = props;

      const onChangeContent = (content) => {
        setAttributes({content});
      };

      return (
        <section className={className}>
          <RichText
            tagName='h2'
            className={ className }
            onChange={ onChangeContent }
            value={ content }
          />
            <InnerBlocks/>
        </section>
      );
    },

    save: (props) => {
      const { attributes: { content, innerBlocks } } = props;

      return (
        <section className='container-with-header'>
          <div className='container-with-header--header'>
            <RichText.Content tagName="h2" value={content} />
          </div>

          <div className='container-with-header--body'>
            <InnerBlocks.Content />
          </div>
        </section>
      );
    }
  });

};

