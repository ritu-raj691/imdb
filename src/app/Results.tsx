import Card from "./components/Card";

const Results = (props: any) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {props.results.map((item: any) => {
        return <Card key={item.id} result={item}></Card>;
      })}
    </div>
  );
};

export default Results;
