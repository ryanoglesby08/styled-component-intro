const colors = {
  accessibleGreen: '#248700',
  telusGreen: '#6c0',
  panache: '#f4f9f2',
  shuttleGrey: '#54595f',
  shark: '#2a2c2e',
  athensGrey: '#f7f7f8',
  telusPurple: '#4b286d',
  whiteLilac: '#f2eff4',
  cardinal: '#c12335',
  lavenderBlush: '#fff6f8',
  white: '#fff',
  gainsboro: '#d8d8d8',
  get primary(){ return this.accessibleGreen },
  get secondary(){ return this.telusPurple },
  get disabled(){ return this.shuttleGrey },
  get danger(){ return this.cardinal }
}

const zIndex = {
  negative: -1,
  dropdownBackdrop: 900,
  dropdown: 1000,
  navigation: 1000,
  modal: 1500,
  modalBackdrop: 1400,
  popover: 1600
}

const icons = {
  caretDown: '\f105',
  caretUp: '\f106',
  checkmark: '\f101',
  chevron: '\f107',
  exclamationPointCircle: '\f103',
  expander: '\f113',
  hamburger: '\f112',
  incomplete: '\f104',
  location: '\f110',
  minus: '\f109',
  plus: '\f108',
  questionMarkCircle: '\f102',
  spyglass: '\f111',
  times: '\f104'
}

const fonts = {
  sans: 'Arial, sans-serif',
  serif: 'Georgia, serif',
  telus: `'TELUS-Web', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
  icons: 'TELUS Core Icons'
}

const fontWeights = {
  thin: 300,
  light: 400,
  roman: 500,
  medium: 700
}

const spaces = {
  _baseInRem: 1,
  get base() { return `${this._baseInRem}rem` },
  get xTight(){ return `${this._baseInRem * .25}rem` },
  get tight(){ return `${this._baseInRem * .5}rem` },
  get wide(){ return `${this._baseInRem * 2}rem` } 
}



export default {
  colors,
  zIndex,
  icons,
  fonts,
  fontWeights,
  spaces
}