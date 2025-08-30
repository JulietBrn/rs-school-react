interface CountryData {
  iso_code: string;
  data: {
    year: number;
    population: number;
    co2: number;
    co2_per_capita: number;
    coal_co2: number;
    coal_co2_per_capita: number;
    cumulative_co2: number;
    cumulative_coal_co2: number;
    cumulative_flaring_co2: number;
    cumulative_gas_co2: number;
    cumulative_oil_co2: number;
    flaring_co2: number;
    flaring_co2_per_capita: number;
    gas_co2: number;
    gas_co2_per_capita: number;
    oil_co2: number;
    oil_co2_per_capita: number;
    share_global_co2: number;
    share_global_coal_co2: number;
    share_global_cumulative_co2: number;
    share_global_cumulative_coal_co2: number;
  }[];
}
type CountriesResponse = Record<string, CountryData>;

export type { CountryData, CountriesResponse };
