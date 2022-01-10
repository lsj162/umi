import { Link } from 'umi';
import Helmet from 'react-helmet';
import queryString from 'query-string';
import styles from './index.module.less';

import { useEffect, useState } from 'react';

export default function IndexPage() {
  const [windows, setWindows] = useState<any>({});
  const { search } = windows?.location || {};

  queryString.parse(search);

  useEffect(() => {
    setWindows(window);
  }, []);

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
