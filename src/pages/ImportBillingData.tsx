
import { Box } from "../components/ui/box/Box";
import { Stack } from "../components/ui/stack/Stack";
import { Text } from "../components/ui/text/Text";
import { CSVUpload } from "../components/ui/card/CSVupload";

function ImportBillingData() {
    return (
        <>
           
            <Box className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <Box className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header Section */}
                    <Stack direction="vertical" gap="md" className="mb-12">
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
                            Ensure your CSV file follows the required format with columns for
                            invoice number, date, amount, and customer details.
                        </Text>
                    </Stack>

                    {/* CSV Upload Component */}
                    <CSVUpload />
                </Box>
            </Box>
        </>
    );
}

export default ImportBillingData;