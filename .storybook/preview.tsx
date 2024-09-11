import type { Preview } from "@storybook/react";
import './assets/css/docusaurus_global.css'
import withDocusaurusStyles from './decorators/withDocusaurusStyles';
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withDocusaurusStyles,
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark' ,
      },
      defaultTheme: 'light',
    })
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
