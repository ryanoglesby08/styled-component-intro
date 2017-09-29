import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../../src/components/General/Button';

const BasicButton = withInfo('Buttons')(() => {
  const style={
    padding: '10px'
  }
  return (
    <div style={{width: '100%'}}>
      <div style={style}>
        <Button>Default button</Button>
      </div>
      <div style={style}>
        <Button variant="secondary">Secondary button</Button>
      </div>
      <div style={Object.assign({}, style, {backgroundColor: '#4b286d'})}>
        <Button variant="inverted">Inverted button</Button>
      </div>
      <div style={style}>
        <Button variant="danger">Danger button</Button>
      </div>
      <div style={style}>
        <Button disabled>Disabled button</Button>
      </div>
    </div>
  )
  }
);


const ButtonStory = storiesOf('General/Button', module)
.add('Variants', BasicButton);
export default ButtonStory;