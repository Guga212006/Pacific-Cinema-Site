import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Duna: Parte Dois',
    imgSrc: require('@site/static/img/duna_parte_dois.png').default,
    link: '/filmes/DunaParte2',
  },
  {
    title: 'Oppenheimer',
    imgSrc: require('@site/static/img/oppenheimer.png').default,
    link: '/filmes/Oppenheimer',
  },
  {
    title: 'Thunderbolts',
    imgSrc: require('@site/static/img/thunderbolts.png').default,
    link: '/filmes/Thunderbolts',
  },
];

function Feature({imgSrc, title, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <img src={imgSrc} className={styles.featureImg} alt={title} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" style={{ fontSize: '2rem' }}>{title}</Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: '2rem', fontSize: '3rem' }}>
        Filmes mais populares:
      </h2>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
