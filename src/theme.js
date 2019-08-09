import { DefaultTheme } from 'atomize';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
    brand100: '#da4370',
    brand200: '#a22a4d',
    transparent: 'rgba(0, 0, 0, 0.0)',
    footer: 'rgb(203, 198, 195)',
    footerContrast: 'rgb(103, 103, 106)',
    support: '#7B7E80',
  },
  textSize: {
    ...DefaultTheme.textSize,
    size: {
      ...DefaultTheme.textSize.size,
      bodyLg: '15px',
      subtitle: '20px',
      hero: '72px',
      heroLg: '96px',
    }
  }
};

export default theme;