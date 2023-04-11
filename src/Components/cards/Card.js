import React from "react";
import Faves from "../faves/faves";

function Card({
  title,
  date,
  address,
  link,
  image,
  description,
  event_location_map,
}) {
  const id = `${title}-${date}-${address}`;

  return (
    <div className="p-6">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-1 max-w-xs md:max-w-3xl mx-auto border border-white bg-white items-stretch h-full">
        <div className="w-full md:w-1/3 bg-white grid place-items-center object-cover">
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover rounded-lg sm:h-full sm:col-span-2 lg:col-span-full"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-1">
          <div className="flex justify-between">
            <h3 className="font-black text-gray-800 md:text-3xl text-xl mt-2">
              {title}
            </h3>
            <Faves
              id={id}
              title={title}
              date={date}
              address={address}
              link={link}
              image={image}
              description={description}
              event_location_map={event_location_map}
            />
          </div>
          <div>
            <p className="text-gray-500 font-bold md:block">
              {date && <dd>{date.when}</dd>}
            </p>
          </div>

          <div className="flex flex-row md:flex-row">
            {event_location_map && (
              <>
                <div className="flex mb-2 md:mb-0">
                  <a
                    href={event_location_map.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex text-gray-500 font-bold"
                  >
                    {address && <dd>{address.join(", ")}</dd>}
                  </a>
                </div>
              </>
            )}
          </div>
          <p className="md:text-lg text-gray-500 text-base">{description}</p>
          <button
            type="button"
            className="bg-cyan-950 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              More Info
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;



