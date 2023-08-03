import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DeclaredResult = () => {
  const { event, region, gender, age } = useParams();
  let ageGroup = Number(age.slice(1));
  const [data, setData] = useState([]);

  useEffect(() => {
    let dataUrl;

    if (
      event === "open-sight" &&
      region === "urban" &&
      gender === "male" &&
      age === "u14"
    ) {
      dataUrl = "http://localhost:6000/shooting-results/open-sight/urban/male/u14";
    } else if (
      event === "open-sight" &&
      region === "urban" &&
      gender === "male" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data2";
    } else if (
      event === "open-sight" &&
      region === "urban" &&
      gender === "male" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data3";
    } else if (
      event === "open-sight" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data4";
    } else if (
      event === "open-sight" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data5";
    } else if (
      event === "open-sight" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data6";
    } else if (
      event === "open-sight" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data7";
    } else if (
      event === "open-sight" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data8";
    } else if (
      event === "open-sight" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data9";
    } else if (
      event === "open-sight" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data10";
    } else if (
      event === "open-sight" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data11";
    } else if (
      event === "open-sight" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data12";
    } else if (
      event === "peep-sight" &&
      region === "urban" &&
      gender === "male" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data13";
    } else if (
      event === "peep-sight" &&
      region === "urban" &&
      gender === "male" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data14";
    } else if (
      event === "peep-sight" &&
      region === "urban" &&
      gender === "male" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data15";
    } else if (
      event === "peep-sight" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data16";
    } else if (
      event === "peep-sight" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data17";
    } else if (
      event === "peep-sight" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data18";
    } else if (
      event === "peep-sight" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data19";
    } else if (
      event === "peep-sight" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data20";
    } else if (
      event === "peep-sight" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data21";
    } else if (
      event === "peep-sight" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data22";
    } else if (
      event === "peep-sight" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data23";
    } else if (
      event === "peep-sight" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data24";
    } else if (
      event === "pistol" &&
      region === "urban" &&
      gender === "male" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data25";
    } else if (
      event === "pistol" &&
      region === "urban" &&
      gender === "male" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data26";
    } else if (
      event === "pistol" &&
      region === "urban" &&
      gender === "male" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data27";
    } else if (
      event === "pistol" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data28";
    } else if (
      event === "pistol" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data29";
    } else if (
      event === "pistol" &&
      region === "urban" &&
      gender === "female" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data30";
    } else if (
      event === "pistol" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data31";
    } else if (
      event === "pistol" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data32";
    } else if (
      event === "pistol" &&
      region === "rural" &&
      gender === "male" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data33";
    } else if (
      event === "pistol" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u14"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data34";
    } else if (
      event === "pistol" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u17"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data35";
    } else if (
      event === "pistol" &&
      region === "rural" &&
      gender === "female" &&
      ageGroup === "u19"
    ) {
      dataUrl = "https://shooting-api.onrender.com/data36";
    } else {
      // Handle invalid combination of region, gender, and ageGroup
      return;
    }

    fetch(dataUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        // Handle the error here (e.g., display an error message, log the error, etc.)
        console.error("Error fetching data:", error);
      });
  }, [event, region, gender, ageGroup]);

  return (
    <section className="text-gray-700 py-20 px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-xl md:text-2xl lg:text:3xl 2xl:text-3xl font-bold mb-4 text-gray-600">
          Inter School Shooting Competition
        </h1>
        <p className="text-md lg:text-xl font-bold text-gray-800">
          Akola, Maharashtra.
        </p>
        <p className="text-sm lg:text-md font-bold mb-4 text-gray-800">
          03-08-2023 - 04-08-2023
        </p>
        <h2 className="text-xl font-bold mb-4 text-gray-700 uppercase">
          {`${region} ${gender} U-${ageGroup}`}
        </h2>
      </div>

      <div className="container">
        <div className="border border-collapse rounded-md overflow-x-auto">
          <table className="table-auto w-full text-[.2em] md:text-sm lg:text-sm xl:text-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">SrNo</th>
                <th className="px-4 py-2 border">Comp No.</th>
                <th className="px-4 py-2 border">Shooter Name</th>
                <th className="px-4 py-2 border">School</th>
                <th className="px-4 py-2 border" colSpan="4">
                  Series
                </th>
                <th className="px-4 py-2 border">Penalt</th>
                <th className="px-4 py-2 border">Total</th>
                <th className="px-4 py-2 border">Rank</th>
                <th className="px-4 py-2 border">Rem</th>
              </tr>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border">1</th>
                <th className="px-4 py-2 border">2</th>
                <th className="px-4 py-2 border">3</th>
                <th className="px-4 py-2 border">4</th>
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border"></th>
                <th className="px-4 py-2 border"></th>
              </tr>
            </thead>
            <tbody className="uppercase">
              {data.map((shooter, index) => {
                const {
                  SrNo,
                  CompNo,
                  ShooterName,
                  School,
                  Series,
                  Penalty,
                  Total,
                  Rank,
                  Rem,
                } = shooter;
                return (
                  <tr key={index} className="bg-gray-50">
                    <th className="px-4 py-2 border">{SrNo}</th>
                    <th className="px-4 py-2 border">{CompNo}</th>
                    <th className="px-4 py-2 border">{ShooterName}</th>
                    <th className="px-4 py-2 border">{School}</th>
                    <th className="px-4 py-2 border">{Series[0]}</th>
                    <th className="px-4 py-2 border">{Series[1]}</th>
                    <th className="px-4 py-2 border">{Series[2]}</th>
                    <th className="px-4 py-2 border">{Series[3]}</th>
                    <th className="px-4 py-2 border">{Penalty}</th>
                    <th className="px-4 py-2 border">
                      {Series[0] + Series[1] + Series[2] + Series[3] - Penalty}
                    </th>
                    <th className="px-4 py-2 border">{Rank ? Rank : null}</th>
                    <th className="px-4 py-2 border">
                      {Rem === "c" ? "c" : null}
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DeclaredResult;