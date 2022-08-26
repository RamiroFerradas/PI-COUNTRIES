import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteActivity, getActivities } from "../../redux/actions/activities";
import NavbarPrincipal from "../Navbar/Navbar Principal/NavbarPrincipal";

export default function Activities() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activities = useSelector((state) => state.activities);

  // const activitiesSet = Array.from(new Set(activities));

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  console.log(activities);

  return (
    <div>
      <div>
        <NavbarPrincipal />
      </div>
      <button>
        <NavLink to="/create"> ACTIVITIE CREATE </NavLink>
      </button>
      <div>
        {activities?.map((ele) => {
          return (
            <div>
              <div key={ele.id}>
                <h4>Activity: {ele.name}</h4>
                <p>Difficulty{ele.difficulty}</p>
                <p>Duration: {ele.duration}</p>
                <p>Season: {ele.season}</p>
                <p>Countries: {ele.countries}</p>
              </div>
              <div>
                <button
                  onClick={() =>
                    dispatch(
                      deleteActivity(ele.id),
                      setTimeout(() => {
                        dispatch(getActivities());
                        alert("Activity is deleted!");
                      }, 300)
                    )
                  }
                >
                  DELETE ACTIVITY
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
