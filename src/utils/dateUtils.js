export const formatDate = (start_time, end_time) => {
  const s_time = new Date(start_time).toLocaleTimeString();
  const e_time = new Date(end_time).toLocaleTimeString();
  const date = new Date(start_time).toDateString();

  return date + ", " + s_time + " - " + e_time;
};


export const getMinutes = (start_time, end_time) => {
  const millis = end_time - start_time;
  var minutes = Math.floor(millis / 60000);
  return minutes
}