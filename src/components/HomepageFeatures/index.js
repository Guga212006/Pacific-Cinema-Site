import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Duna: Parte Dois',
    imgSrc: require('@site/static/img/duna_parte_dois.png').default,
  },
  {
    title: 'Oppenheimer',
    imgSrc: require('@site/static/img/oppenheimer.png').default,
  },
  {
    title: 'Thunderbolts',
    imgSrc: require('@site/static/img/thunderbolts.png').default,
  },
];

function Feature({imgSrc, title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
