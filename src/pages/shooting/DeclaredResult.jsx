import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DeclaredResult = () => {
  const { event, region, gender, age } = useParams();
  let ageGroup = Number(age.slice(1));
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://13.233.212.77:3001/api/data");
      const jsonData = await response.json();
      // Sort the data in ascending order based on the "total" score
      const filteredData = jsonData.filter(
        (shooter) =>
          shooter.Age == age &&
          shooter.Region == region &&
          shooter.Event == event &&
          shooter.Gender == gender
      );
      filteredData.sort((a, b) => b.Total - a.Total);
      console.log(filteredData);
      setData(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <section className="text-gray-700 py-20 px-8">
      <div className="container mx-auto my-auto text-center">
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
        <div className="border border-collapse rounded-md overflow-x-auto overflow-y-auto">
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
                  Series1,
                  Series2,
                  Series3,
                  Series4,
                  CompNo,
                  ShooterName,
                  School,
                  Penalty,
                  Total,
                } = shooter;
                const score = Series1 + Series2 + Series3 + Series4 - Penalty;
                return (
                  <tr key={index} className={index<3 ? "bg-green-200": "bg-gray-50"}>
                    <th className="px-4 py-2 border">{index + 1}</th>
                    <th className="px-4 py-2 border">
                      {CompNo}
                    </th>
                    <th className="px-4 py-2 border">
                      {ShooterName}
                    </th>
                    <th className="px-4 py-2 border">
                      {School ? School : null}
                    </th>
                    <th className="px-4 py-2 border">
                      {Series1 ? Series1 : null}
                    </th>
                    <th className="px-4 py-2 border">
                      {Series2 ? Series2 : null}
                    </th>
                    <th className="px-4 py-2 border">
                      {Series3 ? Series3 : null}
                    </th>
                    <th className="px-4 py-2 border">
                      {Series4 ? Series4 : null}
                    </th>
                    <th className="px-4 py-2 border">
                      {Penalty ? Penalty : null}
                    </th>
                    <th className="px-4 py-2 border">
                      {score == Total ? Total : "check"}
                    </th>
                    <th className="px-4 py-2 border">
                      {index < 3 ? index + 1 : null}
                    </th>
                    <th className="px-4 py-2 border">
                      {SrNo > 63 ? "ABS" : "C"}
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
