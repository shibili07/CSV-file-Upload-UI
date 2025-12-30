import { Box } from "@/components/ui/box/Box";
import { Stack } from "@/components/ui/stack/Stack";
import { Text } from "@/components/ui/text/Text";
import { Button } from "@/components/ui/button/Button";
import { useState } from "react";

export function CSVUpload() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].name.endsWith(".csv")) {
            setSelectedFile(files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setSelectedFile(files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsUploading(true);
        // Simulate upload
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsUploading(false);
        alert(`File "${selectedFile.name}" uploaded successfully!`);
        setSelectedFile(null);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
        return (bytes / (1024 * 1024)).toFixed(2) + " MB";
    };

    return (
        <Box
            background="white"
            rounded="lg"
            className="shadow-xl shadow-black/5 border border-gray-100 overflow-hidden"
        >
            <Box padding="lg">
                <Stack direction="vertical" gap="lg">
                    {/* Drag and Drop Area */}
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`
              relative border-2 border-dashed rounded-xl p-12 transition-all duration-300
              ${isDragging
                                ? "border-black bg-gray-50 scale-[1.02]"
                                : "border-gray-300 hover:border-gray-400 hover:bg-gray-50/50"
                            }
            `}
                    >
                        <Stack direction="vertical" align="center" gap="md">
                            {/* Upload Icon */}
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-lg shadow-black/10">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    />
                                </svg>
                            </div>

                            {/* Text */}
                            <Stack direction="vertical" align="center" gap="xs">
                                <Text size="lg" weight="semibold" className="text-gray-900">
                                    {isDragging
                                        ? "Drop your file here"
                                        : "Drag and drop your CSV file"}
                                </Text>
                                <Text size="sm" muted>
                                    or click the button below to browse
                                </Text>
                            </Stack>

                            {/* File Input Button */}
                            <label htmlFor="file-upload">
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept=".csv"
                                    onChange={handleFileSelect}
                                    className="hidden"
                                />
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="cursor-pointer hover:scale-105 transition-transform"
                                    as="span"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                    Choose File
                                </Button>
                            </label>

                            <Text size="xs" muted className="mt-2">
                                Supported format: CSV (Max size: 10MB)
                            </Text>
                        </Stack>
                    </div>

                    {/* Selected File Info */}
                    {selectedFile && (
                        <Box
                            background="white"
                            rounded="lg"
                            className="border border-gray-200 p-6 animate-in fade-in slide-in-from-bottom-4 duration-300"
                        >
                            <Stack direction="vertical" gap="md">
                                <Stack direction="horizontal" justify="between" align="center">
                                    <Stack direction="horizontal" gap="md" align="center">
                                        {/* File Icon */}
                                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                />
                                            </svg>
                                        </div>

                                        {/* File Details */}
                                        <Stack direction="vertical" gap="xs">
                                            <Text weight="semibold" className="text-gray-900">
                                                {selectedFile.name}
                                            </Text>
                                            <Text size="sm" muted>
                                                {formatFileSize(selectedFile.size)} • CSV File
                                            </Text>
                                        </Stack>
                                    </Stack>

                                    {/* Remove Button */}
                                    <button
                                        onClick={() => setSelectedFile(null)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                        aria-label="Remove file"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </Stack>

                                {/* Upload Button */}
                                <Button
                                    variant="primary"
                                    size="lg"
                                    fullWidth
                                    onClick={handleUpload}
                                    loading={isUploading}
                                    className="mt-2 hover:scale-[1.02] transition-transform"
                                >
                                    {isUploading ? "Uploading..." : "Upload File"}
                                </Button>
                            </Stack>
                        </Box>
                    )}

                    {/* Info Section */}
                    <Box
                        background="white"
                        rounded="lg"
                        className="border border-blue-100 bg-blue-50/50 p-4"
                    >
                        <Stack direction="horizontal" gap="sm" align="start">
                            <svg
                                className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <Stack direction="vertical" gap="xs">
                                <Text size="sm" weight="semibold" className="text-blue-900">
                                    CSV Format Requirements
                                </Text>
                                <Text size="sm" className="text-blue-700">
                                    Your CSV should include: Invoice Number, Date, Customer Name,
                                    Amount, and Status. The first row should contain column
                                    headers.
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}
