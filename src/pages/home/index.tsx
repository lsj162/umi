import { Link } from 'umi';
import Helmet from 'react-helmet';

function Page() {
  return (
    <>
      <Helmet
        title="title - home"
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

      <h1>home</h1>
      <Link to="/">go to index</Link>
    </>
  );
}

export default Page;
