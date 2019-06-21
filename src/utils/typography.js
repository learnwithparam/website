import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  headerLineHeight: 1.25,
  headerFontFamily: ['Bitter', 'serif'],
  bodyFontFamily: ['Rubik', 'sans-serif'],
  bodyColor: '#3c3c3c',
  includeNormalize: true,
  blockMarginBottom: `1rem`,
  overrideStyles: () => ({
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    body: {
      'line-height': 1.6,
    },
  }),
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
