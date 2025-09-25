import { useState, type Dispatch, type FC } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  totalPages: number;
  page: number;
  startPagination: number;
  handlePage: (value: number) => void;
  setStartPagination: Dispatch<React.SetStateAction<number>>;
}
const CustomPagination: FC<CustomPaginationProps> = ({
  totalPages,
  handlePage,
  page,
  setStartPagination,
  startPagination,
}) => {
  const [activePage, setActivePage] = useState<number>(page);

  const handlePaginateCut = (value: number) => {
    if (activePage < startPagination + 5 && value > 0) {
      handlePage(activePage + 1);
      setActivePage((prevState) => prevState + 1);
      return;
    }
    if (activePage > startPagination && value < 0) {
      handlePage(activePage - 1);
      setActivePage((prevState) => prevState - 1);
      return;
    }

    setStartPagination((prevState) => prevState + value);
  };

  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem
          className="cursor-pointer"
          onClick={() => handlePaginateCut(-5)}
        >
          <PaginationPrevious />
        </PaginationItem>

        {startPagination > 0 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .slice(startPagination, startPagination + 5)
          .map((value) => (
            <>
              <PaginationItem>
                <PaginationLink
                  onClick={() => {
                    handlePage(value);
                    setActivePage(value);
                  }}
                  isActive={activePage == value}
                  className={
                    activePage == value
                      ? "bg-primary text-white font-bold cursor-pointer"
                      : "cursor-pointer"
                  }
                >
                  {/* {startPagination + 1 + index} */}
                  {value}
                </PaginationLink>
              </PaginationItem>
            </>
          ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>{totalPages}</PaginationLink>
        </PaginationItem>
        <PaginationItem
          onClick={() => handlePaginateCut(5)}
          className="cursor-pointer"
        >
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
