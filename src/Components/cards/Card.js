// import React from "react";
// import Faves from "../faves/faves";


// function Card({ title, date, address, link, image, description, event_location_map, id }) {
//   return (
//     // <div className="relative w-full mx-auto my-4 rounded-xl overflow-hidden shadow-lg flex flex-col sm:flex-row bg-white">
//     //   <div className="w-1/3">
//     //     <a href={link} target="_blank" rel="noopener noreferrer">
//     //       <img
//     //         className="w-full h-full md:w-full"
//     //         src={image}
//     //         alt={title}
//     //       />
//     //     </a>
//     //   </div>
//     //   <div className="w-2/3 mx-8">
//     //     <div className="flex justify-between">
//     //       <div className="font-bold text-xl my-2 text-cyan-950">{title}</div>
//     //       <div className="my-2">
//     //         <Faves
//     //           id={id}
//     //           title={title}
//     //           date={date}
//     //           address={address}
//     //           link={link}
//     //           image={image}
//     //           description={description}
//     //           event_location_map={event_location_map}
//     //         />
//     //       </div>
//     //     </div>
//     //     {date && (
//     //       <p className="text-white text-base mb-2">
//     //         <span className="font-bold">Event: </span>
//     //         {date.when}
//     //       </p>
//     //     )}
//     //     <div className="flex flex-row-reverse justify-end mb-2">
//     //       <div>
//     //         {event_location_map && (
//     //           <a
//     //             href={event_location_map.link}
//     //             target="_blank"
//     //             rel="noopener noreferrer"
//     //           >
//     //             <svg
//     //               xmlns="http://www.w3.org/2000/svg"
//     //               viewBox="0 0 24 24"
//     //               className="w-6 h-6 fill-white mx-2"
//     //             >
//     //               <path d="M12 3.5c-3.3 0-6 2.7-6 6 0 2.8 4.1 9.6 5.4 11.2.2.3.4.3.6 0C13.9 19.1 18 12.3 18 9.5c0-3.3-2.7-6-6-6zm0 8.4c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6S14.6 7.1 14.6 8.5 13.4 12 12 12z" />
//     //             </svg>
//     //           </a>
//     //         )}
//     //       </div>
//     //       <div>
//     //         {event_location_map && (
//     //           <a
//     //             className="my-2"
//     //             href={event_location_map.link}
//     //             target="_blank"
//     //             rel="noopener noreferrer"
//     //           >
//     //             {address && (
//     //               <span className="text-white text-base my-2">
//     //                 <span className="font-bold">Venue: </span>
//     //                 {address.join(", ")}
//     //               </span>
//     //             )}
//     //           </a>
//     //         )}
//     //       </div>
//     //     </div>
//     //     <p className="text-white text-base mb-2">{description}</p>
//     //   </div>
//     // </div>
//     <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
//       <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 bg-white rounded-xl">
//         <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
//           <h2 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
//             {title}
//           </h2>
//           <div className="my-2">
//             <Faves
//               id={id}
//               title={title}
//               date={date}
//               address={address}
//               link={link}
//               image={image}
//               description={description}
//               event_location_map={event_location_map}
//             />
//           </div>
//         </div>
//         <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
//           <a href={link} target="_blank" rel="noopener noreferrer">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-60 object-cover rounded-sm sm:h-52 sm:col-span-2 lg:col-span-full"
//               loading="lazy"
//             />
//           </a>
//         </div>
//         <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
//           <dt className="sr-only">Reviews</dt>
//           <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
//             <svg
//               width="24"
//               height="24"
//               fill="none"
//               aria-hidden="true"
//               className="mr-1 stroke-current dark:stroke-indigo-500"
//             >
//               <path
//                 d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             <span>
//               4.89 <span className="text-slate-400 font-normal">(128)</span>
//             </span>
//           </dd>
//           {date && (
//             <p className="text-white text-base mb-2">
//               <span className="font-bold">Event: </span>
//               {date.when}
//             </p>
//           )}
//           <dt className="sr-only">Location</dt>
//           <dd className="flex items-center">
//             <svg
//               width="2"
//               height="2"
//               aria-hidden="true"
//               fill="currentColor"
//               className="mx-3 text-slate-300"
//             >
//               <circle cx="1" cy="1" r="1" />
//             </svg>
//             <svg
//               width="24"
//               height="24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="mr-1 text-slate-400 dark:text-slate-500"
//               aria-hidden="true"
//             >
//               <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
//               <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
//             </svg>
//             Collingwood, Ontario
//           </dd>
//         </dl>
//         <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
//           <button
//             type="button"
//             class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
//           >
//             More Info!
//           </button>
//         </div>
//         <p class="m-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
//           {description}
//         </p>
//       </div>
//     </main>
//   );
// }

// export default Card;

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
  id,
}) {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h2 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            {title}
          </h2>
          <div className="my-2">
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
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src={image}
            alt={title}
            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
        </div>
        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="mr-1 stroke-current dark:stroke-indigo-500"
            >
              <path
                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              4.89 <span className="text-slate-400 font-normal">(128)</span>
            </span>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-1 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            Collingwood, Ontario
          </dd>
        </dl>
        <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button
            type="button"
            class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Check availability
          </button>
        </div>
        <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          {description}
        </p>
      </div>
    </main>
  );
}

export default Card;


