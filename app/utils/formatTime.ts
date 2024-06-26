export function formatMillisecondsToStandardTime(ms: number) {
  ms = Math.max(0, ms);
 
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
 
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  let formattedTime = `${formattedMinutes}:${formattedSeconds}`;
 
  if (hours > 0) {
     const formattedHours = hours.toString().padStart(2, "0");
     formattedTime = `${formattedHours}:${formattedTime}`;
  }
 
  return formattedTime;
 }