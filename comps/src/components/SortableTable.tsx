/* eslint-disable @typescript-eslint/no-explicit-any */
import useSort from "../hooks/use-sort";
import Table from "./table";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function SortableTable(props: any) {
  const { config, data }: any = props;
  const { setSortColumn, sortOrder, sortBy, sotedData } = useSort(data, config);

  const updatedConfig = config.map((column: any) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortOrder, sortBy)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

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
