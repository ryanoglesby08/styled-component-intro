import React from 'react'

import { View, StyleSheet } from 'react-native'
import Media from 'react-media'


const styles = StyleSheet.create({
  button: {
    height: '3.25rem',
    minWidth: 180,
    borderRadius: 4,
    cursor: 'pointer'
  },
  fullWidth: {
    display: 'flex',
    alignItems: 'stretch',
    width: '100%'
  },
  inline: {
    display: 'inline-flex',
    alignItems: 'stretch',
    minWidth: 180
  }
})

const FullWidth = ({children}) => (
  <View style={[styles.button, styles.fullWidth]}>
    {children}
  </View>
)

const Inline = ({children}) => (
  <View style={[styles.button, styles.inline]}>
    {children}
  </View>
)

const ResponsiveButton = ({children}) => (
  <Media query="(min-width: 768px)">
    {matches => matches ? (
      <Inline>{children}</Inline>
    ) : (
      <FullWidth>{children}</FullWidth>
    )}
  </Media>
)

export default ResponsiveButton
