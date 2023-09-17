import { object, ref, string } from 'yup'

const registerUserSchema = object().shape({
  displayName: string().min(3).max(25).required("Please enter name can't be empty."),
  email: string().email().required("Please enter email can't be empty."),
  password: string().min(8).max(16).required("Please enter password can't be empty."),
})

const loginUserSchema = object().shape({
  email: string().email().required("Please enter email can't be empty."),
  password: string().required("Please enter password can't be empty."),
})

const forgotUserSchema = object().shape({
  email: string().email().required("Please enter email can't be empty."),
})

const resetPasswordSchema = object().shape({
  password: string().min(8).max(16).required("Please enter password can't be empty."),
  confirmPassword: string()
    .required("Please enter confirm password can't be empty.")
    .oneOf([ref('password')], 'Password must matched.'),
})

const updatePasswordSchema = object().shape({
  oldPassword: string().min(8).max(16).required("Please enter exist password can't be empty."),
  password: string().min(8).max(16).required("Please enter new password can't be empty.").notOneOf([ref('oldPassword')], 'Password must different.'),
  confirmPassword: string()
    .required("Please enter confirm password can't be empty.")
    .oneOf([ref('password')], 'Password must matched.'),
})

const deleteAccountSchema = object().shape({
  password: string().min(8).max(16).required("Please enter password can't be empty."),
})

const accountInfoSchema = object().shape({
  displayName: string().required("Please enter name can't be empty."),
  email: string().required("Please enter email can't be empty."),
  phoneNumber: string().required("Please enter phone number can't be empty."),
  address: string().required("Please enter address can't be empty.")
})

export {
  registerUserSchema,
  loginUserSchema,
  forgotUserSchema,
  resetPasswordSchema,
  updatePasswordSchema,
  accountInfoSchema,
  deleteAccountSchema
}
