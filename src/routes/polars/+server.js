import pl from "nodejs-polars";

export const GET = () => {
  const fooSeries = pl.Series("foo", [1, 2, 3]);
  return new Response(fooSeries.sum().toString());
};
