
import { useState, useEffect } from "react";
import { Box, Stack, Text, CSVUpload, Table, type UploadResult } from "../components/ui";
import type { Column } from "../components/ui";
import { toast } from "sonner";

const STORAGE_KEY = "billing_data";
const STORAGE_HEADERS_KEY = "billing_data_headers";
const STORAGE_TITLE_KEY = "billing_data_title";

const PAGE_SIZE = 10;

function ImportBillingData() {
    const [billingData, setBillingData] = useState<any[]>([]);
    const [headers, setHeaders] = useState<string[]>([]);
    const [tableTitle, setTableTitle] = useState<string>("Imported Data");
    const [currentPage, setCurrentPage] = useState(1);

    // Load data from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        const savedHeaders = localStorage.getItem(STORAGE_HEADERS_KEY);
        const savedTitle = localStorage.getItem(STORAGE_TITLE_KEY);

        if (savedData) {
            try {
                setBillingData(JSON.parse(savedData));
            } catch (error) {
                console.error("Failed to parse saved billing data:", error);
            }
        }
        if (savedHeaders) {
            try {
                setHeaders(JSON.parse(savedHeaders));
            } catch (error) {
                console.error("Failed to parse saved headers:", error);
            }
        }
        if (savedTitle) {
            setTableTitle(savedTitle);
        }
    }, []);

    const handleUpload = (result: UploadResult) => {
        setBillingData(result.data);
        setHeaders(result.headers);
        setTableTitle(result.fileName);
        setCurrentPage(1);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(result.data));
        localStorage.setItem(STORAGE_HEADERS_KEY, JSON.stringify(result.headers));
        localStorage.setItem(STORAGE_TITLE_KEY, result.fileName);

        toast.success(`${result.data.length} records imported successfully!`);
    };

    const columns: Column<any>[] = headers.map(header => ({
        header: header,
        accessor: header
    }));

    // Pagination logic
    const totalPages = Math.ceil(billingData.length / PAGE_SIZE);
    const paginatedData = billingData.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <>
            <Box className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <Box className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Stack direction="vertical" gap="xl">
                        {/* Header Section */}
                        <Stack direction="vertical" gap="md">
                            <Text
                                size="xl"
                                weight="bold"
                                className="text-4xl sm:text-5xl tracking-tight text-gray-900"
                            >
                                Import Billing Data
                            </Text>
                            <Text
                                size="lg"
                                muted
                                className="max-w-2xl leading-relaxed"
                            >
                                Upload CSV files to import billing or invoice data into the system.
                                Your data will be stored locally in your browser.
                            </Text>
                        </Stack>

                        {/* Top Section: Upload and Summary */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <CSVUpload onUpload={handleUpload} />
                            </div>
                            <Box background="white" rounded="lg" className="border border-gray-100 p-6 shadow-sm h-fit">
                                <Stack direction="vertical" gap="lg">
                                    <Text weight="semibold" className="text-gray-900">Import Summary</Text>
                                    <Stack direction="vertical" gap="md">
                                        <div className="flex justify-between items-center py-2 border-b border-gray-50">
                                            <Text size="sm" muted>Total Records</Text>
                                            <Text weight="bold">{billingData.length}</Text>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <Text size="sm" muted>Last Import</Text>
                                            <Text size="sm">{billingData.length > 0 ? new Date().toLocaleDateString() : 'Never'}</Text>
                                        </div>
                                    </Stack>
                                    {billingData.length > 0 && (
                                        <button
                                            onClick={() => {
                                                if (confirm("Are you sure you want to clear all data?")) {
                                                    setBillingData([]);
                                                    setHeaders([]);
                                                    setTableTitle("Imported Data");
                                                    setCurrentPage(1);
                                                    localStorage.removeItem(STORAGE_KEY);
                                                    localStorage.removeItem(STORAGE_HEADERS_KEY);
                                                    localStorage.removeItem(STORAGE_TITLE_KEY);
                                                    toast.info("All data has been cleared.");
                                                }
                                            }}
                                            className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                                        >
                                            Clear All Data
                                        </button>
                                    )}
                                </Stack>
                            </Box>
                        </div>

                        {/* Data Table Section */}
                        <Stack direction="vertical" gap="md" className="mt-8">
                            <div className="flex justify-between items-end">
                                <Stack direction="vertical" gap="xs">
                                    <Text size="lg" weight="bold">{tableTitle}</Text>
                                    <Text size="sm" muted>Showing all imported records</Text>
                                </Stack>
                            </div>
                            <Table
                                columns={columns}
                                data={paginatedData}
                                emptyMessage="No billing data imported yet. Upload a CSV file to get started."
                                pagination={{
                                    currentPage,
                                    totalPages,
                                    onPageChange: setCurrentPage,
                                    totalItems: billingData.length,
                                    pageSize: PAGE_SIZE
                                }}
                            />
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}

export default ImportBillingData;