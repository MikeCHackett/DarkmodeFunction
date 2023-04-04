# Dark Mode Functionality

## Description

Hey developers, looking for a way to implement theme toggling in your React application? This React component provides an efficient custom solution through a ThemeProvider that allows for easy use of a dark/light theme throughout your application.

The ThemeProvider component creates two independent contexts: ThemeContext and ThemeUpdateContext. ThemeContext is used to contain the current theme state, while ThemeUpdateContext is used to contain the function to update the theme. This approach is highly effective in ensuring that the UI responds to any change in theme selection. ThemeProvider component creates a state for darkTheme and a toggleTheme() function that can be utilized to alter the value of darkTheme as needed. The useTheme() and useThemeUpdate() custom hooks make it effortless to access both the current theme and the theme update function respectively. The state of the theme is accessible to all children elements within both context providers to reflect any theme changes across the application.

Implementing a theme toggle functionality in React a application has never been easier!
