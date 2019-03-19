import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerLineHeight: 1.2,
  headerFontFamily: ['Bitter', 'serif'],
  bodyFontFamily: ['Rubik', 'sans-serif'],
  bodyColor: '#241c15',
  includeNormalize: false,
  blockMarginBottom: `1rem`,
  overrideStyles: ({ scale, rhythm }) => ({
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    body: {
      'line-height': 1.5,
    },
  }),
});

export default typography;
