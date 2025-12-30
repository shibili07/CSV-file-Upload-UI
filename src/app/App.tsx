import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImportBillingData from "../pages/ImportBillingData";
import Home from "@/pages/Home";
import { Navbar } from "@/components/ui/layout/Navbar";
import { Footer } from "@/components/ui/layout/Footer";
import { Box } from "@/components/ui/box/Box";
import { Toaster } from "sonner";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Box background="white" className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imports" element={<ImportBillingData />} />

        </Routes>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}
