import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from '../styles/mui-theme'
import theme from '../styles/theme'
import { StyleSheet, css } from 'aphrodite'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Form from 'react-formal'
import GSTextField from './forms/GSTextField'
import GSDateField from './forms/GSDateField'
import GSScriptField from './forms/GSScriptField'

// Needed for MaterialUI
injectTapEventPlugin()

Form.addInputTypes({
  string: GSTextField,
  number: GSTextField,
  date: GSDateField,
  email: GSTextField,
  script: GSScriptField
})

const styles = StyleSheet.create({
  root: {
    ...theme.text.body,
    height: '100%'
  }
})

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className={css(styles.root)}>
      {children}
    </div>
  </MuiThemeProvider>
)

App.propTypes = {
  children: React.PropTypes.object
}

export default App