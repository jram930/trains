import { fetchAllTrains } from "amtrak";
import { Train } from "../types/train";

const trains: Array<Train> = [];

async function loadAllData(): Promise<void> {
  console.log("Loading all train related data!");
  await loadTrainData();
  console.log("Done loading all train related data!");
  console.log(`Loaded ${trains.length} trains!`);
}

async function loadTrainData(): Promise<void> {
  // This type is all jacked up, not sure what's going on with it
  const trainsData: any = await fetchAllTrains();
  let counter = 0;
  for (const key in trainsData) {
    if (trainsData[key].length) {
      const train = trainsData[key][0];
      if (counter === 0) {
        console.log(train);
      }
      trains.push({
        number: train.trainNum,
        routeName: train.routeName,
        lat: train.lat,
        lon: train.lon,
        velocity: train.velocity,
      });
    }
    counter++;
  }
}

function getAll(): Array<Train> {
  return trains;
}

// Export default
export default {
  getAll,
  loadAllData,
} as const;
