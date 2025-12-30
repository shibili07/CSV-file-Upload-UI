import { Box } from "../box/Box";
import { Stack } from "../stack/Stack";
import { Text } from "../text/Text";
import { cn } from "@/utils/cn";
import { Pagination } from "./Pagination";

export interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
    className?: string;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    className?: string;
    emptyMessage?: string;
    pagination?: {
        currentPage: number;
        totalPages: number;
        onPageChange: (page: number) => void;
        totalItems: number;
        pageSize: number;
    };
}

export function Table<T>({
    columns,
    data,
    className,
    emptyMessage = "No data available.",
    pagination
}: TableProps<T>) {
    return (
        <Box
            background="white"
            rounded="lg"
            className={cn("border border-gray-200 overflow-hidden shadow-sm", className)}
        >
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-bottom border-gray-100 bg-gray-50/50">
                            {columns.map((column, index) => (
                                <th
                                    key={index}
                                    className={cn(
                                        "px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                        column.className
                                    )}
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.length > 0 ? (
                            data.map((item, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="hover:bg-gray-50/50 transition-colors"
                                >
                                    {columns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={cn("px-6 py-4 text-sm text-gray-900", column.className)}
                                        >
                                            {typeof column.accessor === "function"
                                                ? column.accessor(item)
                                                : (item[column.accessor] as React.ReactNode)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="px-6 py-12 text-center"
                                >
                                    <Stack direction="vertical" align="center" gap="sm">
                                        <svg
                                            className="w-12 h-12 text-gray-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        <Text muted>{emptyMessage}</Text>
                                    </Stack>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {pagination && (
                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    onPageChange={pagination.onPageChange}
                    totalItems={pagination.totalItems}
                    pageSize={pagination.pageSize}
                />
            )}
        </Box>
    );
}
