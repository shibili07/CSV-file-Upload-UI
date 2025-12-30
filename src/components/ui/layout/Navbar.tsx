import { useState } from "react";
import { Box } from "@/components/ui/box/Box";
import { Stack } from "@/components/ui/stack/Stack";
import { Text } from "@/components/ui/text/Text";
import { Button } from "@/components/ui/button/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      as="nav"
      padding="md"
      border="default"
      background="white"
      className="sticky top-0 z-50"
    >
      <Stack
        direction="horizontal"
        align="center"
        justify="between"
      >
        {/* Logo */}
        <Text size="lg" weight="semibold">
          BillingOps
        </Text>

        {/* Desktop nav */}
        <Stack
          direction="horizontal"
          gap="lg"
          align="center"
          className="hidden md:flex"
        >
          <NavLink label="Dashboard" />
          <NavLink label="Imports" />
          <NavLink label="Reports" />
        </Stack>

        {/* Desktop actions */}
        <Stack
          direction="horizontal"
          gap="sm"
          className="hidden md:flex"
        >
          <Button variant="ghost">Help</Button>
          <Button variant="primary">Import CSV</Button>
        </Stack>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </Button>
      </Stack>

      {/* Mobile menu */}
      {open && (
        <Box
          padding="md"
          border="subtle"
          background="white"
          className="mt-4 md:hidden"
        >
          <Stack direction="vertical" gap="md">
            <NavLink label="Dashboard" />
            <NavLink label="Imports" />
            <NavLink label="Reports" />

            <Stack direction="vertical" gap="sm">
              <Button variant="ghost">Help</Button>
              <Button variant="primary" fullWidth>
                Import CSV
              </Button>
            </Stack>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

function NavLink({ label }: { label: string }) {
  return (
    <Text
      size="sm"
      weight="medium"
      className="cursor-pointer text-gray-700 hover:text-black transition"
    >
      {label}
    </Text>
  );
}
