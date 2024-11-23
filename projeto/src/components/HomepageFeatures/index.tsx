import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Negócio',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Apresentação do Plano de Negócios. (em construção)<br></br>
        Veja Site da Apresentação <a href="https://naporteira.com.br/em-breve" target="_blank">aqui</a>.
      </>
    ),
  },
  {
    title: 'Facilitação para a Fiscalização',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Devido limitações financeiras, tudo será feito devagar. Mas executaremos todas as etapas do projeto com extrema perfeição técnica, com completa aderência às normas ABNT/NBR de engenharia Civil. <br></br><a href="https://naporteira.com.br/docs/category/projeto-de-terraplenagem" target="_self"></a>Etapa atual: identificação dos limites e topografia do terreno, para produção de documentos de unificação de lotes.
      </>
    ),
  },
  {
    title: 'Documentos de Projetos com Cálculos',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Apresentação das etapas do projeto com os cálculos e análises relevantes. Cálculos serão mostrados em logs, a partir da execução de scripts python, a serem executos no Google-Colaboratory ou no próprio site do projeto.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
