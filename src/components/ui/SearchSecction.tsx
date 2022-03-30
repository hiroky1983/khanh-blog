import { Input } from "@mantine/core";
import { AdjustmentsHorizontal, Search } from "tabler-icons-react";

export const SearchSecction = () => {
  return (
    <div className="flex">
      <AdjustmentsHorizontal
        size={34}
        strokeWidth={1}
        color="#12B981"
        className="hover:bg-opacity-70 hover:bg-gray-200 rounded-lg hover:cursor-pointer"
      />
      <Input
        icon={<Search />}
        placeholder="Search Blog Title"
        className="ml-4"
      />
    </div>
  );
};
