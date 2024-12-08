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
        Plano de Negócios. (em construção)<br></br>
        Veja <a href="https://projetos-na-porteira.web.app/em-breve/" target="_blank">aqui</a>.
      </>
    ),
  },
  {
    title: 'Facilitação para a Fiscalização',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Devido limitações financeiras, construção será feita devagar.<br></br>Mas executaremos todas as etapas do projeto com perfeição técnica e com completa aderência às normas ABNT/NBR de Engenharia Civil.<br></br>Etapa atual: <a href="https://naporteira.com.br/docs/projeto-de-terraplenagem/etapa-atual" target="_self">Mapa de Locação</a>.
      </>
    ),
  },
  {
    title: 'Documentos Produzidos',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        1. Mapa de Locação
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
