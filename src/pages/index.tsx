import { Link } from 'umi';
import Helmet from 'react-helmet';
import styles from './index.module.less';

export default function IndexPage() {
  return (
    <>
      <Helmet
        title="title - index"
        meta={[
          {
            name: 'keywords',
            content: '',
          },
          {
            name: 'description',
            content: '',
          },
        ]}
      />

      <h1 className={styles.title}>this is page index</h1>
      <Link to="/home">go to home</Link>
    </>
  );
}
