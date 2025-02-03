import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Projetos de Eng. Civil do "Clube de Eventos Na Porteira"',
  tagline: 'detalhamentos e cálculos dos projetos',
  favicon: 'img/favicon.ico',
  url: 'https://naporteira.com.br/',
  baseUrl: '/',
  organizationName: 'tcarvi-engenheiro-eduardo-leal',
  projectName: 'projetos-do-empreendimento-na-porteira',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.ts',
          editUrl:
          'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-na-porteira/edit/main/projeto/',        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/tcarvi-engenheiro-eduardo-leal/projeto-na-porteira/edit/main/projeto/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'na-porteira',
      logo: {
        alt: 'na-porteira',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projetos',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://naporteira.com.br',
          label: 'naporteira.com.br',
          position: 'left',
        },
        {
          href: 'https://github.com/tcarvi-engenheiro-eduardo-leal/projetos-do-empreendimento-na-porteira',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Projetos',
              to: '/docs/category/projeto-de-terraplenagem',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCWA39JV7f68QQ6lZEpMOqIA',
            },
            {
              label: 'X',
              href: 'https://x.com/tcarvi_eduardo',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tcarvi-engenheiro-eduardo-leal/projetos-do-empreendimento-na-porteira',
            },
          ],
        },
      ],
      copyright: `atualizado em  ${new Date().toLocaleDateString("pt-BR")} ©TCARVI`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
