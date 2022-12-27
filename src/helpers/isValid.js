export const isValid = (arr, newData) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].endDate < newData.startDate ||
      newData.endDate < arr[i].startDate
    ) {
      ++count;
    } else {
      return false;
    }
  }
  return count === arr.length;
};
