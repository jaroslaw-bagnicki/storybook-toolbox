import React from 'react';
import { linkTo } from '@storybook/addon-links/dist';
import Welcome from '@storybook/react/dist/demo/Welcome';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
  name: 'to Storybook',
};
