import { Variable, interval } from "astal";
import Geoclue from "gi://Geoclue?version=2.0";

export const currentLocation = Variable<{ latitude: number; longitude: number } | null>(null);

Geoclue.Simple.new("aiser-astal", Geoclue.AccuracyLevel.CITY, null, (source, result) => {
  try {
    const geoclue = Geoclue.Simple.new_finish(result);  // 修正：正确获取结果

    if (!geoclue) {
      console.error("Failed to create GeoClue Simple object");
      return;
    }

    console.log("GeoClue initialized successfully");
    console.log("Location:", geoclue.location.latitude, geoclue.location.longitude);

    currentLocation.set({
      latitude: geoclue.location.latitude,
      longitude: geoclue.location.longitude
    });

    geoclue.connect("notify::location", () => {
      console.log("Location changed!");
      currentLocation.set({
        latitude: geoclue.location.latitude,
        longitude: geoclue.location.longitude
      });
    });

  } catch (error) {
    console.error("GeoClue error:", error);
  }
});
