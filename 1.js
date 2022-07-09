const sequenceLength = 3;
const logFile = `
  1 /home
  2 /home
  1 /shop
  3 /home
  1 /checkout
  3 /shop
  2 /settings
  3 /checkout
  2 /shop
  2 /checkout
`;

function findMostCommonNPathSequence(logFile, sequenceLength) {
  const entries = logFile.split("\n").filter((log) => !!log);

  let pathsByUser = {};
  let freqHash = {};
  let mostCommonPaths = { count: null, paths: null };

  entries.forEach((log) => {
    const [id, path] = log.split(" /");

    if (pathsByUser[id]) {
      const lastItemIndex = pathsByUser[id].length - 1;
      if (pathsByUser[id][lastItemIndex].length < sequenceLength) {
        pathsByUser[id][lastItemIndex].push(path);

        if (pathsByUser[id][lastItemIndex].length === sequenceLength) {
          const key = pathsByUser[id][lastItemIndex].join(" ");
          addToFreqHash(key, pathsByUser[id][lastItemIndex]);
        }
      } else {
        const lastPath = pathsByUser[id][lastItemIndex];
        const newItem = lastPath.slice(1);
        newItem.push(path);

        pathsByUser[id].push(newItem);

        // compute frequency
        const key = newItem.join(" ");
        addToFreqHash(key, newItem);
      }
    } else {
      pathsByUser[id] = [[path]];
      if (pathsByUser[id][0].length === sequenceLength) {
        const key = path;
        addToFreqHash(key, pathsByUser[id][0]);
      }
    }
  });

  function addToFreqHash(key, pathArr) {
    freqHash[key]
      ? freqHash[key].count++
      : (freqHash[key] = { count: 1, path: pathArr });

    if (mostCommonPaths.count < freqHash[key].count) {
      mostCommonPaths = {
        count: freqHash[key].count,
        paths: [freqHash[key].path],
      };
    } else if (mostCommonPaths.count === freqHash[key].count) {
      mostCommonPaths.paths.push(freqHash[key].path);
    }
  }

  return mostCommonPaths.paths;
}

console.log(findMostCommonNPathSequence(logFile, sequenceLength));
