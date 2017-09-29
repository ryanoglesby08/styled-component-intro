import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Link from '../../src/components/General/Link';

const BasicLink = withInfo('Links')(() => 
<Link href="https://www.telus.com">Click me</Link>  
);


const LinkStory = storiesOf('General/Link', module)
.add('Link demo', BasicLink);
export default LinkStory;