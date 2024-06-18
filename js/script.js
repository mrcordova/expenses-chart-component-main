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
  //   const highestAmountObj = data.reduce((currVal, nextVal) => {
  //     if (currVal.amount > nextVal.amount) {
  //       return currVal;
  //     }
  //     return nextVal;
  //   });

  const currentDay = dayNames[new Date().getDay()];
  const currentDayBar = document.getElementById(`${currentDay}`);
  currentDayBar.previousElementSibling.classList.add("bar-active");
  let highestBar = barContainerDivs[0].querySelector(".bar");

  for (const barContainerDiv of barContainerDivs) {
    const bar = barContainerDiv.querySelector(".bar");
    const day = barContainerDiv.querySelector(".day-text");
    for (const obj of data) {
      if (obj.day == day.id) {
        bar.setAttribute("data-amount", `$${obj.amount}`);
      }
    }
    if (
      bar.getAttribute("data-amount").slice(1) >
      highestBar.getAttribute("data-amount").slice(1)
    ) {
      highestBar = bar;
    }
  }

  const highestAmount = highestBar.getAttribute("data-amount").slice(1);
  const maxHeightStr = getComputedStyle(highestBar).getPropertyValue("height");
  //   console.log(maxHeightStr);
  const maxHeight = maxHeightStr.slice(0, maxHeightStr.indexOf("px")) / 16;
  //   console.log(maxHeight);
  for (const barContainerDiv of barContainerDivs) {
    const bar = barContainerDiv.querySelector(".bar");
    const barAmount = bar.getAttribute("data-amount").slice(1);

    bar.style.height = `${(barAmount / highestAmount) * maxHeight}rem`;
  }
});
