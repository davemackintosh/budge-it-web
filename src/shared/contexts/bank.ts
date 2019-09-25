import React from "react"
import { natwest } from "@src/shared/indexers/natwest"

export const BankContext = React.createContext(natwest)
export const BankProvider = BankContext.Provider
export const BankConsumer = BankContext.Consumer
