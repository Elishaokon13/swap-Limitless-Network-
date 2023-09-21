import { shadows } from '../../theme/base'
import { darkColors, lightColors } from '../../theme/colors'
import { TooltipTheme } from './types'

export const light: TooltipTheme = {
  background: darkColors.secondaryDark,
  text: darkColors.text,
  boxShadow: shadows.tooltip,
}

export const dark: TooltipTheme = {
  background: lightColors.secondaryBright,
  text: lightColors.text,
  boxShadow: shadows.tooltip,
}
