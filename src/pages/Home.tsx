
import { Box } from "@/components/ui/box/Box";
import { Stack } from "@/components/ui/stack/Stack";
import { Text } from "@/components/ui/text/Text";
import { Button } from "@/components/ui/button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <Box className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Hero Section */}
            <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <Stack direction="vertical" gap="lg" align="center" className="text-center">
                    {/* Hero Content */}
                    <Stack direction="vertical" gap="md" align="center" className="max-w-4xl">
                        <Text
                            size="xl"
                            weight="bold"
                            className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900 leading-tight"
                        >
                            Streamline Your Billing Operations
                        </Text>
                        <Text
                            size="lg"
                            muted
                            className="text-xl sm:text-2xl max-w-3xl leading-relaxed"
                        >
                            Import, manage, and analyze your billing data with ease.
                            Our powerful platform helps you stay organized and make data-driven decisions.
                        </Text>
                    </Stack>

                    {/* Hero Image */}
                    <Box className="w-full max-w-5xl mt-8 mb-8">
                        <img
                            src="/ChatGPT Image Dec 30, 2025, 04_15_22 PM.png"
                            alt="Billing Operations Dashboard"
                            className="w-full h-auto rounded-2xl shadow-2xl shadow-black/10 border border-gray-200"
                        />
                    </Box>

                    {/* CTA Buttons */}
                    <Stack direction="horizontal" gap="md" className="mt-8">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => navigate("/imports")}
                            className="text-lg px-8 py-6 hover:scale-105 transition-transform shadow-lg shadow-black/10"
                        >
                            <svg
                                className="w-6 h-6 mr-2"
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
                            Import Data Now
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
                        >
                            Learn More
                        </Button>
                    </Stack>

                    {/* Features Grid */}
                    <Box className="w-full max-w-6xl mt-20">
                        <Stack direction="vertical" gap="lg">
                            <Text
                                size="xl"
                                weight="bold"
                                className="text-3xl sm:text-4xl text-center text-gray-900"
                            >
                                Why Choose BillingOps?
                            </Text>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                {/* Feature 1 */}
                                <Box
                                    background="white"
                                    rounded="lg"
                                    className="p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow"
                                >
                                    <Stack direction="vertical" gap="md" align="center">
                                        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
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
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </div>
                                        <Text size="lg" weight="bold" className="text-gray-900">
                                            Lightning Fast
                                        </Text>
                                        <Text size="sm" muted className="text-center">
                                            Import thousands of records in seconds with our optimized processing engine
                                        </Text>
                                    </Stack>
                                </Box>

                                {/* Feature 2 */}
                                <Box
                                    background="white"
                                    rounded="lg"
                                    className="p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow"
                                >
                                    <Stack direction="vertical" gap="md" align="center">
                                        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
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
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                />
                                            </svg>
                                        </div>
                                        <Text size="lg" weight="bold" className="text-gray-900">
                                            Secure & Reliable
                                        </Text>
                                        <Text size="sm" muted className="text-center">
                                            Enterprise-grade security with encrypted data storage and regular backups
                                        </Text>
                                    </Stack>
                                </Box>

                                {/* Feature 3 */}
                                <Box
                                    background="white"
                                    rounded="lg"
                                    className="p-8 border border-gray-100 shadow-lg shadow-black/5 hover:shadow-xl transition-shadow"
                                >
                                    <Stack direction="vertical" gap="md" align="center">
                                        <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
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
                                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                />
                                            </svg>
                                        </div>
                                        <Text size="lg" weight="bold" className="text-gray-900">
                                            Smart Analytics
                                        </Text>
                                        <Text size="sm" muted className="text-center">
                                            Get actionable insights with automated reports and data visualization
                                        </Text>
                                    </Stack>
                                </Box>
                            </div>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}

export default Home;