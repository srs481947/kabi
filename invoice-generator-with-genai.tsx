import { useState } from 'react'
import { Button, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "@shadcn/ui"
import { FileText } from "lucide-react"

// Simulated GenAI function
const generateDescription = (productName: string): string => {
  const descriptions = {
    "Laptop": "High-performance laptop with 16GB RAM and 512GB SSD.",
    "Smartphone": "Latest model smartphone with 128GB storage and 12MP camera.",
    "Headphones": "Noise-cancelling headphones with 30-hour battery life.",
    "Monitor": "4K UHD monitor with 144Hz refresh rate.",
    "Keyboard": "Mechanical gaming keyboard with RGB lighting.",
    "Mouse": "Wireless gaming mouse with customizable DPI settings.",
    "Tablet": "Portable tablet with 10.1-inch display and stylus support.",
    "Smartwatch": "Smartwatch with health tracking and GPS.",
    "Camera": "DSLR camera with 4K video recording.",
    "Printer": "Wireless printer with fast printing speed.",
  }
 return descriptions[productName] || "A high-quality product."
}

export default function InvoiceGenerator() {
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [taxRate, setTaxRate] = useState('10')
  const [invoice, setInvoice] = useState('')
  const [productDescription, setProductDescription] = useState('')

  const generateInvoice = () => {
    const price = parseFloat(productPrice) || 0
    const tax = (price * parseFloat(taxRate)) / 100
    const total = price + tax

    const invoiceText = `
      Customer Name: ${customerName}
      Customer Email: ${customerEmail}
      Product Name: ${productName}
      Product Description: ${productDescription}
      Product Price: $${price.toFixed(2)}
      Tax Rate: ${taxRate}%
      Tax: $${tax.toFixed(2)}
      Total: $${total.toFixed(2)}
    `

    setInvoice(invoiceText)
  }
 const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setProductName(name)
    setProductDescription(generateDescription(name))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Invoice Generator</h2>
        <div className="mb-4">
          <Label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
            Customer Name
          </Label>
          <Input
            id="customerName"
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
 />
        </div>
        <div className="mb-4">
          <Label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">
            Customer Email
          </Label>
          <Input
            id="customerEmail"
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="productName" className="block text-sm font-medium text-gray-700">
            Product Name
          </Label>
          <Input
            id="productName"
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
        </div>
        <div className="mb-4">
          <Label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
            Product Description
          </Label>
          <Textarea
            id="productDescription"
            value={productDescription}
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
            Product Price
          </Label>
          <Input
            id="productPrice"
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
 />
        </div>
        <div className="mb-4">
          <Label htmlFor="taxRate" className="block text-sm font-medium text-gray-700">
            Tax Rate (%)
          </Label>
          <Input
            id="taxRate"
            type="number"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <Button onClick={generateInvoice} className="w-full mb-4">
          Generate Invoice
        </Button>
        {invoice && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Generated Invoice</h3>
            <Textarea value={invoice} readOnly className="w-full h-40" />
          </div>
        )}
      </div>
    </div>
  )
}
