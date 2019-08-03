export const getBreakpoint = (windowWidth, theme) => {
  let result;
  Object.keys(theme.grid.breakpoints)
    .sort((a, b) => {
      const first = theme.grid.breakpoints[a];
      const second = theme.grid.breakpoints[b];
      return first - second;
    })
    .some(name => {
      const breakpoint = theme.grid.breakpoints[name];
      if (breakpoint < windowWidth) {
        result = name;
        return false;
      }
      return true;
    });

  return result;
};