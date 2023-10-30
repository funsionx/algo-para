export const decToBinary = (n: number) => {
  let binaryNum = new Array<number>(32);

  let i = 0;
  while (n > 0) {
    binaryNum[i] = n % 2;
    n = Math.floor(n / 2);
    i++;
  }

  return Number(
    binaryNum
      .reverse()
      .filter((val) => val !== undefined)
      .join("")
  );
};

export const fractionSum = (n: number) => {
  let counter = 1;
  let result = 0;
  while (counter < n) {
    result += 1 / counter;
  }
  return result;
};

export const recursiveFractionSum = (n: number): number => {
  if (n == 1) {
    return 1;
  } else {
    return 1 / n + recursiveFractionSum(n - 1);
  }
};

export const findPosNegNull = (arr: number[]) => {
  const nums = { positiveCount: 0, negativeCount: 0, null: 0 };
  arr.forEach((val) => {
    if (val < 0) {
      nums.negativeCount++;
    } else if (val === 0) {
      nums.null++;
    } else {
      nums.positiveCount++;
    }
  });
  return JSON.stringify(nums)
    .split("")
    .filter((val) => val !== "{" && val !== "}" && val !== '"')
    .join("");
};

export const findMaxAndMin = (arr: number[]) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  const numberOfMax = arr.indexOf(max) + 1;
  const numberOfMin = arr.indexOf(min) + 1;

  return `Max: ${max} located at ${numberOfMax}\nMin: ${min} located at ${numberOfMin}`;
};

export const findCoupleOfPos = (arr: number[]) => {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let prev = arr[i - 1];
    if (curr > 0 && prev > 0) {
      result.push(prev, curr);
      break;
    }
  }
  return result;
};

export const isArrayIsSorted = (arr: number[]) => {
  return arr === arr.sort();
};

export const insertNumAfterDivByThree = (
  arr: number[],
  num: number
): number[] => {
  const result: number[] = [];

  arr.forEach((val) => {
    result.push(val);
    if (Number(val) % 3 === 0) {
      result.push(num);
    }
  });

  return result;
};

export const firstIsLast = (arr: number[]) => {
  const lol = arr.slice(0, -1);
  return [arr[arr.length - 1], ...lol];
};

export const findMinValues = (arr: number[]) => {
  const hash = new Map<number, number[]>();
  const keysArr: number[] = [];
  arr.forEach((val, i) => {
    if (!hash.has(val)) {
      hash.set(val, [i + 1]);
    } else {
      hash.get(val)?.push(i + 1);
    }
  });
  hash.forEach((_, key) => keysArr.push(key));
  const minKey = Math.min(...keysArr);
  return hash.get(minKey);
};
