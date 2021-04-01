const combineClass = (...args: Array<string>): string =>
  args.reduce((acc: string, current: string) => {
    if (current) {
      if (acc.length) {
        return `${acc} ${current}`;
      } else {
        return current;
      }
    } else {
      return acc;
    }
  }, "");

export default combineClass;
