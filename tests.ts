import {
  decToBinary,
  findCoupleOfPos,
  findMaxAndMin,
  findMinValues,
  findPosNegNull,
  firstIsLast,
  fractionSum,
  insertNumAfterDivByThree,
  isArrayIsSorted,
  recursiveFractionSum,
} from ".";
import { test } from "./utils";

// test("Decimal to binary", decToBinary(59), 111011);
// test("Decimal to binary 2", decToBinary(1234), 10011010010);

// test("Fraction sum", fractionSum(2), 3/2);
// test("find pos neg null", findPosNegNull([23,345,-324,-345, 0]), "positiveCount:2,negativeCount:2,null:1")
// test("find max and min and their location", findMaxAndMin([1,2,3,4,10,5,6,7,8,9]), `Max: 9 located at 9\nMin: 1 located at 1`)
test("find first couple of pos", findCoupleOfPos([-1,3,4,-2,3,-4,5,6,7,8,9]), [5, 6])
// test("is array sorted", isArrayIsSorted([1, 6, 2, 3, 4, 5]), true);
// test(
//   "insertNumAfterDivByThree",
//   insertNumAfterDivByThree([5, 3, 1], 5),
//   [5, 3, 5, 1]
// );
// test("last is first", firstIsLast([1, 2, 3, 4, 6]), [6, 1, 2, 3, 4]);
// test("find min values", findMinValues([3,2,2,1,1,3]), [4,5]);
