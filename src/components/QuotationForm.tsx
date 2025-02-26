import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import logo from "../assets/logo.png";
import "./QuotationForm.css";

interface ServiceDetails {
  pricePerUnit?: number;
  unit?: string;
  options?: { size: string; price: number }[];
  requiresSiteVisit?: boolean;
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
      if (ctx) {
        // CHECK IF ctx is NOT null
        ctx.drawImage(img, 0, 0);
        setLogoDataUrl(canvas.toDataURL("image/png"));
      } else {
        console.error("Could not get 2D context for canvas");
      }
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
      const total = 0;
      setCurrentItem({ ...currentItem, total: total });
    }
  };

  const handleAddItem = () => {
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
  };

  const removeItem = (index: number) => {
    const newItems = [...selectedItems];
    newItems.splice(index, 1);
    setSelectedItems(newItems);
  };

  const calculateTotal = () => {
    let total = 0;
    selectedItems.forEach((item) => {
      total += item.total;
    });
    return total;
  };

  const generatePDF = async () => {
    setIsLoading(true);
    setMessage("");

    const doc = new jsPDF();

    // Add logo
    if (logoDataUrl) {
      doc.addImage(logoDataUrl, "PNG", 10, 10, 50, 20);
    }

    // Set font
    doc.setFont("helvetica", "bold");

    // Add document title
    doc.setFontSize(20);
    doc.text("Quotation", 105, 40, { align: "center" });

    // Add client details
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 10, 60);
    doc.text(`Email: ${email}`, 10, 68);
    doc.text(`Phone: ${phone}`, 10, 76);
    doc.text(`Location: ${location}`, 10, 84);

    // Add line items
    let y = 100;
    doc.setFont("helvetica", "normal");
    selectedItems.forEach((item) => {
      doc.text(
        `${item.quantity} ${item.category} - ${item.service} - Size: ${
          item.size || "N/A"
        } - Dimensions: ${item.dimensions || "N/A"}`,
        10,
        y
      );
      doc.text(`Total: ${item.total}`, 140, y);
      y += 8;
    });

    // Add total
    doc.setFont("helvetica", "bold");
    doc.text(`Total Amount: ${calculateTotal()}`, 10, y + 10);

    // Try to save PDF
    try {
      doc.save("quotation.pdf"); // Changed to directly save the PDF

      setMessage("PDF generated successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      setMessage("Error generating PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="quotation-form-overlay">
      <div className="quotation-form">
        <h2>Quotation Form - {service}</h2>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <h3>Add Item</h3>
        <label>Category:</label>
        <select onChange={handleCategoryChange} value={currentItem.category}>
          <option value="">Select Category</option>
          {Object.keys(serviceStructure).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {currentItem.category && (
          <>
            <label>Service:</label>
            <select onChange={handleServiceChange} value={currentItem.service}>
              <option value="">Select Service</option>
              {Object.keys(serviceStructure[currentItem.category] || {}).map(
                (service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                )
              )}
            </select>
          </>
        )}

        {currentItem.service &&
          serviceStructure[currentItem.category]?.[currentItem.service]
            ?.options && (
            <>
              <label>Size:</label>
              <select onChange={handleSizeChange} value={currentItem.size}>
                <option value="">Select Size</option>
                {serviceStructure[currentItem.category]?.[
                  currentItem.service
                ]?.options?.map((option) => (
                  <option key={option.size} value={option.size}>
                    {option.size}
                  </option>
                ))}
              </select>
            </>
          )}

        {currentItem.service === "Carpet Cleaning" && (
          <>
            <label>Carpet Width (sqft):</label>
            <input
              type="number"
              value={carpetWidth}
              onChange={(e) => handleCarpetDimensionsChange(e, "width")}
            />
            <label>Carpet Height (sqft):</label>
            <input
              type="number"
              value={carpetHeight}
              onChange={(e) => handleCarpetDimensionsChange(e, "height")}
            />
          </>
        )}

        {currentItem.service &&
          !serviceStructure[currentItem.category]?.[currentItem.service]
            ?.options &&
          currentItem.service !== "Carpet Cleaning" && (
            <>
              <label>Quantity:</label>
              <input
                type="number"
                value={currentItem.quantity}
                onChange={handleQuantityChange}
              />
            </>
          )}

        <button onClick={handleAddItem}>Add Item</button>

        <h3>Items</h3>
        {selectedItems.map((item, index) => (
          <div key={index} className="item">
            {item.quantity} {item.category} - {item.service} - Size:{" "}
            {item.size || "N/A"} - Dimensions: {item.dimensions || "N/A"}
            Total: {item.total}
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}

        <p>Total: {calculateTotal()}</p>

        <button onClick={generatePDF} disabled={isLoading}>
          {isLoading ? "Generating PDF..." : "Generate PDF"}
        </button>
        {message && <p>{message}</p>}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default QuotationForm;
