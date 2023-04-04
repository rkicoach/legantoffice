import { config } from '../components/base';
import mediaQueries from './media-queries';
import { spacing, type } from './scale';
import { themeColors, socialColors } from './colors';
import shadows from './shadows';
import transitions from './transitions';

const settings = {
  breakpoints: mediaQueries.map(query => `@media screen and ${query}`),
  scale: spacing,
  typeScale: type,
  radius: 3,
  bold: 700,
};

const applySettings = () => {
  config.set(settings);

  config.colors.theme = themeColors;
  config.colors.social = socialColors;
  config.shadows = shadows;
  config.transitions = transitions;
};

export default applySettings;
