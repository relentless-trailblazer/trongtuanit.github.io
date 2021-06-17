const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flatten(arrFlat) {
  const flattenArr = arrFlat.reduce((preVal, currentVal) => {
    if (currentVal.length) return preVal.concat(flatten(currentVal));
    return preVal.concat(currentVal);
  }, []);
  return flattenArr;
}

const arrFlattened = flatten(arrFlat);

const arr2 = arrFlat.flat(3);

console.log(arrFlattened);

//return (currentVal.length) ? preVal.concat(flatten(currentVal))
//: preVal.concat(currentVal);
