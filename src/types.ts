import { CSSProperties, HTMLInputTypeAttribute, PropsWithChildren } from "react"

export interface AppContextProps extends PropsWithChildren {}

export interface AuthProviderProps extends PropsWithChildren {
  // Define your context properties here
}

export interface TextButtonProps extends PropsWithChildren {
  text: string
  onClick?: () => void
  className?: string
  Icon?: React.ReactNode
}

export interface ButtonProps extends PropsWithChildren {
  text: string
  onClick?: () => void
  className?: string
  Icon?: React.ReactNode
}

export interface IconButtonProps extends PropsWithChildren {
  onClick: Function
  className?: string
  Icon?: React.ReactNode
}

export interface NavbarProps extends PropsWithChildren {
  toggleSidebar: Function
}

export interface DrawerProps extends PropsWithChildren {
  openDrawer: boolean
  handleDrawer: Function
}

export interface CarouselProps {
  readonly title: string
  readonly data: any[]
  readonly renderItem: (item: any, index: number, isSnapPoint: boolean) => React.ReactElement
}

export interface AirdropCardProps {
  airdrop: any
  index: number
  isSnapPoint: boolean
}

export type AirdropProps = {
  name: string
  removed: boolean
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type UserProps = {
  id: string
  name: string
  email: string
  premium: boolean
  isVerified: boolean
  removed: boolean
  uid: string
  userRole: UserRole
}

export type AddUserProps = {
  id: string
  name: string
  email: string
  premium: boolean
  isVerified: boolean
  removed: boolean
  password: string
  uid: string
  userRole: UserRole
}

export type ExistingUserProps = {
  password: string
  email: string
}

export interface TextfieldProps {
  isDisabled?: boolean
  type?: HTMLInputTypeAttribute
  className?: string
  id?: string
  label?: string
  name?: string
  onBlur?: Function
  onChange: Function
  placeholder?: string
  style?: CSSProperties
  value?: string
}

export interface AccordionProps extends PropsWithChildren {
  title: string
  isOpen?: boolean
}