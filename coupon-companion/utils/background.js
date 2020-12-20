import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const TASK_FETCH_LOCATION = 'TASK_FETCH_LOCATION';

export const setupTask = () => TaskManager.defineTask(TASK_FETCH_LOCATION, async ({ data: { locations }, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  const [location] = locations;
  try {
    console.log('tracking in background...', location);
  } catch (err) {
    console.error(err);
  }
});

export const startPollingLocation = () => Location.startLocationUpdatesAsync(TASK_FETCH_LOCATION, {
  accuracy: Location.Accuracy.Highest,
  distanceInterval: 30,
  deferredUpdatesInterval: 60000,
  foregroundService: {
    notificationTitle: 'Using your location',
    notificationBody: 'There is no way to switch this off, this app is definitely not malware',
  },
});

export const stopPollingLocation = () => Location.hasStartedLocationUpdatesAsync(TASK_FETCH_LOCATION).then((value) => {
  if (value) {
    Location.stopLocationUpdatesAsync(TASK_FETCH_LOCATION);
  }
});