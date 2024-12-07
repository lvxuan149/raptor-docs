// 导入必要的依赖
import clsx from 'clsx';                                    // 用于条件类名组合
import Link from '@docusaurus/Link';                       // Docusaurus的链接组件
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'; // 获取站点配置的Hook
import Layout from '@theme/Layout';                        // 页面布局组件
import HomepageFeatures from '@site/src/components/HomepageFeatures'; // 首页特性展示组件
import Heading from '@theme/Heading';                      // 标题组件

// 导入CSS模块
import styles from './index.module.css';

// 首页组件
export default function Home(): JSX.Element {
  // 获取站点配置信息
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}      // 设置页面标题
      description="Description will go into a meta tag in <head />"> {/* 设置页面描述，用于SEO */}
      {/* 首页头部 */}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <img
          src="/img/raptor-banner.jpg"
          alt="Raptor Banner"
          className={styles.headerImage}
        />
        <div className={styles.container}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>
      <main>
        {/* 渲染首页特性展示区域 */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
