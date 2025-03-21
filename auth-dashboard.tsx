import { useState } from 'react'
import { Button, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "@shadcn/ui"
import { User, Lock, Home } from "lucide-react"

export default function AuthDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [transactionHistory, setTransactionHistory] = useState<string[]>([])

  const handleLogin = () => {
    // Simple authentication logic
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true)
      setTransactionHistory(['Transaction 1', 'Transaction 2', 'Transaction 3'])
    } else {
      alert('Invalid credentials')
    }
  }
const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
    setTransactionHistory([])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      {!isLoggedIn ? (
        <div className="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <Button onClick={handleLogin} className="w-full">
            Login
          </Button>
        </div>
      ) : (
        <div className="max-w-md w-full p-6 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-500" />
              <span className="text-lg font-bold">Welcome, {username}</span>
   </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <Home className="h-5 w-5 text-gray-500" />
              <span className="text-lg font-bold">Transaction History</span>
            </div>
            <ul className="mt-2 space-y-2">
              {transactionHistory.map((transaction, index) => (
                <li key={index} className="bg-white p-2 rounded-lg shadow-md">
                  {transaction}
                </li>
              ))}
            </ul>
          </div>
          <Button onClick={handleLogout} className="w-full">
            Logout
          </Button>
        </div>
      )}
    </div>
  )
}
