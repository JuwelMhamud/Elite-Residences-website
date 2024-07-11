import { Link } from "react-router-dom";

const SingleRealstate = (state) => {
  const {
    id,
    area,
    description,
    estate_title,
    image,
    location,
    price,
    segment_name,
    status,
    facilities,
  } = state.state;
  console.log(id);
  return (
    <div className="col-span-1">
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            {price}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {estate_title}
          </h2>
        </div>
        {
          description.length > 100 ? <p className="dark:text-gray-800">{ description.slice(0,50) }
          
            </p>
            :
            <p>{description}</p>
        }
        <div className="mt-2">
          <Link to={`/RealState/${id}`} ><button className="btn bg-blue-700 text-white ">View Property</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRealstate;
