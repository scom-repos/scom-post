import { Styles } from "@ijstech/components";
const Theme = Styles.Theme.ThemeVars;

export const getIconStyleClass = (color: string) => {
  const styleObj: any = {
    $nest: {
      'i-label': {
        transition: 'color 0.3s ease-in'
      },
      '&:hover': {
        $nest: {
          'i-icon svg': {
            fill: `${color}!important`
          },
          'i-label': {
            color: `${color}!important`
          }
        }
      }
    }
  };
  return Styles.style(styleObj)
}

export const hoverStyle = Styles.style({
 $nest: {
   '&:hover svg': {
      fill: `${Theme.text.primary} !important`
   }
 }
})
