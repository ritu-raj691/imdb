const Results = (props: any) => {
  return (
    <>
      {props.results.map((item: any) => {
        return <p key={item.id}>{item?.original_title}</p>;
      })}
    </>
  );
};

export default Results;
