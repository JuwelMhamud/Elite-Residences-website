import { useLoaderData } from "react-router-dom";
import Carusal from "../Components/Carusal";
import SingleRealstate from "../Components/SingleRealstate";

const Home = () => {
  const RealState = useLoaderData();

  console.log(RealState);

  return (
    <div className="">
      <Carusal />

      <div >
        <h2 className="font-semibold text-6xl ml-[40%] my-5">Estates</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {RealState.map((state) => (
          <SingleRealstate key={state.id} state={state} />
        ))}
      </div>
    </div>
  );
};

export default Home;
