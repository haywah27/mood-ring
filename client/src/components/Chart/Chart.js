import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

function Chart() {
  let moodArr;
  const localUser = JSON.parse(localStorage.getItem("Profile"));

  if (localStorage.getItem("Profile") !== null) {
    moodArr = localUser[0].expressions;
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

  const angryCount = countValues(moodArr, "Angry");
  const disgustedCount = countValues(moodArr, "Disgusted");
  const fearfulCount = countValues(moodArr, "Fearful");
  const happyCount = countValues(moodArr, "Happy");
  const neutralCount = countValues(moodArr, "Neutral");
  const sadCount = countValues(moodArr, "Sad");
  const surprisedCount = countValues(moodArr, "Surprised");

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
          "#730000",
          "#8CA340",
          "#261414",
          "#BD6157",
          "#4A4A48",
          "#2F556E",
          "#C27E00",
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
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                font: {
                  size: 18,
                  family: "Courier New",
                },
              },
            },
          },
        }}
      />
    </>
  );
}

export default Chart;
