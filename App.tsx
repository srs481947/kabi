import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shadcn/ui/tabs"
import CurrencyConversion from './currency-conversion'
import InvoiceGenerator from './invoice-generator-with-genai'
import AuthDashboard from './auth-dashboard'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">Global Payment and Invoice Management System</h1>
      </header>
      <main className="p-4">
        <Tabs defaultValue="currency">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="currency">Currency Conversion</TabsTrigger>
            <TabsTrigger value="invoice">Invoice Generator</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="currency">
            <CurrencyConversion />
          </TabsContent>
          <TabsContent value="invoice">
            <InvoiceGenerator />
          </TabsContent>
          <TabsContent value="dashboard">
            <AuthDashboard />
          </TabsContent>
  </Tabs>
      </main>
    </div>
  )
}

