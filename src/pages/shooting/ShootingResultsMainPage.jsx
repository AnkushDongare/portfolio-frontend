import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShootingResultsMainPage = () => {
  const [event, setEvent] = useState("open-sight");
  const [region, setRegion] = useState("urban");
  const [ageGroup, setAgeGroup] = useState("u14");
  const [gender, setGender] = useState("male");

  const handleEventChange = (newEvent) => {
    setEvent(newEvent);
  };

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  const handleAgeGroupChange = (newAgeGroup) => {
    setAgeGroup(newAgeGroup);
  };

  const handleGenderChange = (newGender) => {
    setGender(newGender);
  };

  const ageGroups = ["u14", "u17", "u19"];

  // Define common button styles
  const buttonClass = "p-2 rounded-lg transition-all duration-300";
  const activeButtonClass = "bg-indigo-600 text-white";
  const inactiveButtonClass = "bg-indigo-100 text-indigo-800";

  return (
    <section className="text-gray-700 py-20 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold text-indigo-800">
          Inter School Shooting Competition August-2023
        </h1>
        <p className="text-lg font-bold text-indigo-800">Akola, Maharashtra.</p>
        <p className="text-md font-bold mb-4 text-indigo-800">
          03-08-2023 - 04-08-2023
        </p>
      </div>

      <div className="flex flex-col items-center space-y-8">
        {/* Button group for event selection */}
        <div className="w-full">
          <h2 className="text-xl text-center font-bold mb-4 text-indigo-800">
            Event
          </h2>
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => handleEventChange("open-sight")}
              className={`${buttonClass} ${
                event === "open-sight" ? activeButtonClass : inactiveButtonClass
              }`}
            >
              Open Sight
            </button>
            <button
              onClick={() => handleEventChange("peep-sight")}
              className={`${buttonClass} ${
                event === "peep-sight" ? activeButtonClass : inactiveButtonClass
              }`}
            >
              Peep Sight
            </button>
            <button
              onClick={() => handleEventChange("pistol")}
              className={`${buttonClass} ${
                event === "pistol" ? activeButtonClass : inactiveButtonClass
              }`}
            >
              Pistol
            </button>
          </div>
        </div>
        {/* Button group for region selection */}
        <div className="w-full">
          <h2 className="text-xl text-center font-bold mb-4 text-indigo-800">
            Region
          </h2>
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => handleRegionChange("urban")}
              className={`${buttonClass} ${
                region === "urban" ? activeButtonClass : inactiveButtonClass
              }`}
            >
              Urban
            </button>
            <button
              onClick={() => handleRegionChange("rural")}
              className={`${buttonClass} ${
                region === "rural" ? activeButtonClass : inactiveButtonClass
              }`}
            >
              Rural
            </button>
          </div>
        </div>

        {/* Buttons for gender selection */}
        <div className="w-full">
          <h2 className="text-xl text-center font-bold mb-4 text-indigo-800">
            Gender
          </h2>
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => handleGenderChange("male")}
              className={`${buttonClass} ${
                gender === "male"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => handleGenderChange("female")}
              className={`${buttonClass} ${
                gender === "female"
                  ? "bg-pink-600 text-white"
                  : "bg-pink-100 text-pink-800"
              }`}
            >
              Female
            </button>
          </div>
        </div>

        {/* Buttons for age group selection */}
        <div className="w-full">
          <h2 className="text-xl text-center font-bold mb-4 text-indigo-800">
            Age Group
          </h2>
          <div className="flex justify-center space-x-2">
            {ageGroups.map((group) => (
              <button
                key={group}
                onClick={() => handleAgeGroupChange(group)}
                className={`${buttonClass} ${
                  ageGroup === group ? activeButtonClass : inactiveButtonClass
                }`}
              >
                U-{group.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Link to view results */}
        <Link
          // to={`/shooting-results/${event}/${region}/${gender}/${ageGroup}`}
          to='/shooting-results/result-not-declared'
          className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white hover:text-gray-800 flex justify-center items-center text-center p-4 rounded-lg transition-all duration-300"
        >
          {`See ${
            event === "open-sight"
              ? "Open Sight"
              : event === "peep-sight"
              ? "Peep Sight"
              : "Pistol"
          } ${region === "urban" ? "Urban" : "Rural"} U-${ageGroup.slice(1)} ${
            gender === "male" ? "Boys" : "Girls"
          } Result`}
        </Link>
      </div>
    </section>
  );
};

export default ShootingResultsMainPage;
