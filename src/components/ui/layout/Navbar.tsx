import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@/components/ui/box/Box";
import { Stack } from "@/components/ui/stack/Stack";
import { Text } from "@/components/ui/text/Text";
import { Button } from "@/components/ui/button/Button";
import { cn } from "@/utils/cn";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <Box
            as="nav"
            padding="none"
            border="none"
            background="white"
            className="sticky top-0 z-50 border-b border-gray-100 backdrop-blur-md bg-white/90 shadow-sm"
        >
            <Box padding="md" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Stack
                    direction="horizontal"
                    align="center"
                    justify="between"
                    className="h-16"
                >
                    {/* Logo */}
                    <Stack direction="horizontal" align="center" gap="sm" className="cursor-pointer group">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                            <div className="w-4 h-4 border-2 border-white rounded-sm" />
                        </div>
                        <Text size="lg" weight="bold" className="tracking-tight text-black">
                            BillingOps
                        </Text>
                    </Stack>

                    {/* Desktop nav */}
                    <Stack
                        direction="horizontal"
                        gap="sm"
                        align="center"
                        className="hidden md:flex ml-10"
                    >
                        <NavLink label="Home" to="/" isActive={location.pathname === "/"} />
                        <NavLink label="Imports" to="/imports" isActive={location.pathname === "/imports"} />
                        <NavLink label="About" to="#" />
                        <NavLink label="contact" to="#" />
                    </Stack>

                    {/* Desktop actions */}
                    <Stack
                        direction="horizontal"
                        gap="md"
                        align="center"
                        className="hidden md:flex"
                    >
                        <button className="text-sm font-medium text-gray-500 hover:text-black transition-colors px-2 py-1">
                            Docs
                        </button>
                        <div className="h-4 w-[1px] bg-gray-200" />
                        <Stack direction="horizontal" gap="sm">
                            <Button variant="ghost" size="sm" className="hover:bg-gray-50">Help</Button>

                        </Stack>
                    </Stack>

                    {/* Mobile toggle */}
                    <Button
                        variant="ghost"
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </Button>
                </Stack>
            </Box>

            {/* Mobile menu */}
            {open && (
                <Box
                    padding="md"
                    background="white"
                    className="md:hidden border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-200"
                >
                    <Stack direction="vertical" gap="xs">
                        <NavLink label="Home" to="/" isActive={location.pathname === "/"} fullWidth />
                        <NavLink label="Imports" to="/imports" isActive={location.pathname === "/imports"} fullWidth />
                        <NavLink label="About" to="#" />
                        <NavLink label="contact" to="#" />

                        <div className="py-2 mt-2 border-t border-gray-50">
                            <Stack direction="vertical" gap="sm">
                                <Button variant="ghost" className="justify-start">Help</Button>

                            </Stack>
                        </div>
                    </Stack>
                </Box>
            )}
        </Box>
    );
}

interface NavLinkProps {
    label: string;
    to: string;
    isActive?: boolean;
    fullWidth?: boolean;
}

function NavLink({ label, to, isActive, fullWidth }: NavLinkProps) {
    return (
        <Link
            to={to}
            className={cn(
                "px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer text-sm font-medium",
                fullWidth ? "w-full" : "",
                isActive
                    ? "bg-gray-900 text-white shadow-md shadow-black/5"
                    : "text-gray-600 hover:bg-gray-100 hover:text-black active:bg-gray-200"
            )}
        >
            {label}
        </Link>
    );
}
