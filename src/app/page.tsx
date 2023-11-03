"use client"
import ComponentsA from '@/components/ComponentsA'
import { createContext } from 'react'

export const nameorAge = createContext("");

export default function Home() {
  return (
    <nameorAge.Provider value={"Hello Im Context Value"}>
      <ComponentsA />
    </nameorAge.Provider>
  )
}

// export { nameorAge }

// Create Context firsr create context function ka oper
// Provider provide b ho gya
// useContext uska baad export krna createContext ko