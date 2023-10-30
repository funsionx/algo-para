export const test = <T>(caseName: string, returnValue: T, expected: T) => {
  return returnValue === expected
    ? console.log(`--------------\n${caseName}\n\nSUCCESS!!!\nexpected: ${expected}\nfact:     ${returnValue}\n--------------`)
    : console.log(`--------------\n${caseName}\n\nFAILURE!!!\nexpected: ${expected}\nfact:     ${returnValue}\n--------------`);
};