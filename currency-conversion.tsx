import { useState } from 'react'
import { Button, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "/components/ui"
import { FileText } from "lucide-react"

export default function InvoiceGenerator() {
  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [taxRate, setTaxRate] = useState('10')
  const [invoice, setInvoice] = useState('')

  const generateInvoice = () => {
    const price = parseFloat(productPrice) || 0
    const tax = (price * parseFloat(taxRate)) / 100
    const total = price + tax

    const invoiceText = `
      Customer Name: ${customerName}
      Customer Email: ${customerEmail}
      Product Name: ${productName}
      Product Price: $${price.toFixed(2)}
      Tax Rate: ${taxRate}%
      Tax: $${tax.toFixed(2)}
      Total: $${total.toFixed(2)}
    `

    setInvoice(invoiceText)
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
