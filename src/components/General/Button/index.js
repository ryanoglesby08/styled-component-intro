import React from 'react'
import PropTypes from 'prop-types'

import { Animated, TouchableOpacity, View, StyleSheet } from 'react-native'

import { colors, spaces } from '../../../foundation/defaultTheme'

import Text from '../Text'
import ResponsiveButton from './ReponsiveButton'

const boxShadow = (color) => `0 0 0 1px ${color}`

const bgColors = {
  primary: {
    default: colors.primary,
    hover: colors.white,
  },
  secondary: {
    default: colors.secondary,
    hover: colors.white,
  },
  inverted: {
    default: colors.white,
    hover: 'transparent'
  }
}

const layoutStyles = StyleSheet.create({
  fill: {
    flex: 1,
    borderRadius: 4
  },
  centerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
})

const colorStyles = StyleSheet.create({
  primaryButtonHover: {
    boxShadow: boxShadow(bgColors.primary.default),
  },
  primaryText: {
    color: colors.white
  },
  primaryTextHover: {
    color: colors.primary
  },

  secondaryButtonHover: {
    boxShadow: boxShadow(bgColors.secondary.default),
  },
  secondaryText: {
    color: colors.white
  },
  secondaryTextHover: {
    color: colors.secondary
  },

  invertedButtonHover: {
    boxShadow: boxShadow(bgColors.inverted.default)
  },
  invertedText: {
    color: colors.shark
  },
  invertedTextHover: {
    color: colors.white
  },
})

class HoverButton extends React.Component {
  state = {
    hover: false,
    transitionBg: new Animated.Value(0)
  }

  toggleHover = () => {
    Animated.timing(
      this.state.transitionBg,
      {
        toValue: this.state.hover ? 0 : 1,
        duration: 200,
      }
    ).start()

    this.setState({ hover: !this.state.hover })
  }

  render() {
    const { variant, onPress, children } = this.props

    return (
      <TouchableOpacity
        accessibilityComponentType="button"
        onPress={onPress}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={layoutStyles.fill}
      >
        <Animated.View
          style={[
            layoutStyles.fill,
            layoutStyles.centerContent,
            this.state.hover && colorStyles[`${variant}ButtonHover`],
            {
              backgroundColor: this.state.transitionBg.interpolate({
                inputRange: [0, 1],
                outputRange: [bgColors[variant].default, bgColors[variant].hover]
              })
            }
          ]}
        >
          {children(this.state.hover)}
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

const textStyles = StyleSheet.create({
  spacing: {
    paddingLeft: spaces.base,
    paddingRight: spaces.base,
  },
})

const ButtonText = ({ hover, variant, children }) => (
  <Text
    size="medium"
    style={[
      textStyles.spacing,
      hover ? colorStyles[`${variant}TextHover`] : colorStyles[`${variant}Text`],
    ]}
  >
    {children}
  </Text>
)

const Button = ({ variant, onPress, children }) => (
  <ResponsiveButton>
    <HoverButton variant={variant} onPress={onPress}>
      {hover => <ButtonText hover={hover} variant={variant}>{children}</ButtonText>}
    </HoverButton>
  </ResponsiveButton>
)

Button.propTypes = {
  /**
   * available variants: primary, secondary, inverted
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  children: PropTypes.string.isRequired
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button
