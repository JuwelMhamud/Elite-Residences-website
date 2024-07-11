import { useLoaderData, useParams } from "react-router-dom";

const Estate = () => {
  const Realstate = useLoaderData();
  const { id } = useParams();

  const Estate = Realstate.find((R) => R.id == id);
  console.log(Estate);



 


  return (
    <section className="bg-gray-300 text-gray-100 rounded-md ">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 ">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-600"
        >
          <img
            src={Estate.image}
            alt=""
            className="object-cover w-full h-64 rounded-md sm:h-96 lg:col-span-7 bg-gray-100  text-gray-100 "
          />
          <div className="p-6 space-y-2 lg:col-span-5 ">
            <h3 className="text-2xl font-semibold sm:text-4xl ">
            {Estate.estate_title}
            </h3>
            <div className="font-bold">
                <h4 >Area : {Estate.area }</h4>
                <h4>Location : {Estate.location}</h4>
                <h4>Price : {Estate.price}</h4>
                <h4>Segment Name : {Estate.segment_name}</h4>
                <h4>Status : {Estate.status}</h4>
                <h4>Facilities : {Estate.facilities}</h4>
                
            </div>
            <p>Description :</p>
            
            <p>{Estate.description}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Estate;
