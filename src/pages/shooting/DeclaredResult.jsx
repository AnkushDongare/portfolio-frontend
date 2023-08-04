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
      const response = await fetch('http://13.233.212.77:3001/api/data');
      const jsonData = await response.json();
      // Sort the data in ascending order based on the "total" score
      const filteredData = jsonData.filter(
        (shooter) => shooter.Age == age && shooter.Region == region && shooter.Event == event && shooter.Age == age
      );
      filteredData.sort((a, b) => b.Total - a.Total);
      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
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
                const score = Series[0] + Series[1] + Series[2] + Series[3] - Penalty;
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
                      {score == Total ? Total : 'check'}
                    </th>
                    <th className="px-4 py-2 border">{Rank ? Rank : null}</th>
                    <th className="px-4 py-2 border">
                      {Rem === "C" ? "C" : null}
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