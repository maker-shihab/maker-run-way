import jsonfile from "jsonfile";
import moment from "moment";
import random from "random";
import simpleGit from "simple-git";

const path = "./data.json";

const markCommit = (x, y) => {
  const date = moment()
    .subtract(1, "y")
    .add(1, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = {
    date: date,
  };

  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date, { "--date": date }).push();
  });
};

const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();

  const startDate = moment("2025-03-30");
  const endDate = moment("2025-05-02");
  const diffDays = endDate.diff(startDate, "days");
  const randomDays = random.int(0, diffDays);

  const date = startDate.add(randomDays, "days").format();

  const data = { date };
  console.log(date);

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(date, { "--date": date }, makeCommits.bind(this, --n));
  });
};

makeCommits(120);