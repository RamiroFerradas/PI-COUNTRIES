// import React, { useEffect, useState } from "react";
// import { createContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addCountrie,
//   limpioUnCountrie,
// } from "../../../../redux/actions/actions";

// import Paginado from "../../../Paginado/Paginado";

// import CardCreateActivitie from "../CardCreateActivitie";
// import styles from "./SearchBarActivities.module.css";

// export default function SearchBarActivities({
//   setLocalCountries,
//   localCountries,
//   name,
//   setErrors,
//   validate,
// }) {
//   const dispatch = useDispatch();
//   let searchCountries = useSelector((state) => state.countries);

//   let currentPage = useSelector((state) => state.page);

//   // let [localCountries, setLocalCountries] = useState({
//   //   countries: [],
//   //   flag: [],
//   // });

//   // useEffect(() => {
//   //   for (let i = 0; i < localCountries.countries.length; i++) {
//   //     searchCountries = searchCountries.filter(
//   //       (ele) => ele.name !== localCountries.countries[i].name
//   //     );
//   //   }
//   // }, [localCountries.countries]);

//   let countriesPerPage = useSelector((state) => state.countriesPerPage);
//   const indexOfLastCountrie = countriesPerPage * currentPage;
//   const indexOfFirstCountrie = indexOfLastCountrie - countriesPerPage;

//   const currentCountries = searchCountries.slice(
//     indexOfFirstCountrie,
//     indexOfLastCountrie
//   );

//   let card = Object.values(localCountries);
//   // console.log(localCountries);

//   return (
//     <div>
//       {
//         <div>
//           <Paginado allCountries={searchCountries.length} />
//         </div>
//       }
//       <div>
//         <div>
//           <h1>Countries Selected:</h1>
//           <div>
//             {localCountries.countries?.map((ele) => {
//               return (
//                 <div>
//                   <button
//                     onClick={() => {
//                       setLocalCountries((prevState) => ({
//                         ...prevState,
//                         countries: localCountries.countries.filter(
//                           (x) => ele !== x
//                         ),
//                       }));

//                       setErrors((prevState) =>
//                         validate({
//                           ...prevState,
//                           countries: localCountries.countries.filter(
//                             (x) => ele !== x
//                           ),
//                         })
//                       );
//                       dispatch(addCountrie(ele));
//                     }}
//                   >
//                     x
//                   </button>
//                   <p>{ele}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       {name &&
//         currentCountries.map((ele) => {
//           return (
//             <div key={ele.id} className={styles.cardSearch}>
//               <button
//                 name={ele.name}
//                 flag={ele.flag}
//                 value={ele.id}
//                 onClick={() => {
//                   setLocalCountries((prevState) => ({
//                     ...prevState,
//                     countriesName: [
//                       ...localCountries.countriesName,
//                       ele.name && ele.name,
//                     ],
//                     flag: [...localCountries.flag, ele.flag && ele.flag],

//                     countries: [...localCountries.countries, ele.id && ele.id],
//                   }));

//                   setErrors(
//                     validate({
//                       ...localCountries,
//                       countriesName: [...localCountries.countries, ele.name],
//                     })
//                   );

//                   dispatch(limpioUnCountrie(ele.name));
//                 }}
//               >
//                 <CardCreateActivitie name={ele.name} flag={ele.flag} />
//               </button>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// {
//   name &&
//     searchCountries.map((ele) => {
//       return (
//         <div key={ele.id}>
//           <button
//             name={ele.name}
//             flag={ele.flag}
//             value={ele.id}
//             onClick={setLocalCountries({
//               ...localCountries,
//               countries: [...localCountries.countries, ele.name],
//               flag: [...localCountries.flag, ele.flag],
//             })}
//           >
//             <CardCreateActivitie name={ele.name} flag={ele.flag} />
//           </button>
//         </div>
//       );
//     });
// }
