import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import emailjs from "emailjs-com";
import logo from "../assets/logo.png";
import "./QuotationForm.css";

const serviceStructure = {
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

const QuotationForm = ({ service, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
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

  const handleCategoryChange = (e) => {
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

  const handleServiceChange = (e) => {
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

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    const service = serviceStructure[currentItem.category][currentItem.service];
    let total = 0;

    if (service.pricePerUnit) {
      total = quantity * service.pricePerUnit;
    }

    setCurrentItem({ ...currentItem, quantity, total });
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    const service = serviceStructure[currentItem.category][currentItem.service];
    const selectedSize = service.options.find((option) => option.size === size);

    setCurrentItem({ ...currentItem, size, total: selectedSize.price });
  };

  const handleCarpetDimensionsChange = (e, dimension) => {
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
        serviceStructure["Upholstery Cleaning"]["Carpet Cleaning"].pricePerUnit;
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
    name,
    email,
    phone,
    location,
    selectedItems,
    grandTotal
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
      doc.text(item.quantity.toString(), 30, yPosition);
      doc.text(
        `${item.category} - ${item.service}${
          item.size ? ` (${item.size})` : ""
        }${item.dimensions ? ` (${item.dimensions} ft)` : ""}`,
        60,
        yPosition
      );
      doc.text(
        `${(item.total / item.quantity).toFixed(2)} KSH`,
        135,
        yPosition
      );
      doc.text(`${item.total.toFixed(2)} KSH`, 175, yPosition);
      yPosition += 10;
    });

    // Total
    doc.setFont("helvetica", "bold");
    doc.text(`Total: ${grandTotal.toFixed(2)} KSH`, 170, yPosition + 10);

    // Terms and Conditions
    // ... (keep your existing terms and conditions code)

    return doc;
  };

  const sendEmail = async (
    name,
    email,
    selectedItems,
    grandTotal,
    pdfDataUri
  ) => {
    const itemsDescription = selectedItems
      .map(
        (item) =>
          `${item.category} - ${item.service}${
            item.size ? ` (${item.size})` : ""
          }${item.dimensions ? ` (${item.dimensions} ft)` : ""}: ${
            item.quantity
          }, ${item.total.toFixed(2)} KSH`
      )
      .join("; ");

    const templateParams = {
      to_email: email,
      from_name: "P. Davies Cleaning",
      to_name: name,
      message: `Your quotation for the following services: ${itemsDescription}. Total: ${grandTotal.toFixed(
        2
      )} KSH`,
      pdf_attachment: pdfDataUri,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_USER_ID"
      );
      return true;
    } catch (error) {
      console.error("Failed to send email", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const grandTotal = selectedItems.reduce(
        (sum, item) => sum + item.total,
        0
      );

      const pdf = generatePDF(
        name,
        email,
        phone,
        location,
        selectedItems,
        grandTotal
      );
      const pdfDataUri = pdf.output("datauristring");

      // Offer PDF for download
      pdf.save("quotation.pdf");

      // Send email
      const emailSent = await sendEmail(
        name,
        email,
        selectedItems,
        grandTotal,
        pdfDataUri
      );

      if (emailSent) {
        setMessage(
          "Quotation sent successfully! Please check your email and download the PDF."
        );
      } else {
        setMessage(
          "Error sending email. Please download the PDF and contact us directly."
        );
      }
    } catch (error) {
      console.error("Error generating quotation:", error);
      setMessage(
        "An error occurred while generating the quotation. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="quotation-form">
      <h2>Get a Quote for {service.title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <select value={currentItem.category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {Object.keys(serviceStructure).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {currentItem.category && (
          <select value={currentItem.service} onChange={handleServiceChange}>
            <option value="">Select a service</option>
            {Object.keys(serviceStructure[currentItem.category]).map(
              (service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              )
            )}
          </select>
        )}

        {currentItem.service &&
          !serviceStructure[currentItem.category][currentItem.service]
            .requiresSiteVisit && (
            <>
              {currentItem.service === "Carpet Cleaning" ? (
                <>
                  <input
                    type="number"
                    placeholder="Carpet Width (ft)"
                    value={carpetWidth}
                    onChange={(e) => handleCarpetDimensionsChange(e, "width")}
                    min="1"
                    step="0.1"
                  />
                  <input
                    type="number"
                    placeholder="Carpet Height (ft)"
                    value={carpetHeight}
                    onChange={(e) => handleCarpetDimensionsChange(e, "height")}
                    min="1"
                    step="0.1"
                  />
                  <p>
                    Total Area:{" "}
                    {carpetWidth && carpetHeight
                      ? (
                          parseFloat(carpetWidth) * parseFloat(carpetHeight) * 20
                        ).toFixed(2)
                      : 0}{" "}
                    sq ft
                  </p>
                  <p>Total Price: KSH {currentItem.total.toFixed(2)}</p>
                </>
              ) : serviceStructure[currentItem.category][currentItem.service]
                  .pricePerUnit ? (
                <input
                  type="number"
                  placeholder={`Number of ${
                    serviceStructure[currentItem.category][currentItem.service]
                      .unit
                  }s`}
                  value={currentItem.quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
              ) : (
                <select value={currentItem.size} onChange={handleSizeChange}>
                  <option value="">Select size</option>
                  {serviceStructure[currentItem.category][
                    currentItem.service
                  ].options.map((option) => (
                    <option key={option.size} value={option.size}>
                      {option.size}
                    </option>
                  ))}
                </select>
              )}

              {currentItem.service !== "Carpet Cleaning" && (
                <p>Total: KSH {currentItem.total.toFixed(2)}</p>
              )}

              <button type="button" onClick={addItem}>
                Add to Quote
              </button>
            </>
          )}

        {currentItem.service &&
          serviceStructure[currentItem.category][currentItem.service]
            .requiresSiteVisit && (
            <p>This service requires a site visit for accurate quotation.</p>
          )}

        {selectedItems.length > 0 && (
          <div>
            <h3>Selected Items:</h3>
            <ul>
              {selectedItems.map((item, index) => (
                <li key={index}>
                  {item.category} - {item.service}
                  {item.quantity > 1 ? ` - Quantity: ${item.quantity}` : ""}
                  {item.size ? ` - Size: ${item.size}` : ""}
                  {item.dimensions
                    ? ` - Dimensions: ${item.dimensions} ft`
                    : ""}
                  - Total: KSH {item.total.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>
              Grand Total: KSH{" "}
              {selectedItems
                .reduce((sum, item) => sum + item.total, 0)
                .toFixed(2)}
            </p>
          </div>
        )}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Quotation"}
        </button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default QuotationForm;
