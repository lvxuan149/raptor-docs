// 导入必要的依赖
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// 定义特性项的类型接口
type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

// 特性列表数据
const FeatureList: FeatureItem[] = [
  {
    title: ' Tutorial',
    Svg: require('@site/static/img/raptor01.svg').default,
    description: (
      <div style={{textAlign: 'center'}}>
        <p>Helping beginners</p>
      </div>
    ),
  },
  {
    title: 'Raotor World',
    Svg: require('@site/static/img/raptor02.svg').default,
    description: (
      <>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div>Raptor Swap</div>
          <div>Raptor.Fun</div>
          <div>And More……</div>
        </div>
      </>
    ),
  },
  {
    title: 'Raptor Blog',
    Svg: require('@site/static/img/raptor03.svg').default,
    description: (
      <>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <div>New product</div>
          <div>New features</div>
          <div>And More........</div>
        </div>
      </>
    ),
  },
];

// 单个特性组件
function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// 主页特性展示组件
export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* 遍历渲染特性列表 */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
