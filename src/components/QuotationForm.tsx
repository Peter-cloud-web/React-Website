import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import logo from "../assets/logo.png";
import "./QuotationForm.css";

interface ServiceDetails {
  pricePerUnit?: number;
  unit?: string;
  options?: { size: string; price: number }[];
}

interface ServiceCategory {
  [service: string]: ServiceDetails;
  requiresSiteVisit?: boolean;
}

interface ServiceStructure {
  [category: string]: ServiceCategory;
}

const serviceStructure: ServiceStructure = {
  "Upholstery Cleaning": {
    "Sofa Cleaning": { pricePerUnit: 500, unit: "seater" },
    "Carpet Cleaning": { pricePerUnit: 20, unit: "sqft" },
    "Mattress Cleaning": {
      options: [
        { size: "6 by 6", price: 2000 },
        { size: "5 by 6", price: 1800 },
        { size: "4 by 6", price: 1500 },
      ],
    },
  },
  "Office Cleaning": { requiresSiteVisit: true },
  // Add more services here
};

interface CurrentItem {
  category: string;
  service: string;
  quantity: number;
  size: string;
  total: number;
  dimensions: string;
}

interface QuotationFormProps {
  service: any; // TODO: Define specific type for service prop
  onClose: () => void;
}

const QuotationForm: React.FC<QuotationFormProps> = ({ service, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [selectedItems, setSelectedItems] = useState<CurrentItem[]>([]);
  const [currentItem, setCurrentItem] = useState<CurrentItem>({
    category: "",
    service: "",
    quantity: 1,
    size: "",
    total: 0,
    dimensions: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [logoDataUrl, setLogoDataUrl] = useState("");
  const [carpetWidth, setCarpetWidth] = useState("");
  const [carpetHeight, setCarpetHeight] = useState("");

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      setLogoDataUrl(canvas.toDataURL("image/png"));
    };
    img.src = logo;
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentItem({
      ...currentItem,
      category: e.target.value,
      service: "",
      size: "",
      quantity: 1,
      total: 0,
      dimensions: "",
    });
    setCarpetWidth("");
    setCarpetHeight("");
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentItem({
      ...currentItem,
      service: e.target.value,
      size: "",
      quantity: 1,
      total: 0,
      dimensions: "",
    });
    setCarpetWidth("");
    setCarpetHeight("");
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    const service =
      serviceStructure[currentItem.category]?.[currentItem.service]; // Optional chaining
    let total = 0;

    if (service?.pricePerUnit) {
      // Optional chaining
      total = quantity * service.pricePerUnit;
    }

    setCurrentItem({ ...currentItem, quantity, total });
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = e.target.value;
    const service =
      serviceStructure[currentItem.category]?.[currentItem.service]; // Optional chaining
    const selectedSize = service?.options?.find(
      (option) => option.size === size
    ); // Optional chaining

    setCurrentItem({ ...currentItem, size, total: selectedSize?.price || 0 }); // Optional chaining
  };

  const handleCarpetDimensionsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    dimension: "width" | "height"
  ) => {
    const value = e.target.value;
    if (dimension === "width") {
      setCarpetWidth(value);
    } else {
      setCarpetHeight(value);
    }

    if (carpetWidth && carpetHeight) {
      const area = parseFloat(carpetWidth) * parseFloat(carpetHeight);
      const total =
        area *
        (serviceStructure["Upholstery Cleaning"]?.["Carpet Cleaning"]
          ?.pricePerUnit || 0);
      setCurrentItem({
        ...currentItem,
        quantity: area,
        total: total,
        dimensions: `${carpetWidth} x ${carpetHeight}`,
      });
    }
  };

  const addItem = () => {
    if (currentItem.service) {
      setSelectedItems([...selectedItems, currentItem]);
      setCurrentItem({
        category: "",
        service: "",
        quantity: 1,
        size: "",
        total: 0,
        dimensions: "",
      });
      setCarpetWidth("");
      setCarpetHeight("");
    }
  };

  const generatePDF = (
    name: string,
    email: string,
    phone: string,
    location: string,
    selectedItems: CurrentItem[],
    grandTotal: number
  ) => {
    const doc = new jsPDF();

    if (logoDataUrl) {
      doc.addImage(logoDataUrl, "PNG", 10, 10, 50, 50);
    }

    // Company details
    doc.setFontSize(25);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(153, 0, 255);
    doc.text("PDavies Cleaning", 120, 20, { align: "center" });

    doc.setTextColor(0, 51, 102);
    doc.setFontSize(10);
    doc.text("Toll, First Street, Ruiru", 125, 30, { align: "center" });
    doc.text("Phone: (+254) 719 678 943, (+254) 716 986 935", 125, 35, {
      align: "center",
    });
    doc.text("Email: bookings@pdaviescleaning.com", 125, 40, {
      align: "center",
    });

    // Client details
    doc.setFontSize(15);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(153, 0, 255);
    doc.text("Sent to:", 20, 70);

    doc.setTextColor(0, 51, 102);
    doc.setFontSize(10);
    doc.text(`Name: ${name}`, 20, 80);
    doc.text(`Email: ${email}`, 20, 85);
    doc.text(`Phone: ${phone}`, 20, 90);
    doc.text(`Location: ${location}`, 20, 95);

    // Quotation title
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Quotation", 105, 120, { align: "center" });

    // Table headers
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Quantity", 20, 140);
    doc.text("Service Description", 60, 140);
    doc.text("Unit Price", 130, 140);
    doc.text("Amount", 170, 140);

    // Table content
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    let yPosition = 150;

    selectedItems.forEach((item) => {
      doc.text(item.quantity.toString(), 20, yPosition);
      doc.text(
        `${item.category} - ${item.service} ${
          item.size ? `(${item.size})` : ""
        } ${item.dimensions ? `(${item.dimensions})` : ""}`,
        60,
        yPosition
      );
      doc.text(
        serviceStructure[item.category]?.[item.service]?.pricePerUnit
          ? serviceStructure[item.category]?.[
              item.service
            ]?.pricePerUnit.toString()
          : item.total.toString(),
        130,
        yPosition
      );
      doc.text(item.total.toString(), 170, yPosition);
      yPosition += 10;
    });

    // Total amount
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(`Total: ${grandTotal}`, 170, yPosition + 20);

    // Terms and conditions
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(
      "This is a quotation, not an invoice. Prices are valid for 30 days.",
      20,
      yPosition + 40
    );

    doc.save("quotation.pdf");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let grandTotal = selectedItems.reduce((acc, item) => acc + item.total, 0);
    generatePDF(name, email, phone, location, selectedItems, grandTotal);
  };

  return (
    <div className="quotation-form">
      <h2>Get Your Quotation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <select onChange={handleCategoryChange} value={currentItem.category}>
          <option value="">Select Category</option>
          {Object.keys(serviceStructure).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select onChange={handleServiceChange} value={currentItem.service}>
          <option value="">Select Service</option>
          {currentItem.category &&
            Object.keys(serviceStructure[currentItem.category]).map(
              (service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              )
            )}
        </select>

        {serviceStructure[currentItem.category]?.[currentItem.service]
          ?.unit && (
          <input
            type="number"
            placeholder="Quantity"
            value={currentItem.quantity}
            onChange={handleQuantityChange}
          />
        )}

        {serviceStructure[currentItem.category]?.[currentItem.service]
          ?.options && (
          <select onChange={handleSizeChange} value={currentItem.size}>
            <option value="">Select Size</option>
            {serviceStructure[currentItem.category][
              currentItem.service
            ].options.map((option) => (
              <option key={option.size} value={option.size}>
                {option.size}
              </option>
            ))}
          </select>
        )}

        {currentItem.service === "Carpet Cleaning" && (
          <>
            <input
              type="number"
              placeholder="Carpet Width (sqft)"
              value={carpetWidth}
              onChange={(e) => handleCarpetDimensionsChange(e, "width")}
            />
            <input
              type="number"
              placeholder="Carpet Height (sqft)"
              value={carpetHeight}
              onChange={(e) => handleCarpetDimensionsChange(e, "height")}
            />
          </>
        )}

        <button type="button" onClick={addItem}>
          Add Item
        </button>

        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>
              {item.category} - {item.service} (Qty: {item.quantity}, Size:{" "}
              {item.size}, Total: {item.total})
            </li>
          ))}
        </ul>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Generate Quotation"}
        </button>
        <p>{message}</p>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default QuotationForm;
