const convertKmToM = (distance: string | number): number =>
  Math.floor(Number(distance) * 1000);

export default convertKmToM;
