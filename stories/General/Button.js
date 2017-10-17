import React from 'react'

import { storiesOf } from '@storybook/react'
// import { withInfo } from '@storybook/addon-info';

import { View, StyleSheet } from 'react-native'

import Button from '../../src/components/General/Button'

import { colors, spaces } from '../../src/foundation/defaultTheme'


const styles = StyleSheet.create({
  verticalDivider: {
    height: spaces.wide
  },

  centered: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '50%'
  },

  block: {
    display: 'block'
  },

  invertedContainer: {
    backgroundColor: colors.secondary,
    padding: spaces.base
  }
})

const VerticalDivider = () => <View style={styles.verticalDivider}/>
const Block = ({ children, style }) => <View style={[styles.block, style]}>{children}</View>

const BasicButton = () => (
  <View style={styles.centered}>
    <VerticalDivider/>

    <Block>
      <Button variant="primary" onPress={() => console.log('click on primary')}>Primary button</Button>
    </Block>

    <VerticalDivider/>

    <Block>
      <Button variant="secondary" onPress={() => console.log('click on secondary')}>Secondary button</Button>
    </Block>

    <VerticalDivider/>

    <Block style={styles.invertedContainer}>
      <Button variant="inverted" onPress={() => console.log('click on inverted')}>Inverted button</Button>
    </Block>
  </View>
)


const ButtonStory = storiesOf('General/Button', module).add('Variants', BasicButton)

export default ButtonStory
