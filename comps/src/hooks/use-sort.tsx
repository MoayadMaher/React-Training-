/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

function useSort(data: any, config: any) {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const setSortColumn = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  // Only sort if sortOrder and sortBy not null
  // Make a copy of the data array before sorting (never modify props or state directly)
  // Find the sortValue function for the column we are sorting by
  let sotedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column: any) => column.label === sortBy);
    sotedData = [...data].sort((a: any, b: any): any => {
      const sortValueA = sortValue(a);
      const sortValueB = sortValue(b);

      const reverse = sortOrder === "asc" ? 1 : -1;

      if (typeof sortValueA === "string") {
        return sortValueA.localeCompare(sortValueB) * reverse;
      } else {
        return (sortValueA - sortValueB) * reverse;
      }
    });
  }
  return { setSortColumn, sortOrder, sortBy, sotedData };
}
export default useSort;
