function Page(props: any) {
  return (
    <>
      <h1>This is headers</h1>
      <div>{props.children}</div>
    </>
  );
}

export default Page;
