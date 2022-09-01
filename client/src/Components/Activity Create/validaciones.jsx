import React from "react";
import { useSelector } from "react-redux";

export default function Validate(input) {
  //validations
  let activities = useSelector((state) => state.activities);
  let errors = {};

  console.log(activities.map((ele) => ele.name).includes(input.name));
  //name
  // if (activities?.map((ele) => ele.name).includes(input.name)) {
  //   errors.name = "This country already has the selected activity ";
  // }

  if (input.name === "") errors.name = "Tu actividad necesita un nombre!";

  if (/[^\w\s]/.test(input.name))
    errors.name =
      "El nombre de tu actividad no puede contener caracteres especiales";

  //difficulty
  if (input.difficulty === 0)
    errors.difficulty = "La dificultad debe ser mayor a 0!";
  if (
    input.difficulty > 10 ||
    input.difficulty < 1 ||
    !/\d/g.test(input.difficulty)
  )
    errors.difficulty = "El valor debe estar entre 1 y 10";

  //duration
  if (input.duration === 0) errors.duration = "La duration debe ser mayor a 0!";
  if (input.duration > 24 || input.duration < 1 || !/\d/g.test(input.duration))
    errors.duration = "El valor debe estar entre 1 y 24";

  //Season
  if (!input.season?.length)
    errors.season = "Tu actividad necesita una temporada al menos!";

  // //genres
  if (!input.countries?.length)
    errors.countries = "Tu actividad necesita un countrie al menos!";

  return errors;
}
module.exports = {
  Validate,
};
