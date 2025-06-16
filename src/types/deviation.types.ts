enum QUARTER {
  first = "Q1",
  second = "Q2",
  third = "Q3",
  fourth = "Q4",
}

export type DeviationWithMetadata = {
  quarter: QUARTER;
  year: number;
  deviation: number;
};
