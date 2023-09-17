import { User } from 'firebase/auth'
import { CSSProperties, HTMLInputTypeAttribute, PropsWithChildren, FocusEventHandler } from 'react'

export interface AppContextProps extends PropsWithChildren {}

export interface AuthProviderProps extends PropsWithChildren {
  // Define your context properties here
}

export interface TextButtonProps extends PropsWithChildren {
  text: string
  onClick?: () => void
  className?: string
  Icon?: React.ReactNode
  iconPosition?: string
}

export interface ButtonProps extends PropsWithChildren {
  text: string
  onClick?: Function
  className?: string
  Icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  submitLoading?: boolean
  small?: boolean
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
  className?: string
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
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type UserInfo = User

export type ErrorProps = {
  message: string
  code: string
}

export type CurrentUserProps = {
  uid: string
  displayName: string | null
  email: string | null
  emailVerified: boolean
  isAnonymous: boolean
  phoneNumber: string | null
  photoURL: string | null
}

export type UpdateCurrentUserProps = {
  displayName?: string
  photoURL?: string
  phoneNumber?: string
  address?: string
  premium?: boolean
  removed?: boolean
  uid?: string
}

export type UserProps = {
  displayName: string
  email: string
  premium: boolean
  removed: boolean
  uid: string
  userRole: UserRole
  address: string
  phoneNumber: string
}

export type AddUserProps = {
  displayName: string
  email: string
  premium: boolean
  removed: boolean
  password: string
  uid: string
  userRole: UserRole
  address: string
  phoneNumber: string
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
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  style?: CSSProperties
  value?: string
  autoComplete?: string
  error?: string
}

export interface SwitchProps {
  isDisabled?: boolean
  id?: string
  name?: string
  onChange?: () => void
  value?: boolean
}

export interface TextAreaProps {
  isDisabled?: boolean
  className?: string
  cols?: number
  rows?: number
  id?: string
  label?: string
  name?: string
  onBlur?: FocusEventHandler<HTMLTextAreaElement>
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  style?: CSSProperties
  value?: string
  autoComplete?: string
  error?: string
}

export interface AccordionProps extends PropsWithChildren {
  title: string
  isOpen?: boolean
}

export interface CarouselSwiperProps {
  className?: string
  sliderClassName?: string
  renderItem: (item: any, index: number) => React.ReactElement
  data: any[]
}

export interface AccountTabProps {
  accountRef: any
}

export interface AirdropTabProps {
  airdropRef: any
}

export interface SecurityTabProps {
  securityRef: any
}

export interface NotificationTabProps {
  notificationRef: any
}

export interface NotificationSettingsProps {
  communication: boolean
  newsletter: boolean
  offer: boolean
  push: boolean
}

export interface PopupEncloserProps extends PropsWithChildren {
  close: (option: boolean) => void
  show: boolean
}

export interface SidebarProps {
  openSidebar: boolean
  handleSidebar: Function
}
