import { Button } from "../button/Button";
import { Stack } from "../stack/Stack";
import { Text } from "../text/Text";
import { cn } from "@/utils/cn";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems: number;
    pageSize: number;
}

export function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    totalItems,
    pageSize,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    return (
        <div className="px-6 py-4 bg-white border-t border-gray-100">
            <Stack direction="horizontal" justify="between" align="center">
                <Text size="sm" muted>
                    Showing <span className="font-medium text-gray-900">{startItem}</span> to{" "}
                    <span className="font-medium text-gray-900">{endItem}</span> of{" "}
                    <span className="font-medium text-gray-900">{totalItems}</span> results
                </Text>

                <Stack direction="horizontal" gap="xs">
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4"
                    >
                        Previous
                    </Button>

                    <div className="flex items-center gap-1 mx-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => onPageChange(page)}
                                className={cn(
                                    "w-8 h-8 text-sm font-medium rounded-md transition-colors",
                                    currentPage === page
                                        ? "bg-black text-white"
                                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                                )}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4"
                    >
                        Next
                    </Button>
                </Stack>
            </Stack>
        </div>
    );
}
