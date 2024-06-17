import data from "../data.json" assert { type: "json" };

const dayNames = {
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri",
  6: "sat",
  7: "sun",
};
window.addEventListener("load", () => {
  const barContainerDivs = document.querySelectorAll(".bar-container");
  const highestAmount = data.reduce((currVal, nextVal) => {
    if (currVal.amount > nextVal.amount) {
      return currVal;
    }
    return nextVal;
  });

  const currentDay = dayNames[new Date().getDay()];
  const currentDayBar = document.getElementById(`${currentDay}`);
  currentDayBar.previousElementSibling.classList.add("bar-active");
  //   console.log(currentDayBar.previousElementSibling);
  for (const barContainerDiv of barContainerDivs) {
    barContainerDiv;
  }
});
console.log(data);
