import React from 'react'
import PropTypes from 'prop-types'

import { Text, StyleSheet } from 'react-native'

import { fonts } from '../../foundation/defaultTheme'

const styles = StyleSheet.create({
  medium: {
    fontFamily: fonts.telus,
    fontSize: '1rem',
    letterSpacing: -0.8,
    lineHeight: 1.5,
    fontWeight: '700',
  }
})

const SizedText = ({ size, style, children }) => (
  <Text style={[styles[size], style]}>
    {children}
  </Text>
)
SizedText.propTypes = {
  size: PropTypes.oneOf(['medium'])
}

export default SizedText
