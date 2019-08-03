import React, { Component } from 'react';
import { ThemeProvider, StyleReset } from 'atomize';

import theme from './theme';
import ResponsiveContext from './contexts/ResponsiveContext';
import { getBreakpoint } from './utils/responsive';

import Website from './Website';

class App extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const { responsive } = this.state;
    const breakpoint = getBreakpoint(window.innerWidth, theme);
    if (breakpoint !== responsive) {
      this.setState({ responsive: breakpoint });
    }
  };

  render () {
    const { responsive } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <ResponsiveContext.Provider value={responsive}>
          <StyleReset />
          <Website />
        </ResponsiveContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;
