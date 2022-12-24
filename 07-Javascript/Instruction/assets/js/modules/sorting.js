const sSortASC = (arr) => {
  const sortedArr = [...arr].sort((a, b) => {
    //console.log(a,b,a.localeCompare(b));
    return a.localeCompare(b);
  });
  return sortedArr;
};

const sSortDESC = (arr) => {
  const sortedArr = [...arr].sort((a, b) => b.localeCompare(a));
  return sortedArr;
};

const nSortASC = (arr) => {
  const sortedArr = [...arr].sort((a, b) => {
    //console.log(a, b, a - b);
    return a - b;
  });
  return sortedArr;
};

const nSortDESC = (arr) => {
  const sortedArr = [...arr].sort((a, b) => b - a);
  return sortedArr;
};

export { sSortASC, sSortDESC, nSortASC, nSortDESC };
