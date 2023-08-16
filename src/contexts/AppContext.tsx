import { createContext, useContext } from "react"
import { AppContextProps, AuthProviderProps } from "types"

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const useAppContext = () => {
  return useContext<AppContextProps>(AppContext)
}

export const AppProvider = (props: AuthProviderProps) => {
  const defaultContext: AppContextProps = {}

  return <AppContext.Provider value={defaultContext || null}>{props.children}</AppContext.Provider>
}
