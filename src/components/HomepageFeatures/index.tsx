import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Love',
    Svg: require('@site/static/img/cat.svg').default,
    description: (
      <>
        Our office pets are pure joy—mysterious Slack cats dropping memes and 
        in-person dogs treating every day like a never-ending game of fetch.
      </>
    ),
  },
  {
    title: 'Unleashing Playful Antics',
    Svg: require('@site/static/img/paw.svg').default,
    description: (
      <>
        While our sly cats send cryptic winks and purrs from behind their screens,
        our dogs are busy sharing toys, throwing balls, and crashing meetings for cuddles.
      </>
    ),
  },
  {
    title: 'Powered by Purrs and Wags',
    Svg: require('@site/static/img/hearts.svg').default,
    description: (
      <>
        Who needs coffee when our team is fueled by feline mischief and canine comedy?
        These furry friends keep our workspace buzzing with laughter and endless energy!
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

export default function HomepageFeatures(): ReactNode {
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
