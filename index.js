const updateClock = () => {
  const gt = (target) => document.querySelector(target);

  const d = new Date();

  let year = d.getFullYear();
  let month = String(d.getMonth() + 1).padStart(2, "0");
  let date = String(d.getDate()).padStart(2, "0");
  let hr = d.getHours();
  if (hr <= 12) {
    let time =
      String(hr).padStart(2, "0") +
      "  " +
      ":" +
      "  " +
      String(d.getMinutes()).padStart(2, "0") +
      "  " +
      ":" +
      "  " +
      String(d.getSeconds()).padStart(2, "0");

    gt("#time").innerHTML = time;
    gt("#pm").innerHTML = "AM";
  } else if (hr > 12) {
    let hor = (12 - hr) * -1;
    let time =
      String(hor).padStart(2, "0") +
      "  " +
      ":" +
      "  " +
      String(d.getMinutes()).padStart(2, "0") +
      "  " +
      ":" +
      "  " +
      String(d.getSeconds()).padStart(2, "0");

    gt("#time").innerHTML = time;
    gt("#pm").innerHTML = "PM";
  } else {
    let time =
      "12" +
      "  " +
      ":" +
      "  " +
      String(d.getMinutes()).padStart(2, "0") +
      "  " +
      ":" +
      "  " +
      String(d.getSeconds()).padStart(2, "0");

    gt("#time").innerHTML = time;
    gt("#pm").innerHTML = "AM";
  }

  gt("#box-1").innerHTML = date;
  gt("#box-2").innerHTML = month;
  gt("#box-3").innerHTML = year;

  switch (d.getDay()) {
    case 0:
      gt("#day0").style.border = "2px solid blue";
      break;
    case 1:
      gt("#day1").style.border = "2px solid blue";
      break;
    case 2:
      gt("#day2").style.border = "2px solid blue";
      break;
    case 3:
      gt("#day3").style.border = "2px solid blue";
      break;
    case 4:
      gt("#day4").style.border = "2px solid blue";
      break;
    case 5:
      gt("#day5").style.border = "2px solid blue";
      break;
    case 6:
      gt("#day6").style.border = "2px solid blue";
      break;
  }
};

setInterval(updateClock, 1000);

updateClock();
