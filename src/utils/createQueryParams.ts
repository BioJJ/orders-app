export function createQueryParams(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  const { query, queryWithoutPage } = Object.entries(searchParams)
    .filter(([_, value]) => value)
    .reduce(
      (acc, [key, value]) => {
        const paramValue = Array.isArray(value)
          ? value.join(`&${key}=`)
          : value;

        if (acc.query === "") {
          acc.query = `?${key}=${paramValue}`;
        } else {
          acc.query += `&${key}=${paramValue}`;
        }

        if (key !== "page") {
          acc.queryWithoutPage += `&${key}=${paramValue}`;
        }

        return acc;
      },
      {
        query: "",
        queryWithoutPage: ""
      }
    );

  return { query, queryWithoutPage };
}
