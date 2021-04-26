import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

function Chart() {
  let yourMom;
  const localUser = JSON.parse(localStorage.getItem("Profile"));

  if (localStorage.getItem("Profile") !== null) {
    yourMom = localUser[0].expressions;
  }

  function removeDup() {
    let result = [];
    yourMom.forEach((item, index) => {
      if (result.indexOf(item) === -1) result.push(item);
    });
    return result;
  }

  let count = 0;
  function countValues(array, countItem) {
    count = 0;
    array.forEach((itm) => {
      if (itm == countItem) count++;
    });
    console.log(`${countItem} ${count}`);
    return count;
  }

  const angryCount = countValues(yourMom, "Angry");
  const disgustedCount = countValues(yourMom, "Disgusted");
  const fearfulCount = countValues(yourMom, "Fearful");
  const happyCount = countValues(yourMom, "Happy");
  const neutralCount = countValues(yourMom, "Neutral");
  const sadCount = countValues(yourMom, "Sad");
  const surprisedCount = countValues(yourMom, "Surprised");

  const state = {
    labels: [
      "Angry", 
      "Disgusted", 
      "Fearful", 
      "Happy", 
      "Neutral",
      "Sad", 
      "Surprised", 
    ],
    datasets: [
      {
        label: "Moods",
        backgroundColor: [
          "#990000",
          "#bada55",
          "#311212",
          "#fa8072",
          "#696966",
          "#407294",
          "#ffa500",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
          "#35014F",
          "#35014F",
        ],
        data: [
          angryCount,
          disgustedCount,
          fearfulCount,
          happyCount,
          neutralCount,
          sadCount,
          surprisedCount,
        ],
      },
    ],
  };
  return (
    <>
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </>
  );
}

export default Chart;
