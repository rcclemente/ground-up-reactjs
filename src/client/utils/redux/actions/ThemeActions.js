export const CHANGE_THEME = 'theme:changeTheme'

export const changeTheme = selectedTheme => {
  return {
    type: CHANGE_THEME,
    payload: {
      theme: selectedTheme
    }
  }
}
