import { defineConfig } from 'dumi';

export default defineConfig({
  favicons: ["https://avatars.githubusercontent.com/u/35437415?v=4"],
  base: `/Wolffy101.github.io/`,
  publicPath: `/Wolffy101.github.io/`,
  themeConfig: {
    hd: { rules: [] },
    rtl: true,
    name: 'wolf',
    logo: 'https://avatars.githubusercontent.com/u/35437415?v=4',
    footer: 'Powered by wolf',
    prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/Wolffy101',
    },
  },
});
