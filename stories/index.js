import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from '../src/components/Header';
import ArtistImage from '../src/components/ArtistImage';

storiesOf('Header', module)
  .add('Default', () => <Header text="React Spotify" />)

storiesOf('ArtistImage', module)
  .add('Default', () => <ArtistImage src="https://d3rt1990lpmkn.cloudfront.net/640/b4db91b921c68fee49a81ac1a1edf2e1160eb51e" />)
  .add('size 300px', () => <ArtistImage src="https://d3rt1990lpmkn.cloudfront.net/640/b4db91b921c68fee49a81ac1a1edf2e1160eb51e" size="300" />)
