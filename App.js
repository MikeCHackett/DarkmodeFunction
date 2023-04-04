import React from 'react';
import FunctionContextComponent from './hooks/FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

export default function App () {

  // theme provider wraps the theme context within the entire app
  return (
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
  )

}