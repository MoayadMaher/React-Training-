import { useState } from "react";
import Table from "./table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props: any) {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const { config, data }: any = props;

  const handleClick = (label: string) => {
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

  const updatedConfig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortOrder, sortBy)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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

  return <Table {...props} config={updatedConfig} data={sotedData} />;
}

function getIcons(
  label: string,
  sortOrder: string | null,
  sortBy: string | null
) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallDown />
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
