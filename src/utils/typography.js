import Typography from "typography"
import wordpress2014Theme from "typography-theme-wordpress-2014"

wordpress2014Theme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {color: "#000000"}
  })

const typography = new Typography(wordpress2014Theme)

export default typography
export const rhythm = typography.rhythm