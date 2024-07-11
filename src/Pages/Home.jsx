import { useLoaderData } from "react-router-dom";
import SingleRealstate from "../Components/SingleRealstate";

const Home = () => {
  const RealState = useLoaderData();

  console.log(RealState);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {RealState.map((state) => (
          <SingleRealstate key={state.id} state={state} />
        ))}
      </div>
    </div>
  );
};

export default Home;
