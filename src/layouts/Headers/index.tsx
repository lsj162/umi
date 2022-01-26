import { useEffect } from 'react';

function Page(props: any) {
  useEffect(() => {
    console.log('0-0-0-0', new Date().constructor());
  }, []);

  return (
    <>
      <h1>This is headers</h1>
      <p>{new Date().constructor()}</p>

      <div>{props.children}</div>
    </>
  );
}

export default Page;
