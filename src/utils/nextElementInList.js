const nextElementInList = (list, value) => {
  const currActionIdx = list.indexOf(value);
  const nextActionIdx = (currActionIdx + 1) % list.length;
  return list[nextActionIdx];
};

export default nextElementInList;
