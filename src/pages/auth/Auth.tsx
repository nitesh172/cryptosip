import { createUser, loginUser } from "api/users"
import { images } from "assets"
import { Button, TextButton, Textfiled } from "components"
import { useAppDispatch, useAppSelector } from "customHooks/redux"
import { useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router"
import { AddUserProps, ExistingUserProps, UserRole } from "types"

const Auth = () => {
  const location = useLocation()
  const { isAuthenticate } = useAppSelector((state) => state.userReducer)

  if(isAuthenticate === null) return null
  if(isAuthenticate) return <Navigate to="/" replace/> 

  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="hidden lg:flex lg:w-[45%] xl:w-1/2 p-10 bg-[#F2F4F8] flex-col justify-between">
        <img src={images.Logo} alt="" className="w-20 h-2w-20" />
        <div className="flex flex-col gap-6">
          <div className="text-lg lg:text-3xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
          <div className="text-base text-gray-500">
            Our regiteration process is quick and easy, taking no more than 10 minutes to complete
          </div>
        </div>
        <div>
          <div className="w-full h-56 border">
            {/* Testmonials */}
          </div>
        </div>
      </div>
      {location.pathname === "/login" ? <LoginForm /> : <SignupForm />}
    </div>
  )
}

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const initalUser = {
    email: "",
    password: "",
  }

  const [userDetails, setUserDetails] = useState<ExistingUserProps>(initalUser)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let field = event.target.name
    let fieldValue = event.target.value
    setUserDetails({ ...userDetails, [field]: fieldValue })
  }

  const handleLogin = () => {
    loginUser(userDetails, dispatch)
  }

  return (
    <div className="px-6 py-12 md:p-32 lg:p-24 xl:p-44 flex-1 flex flex-col md:justify-center overflow-auto overflow-x-hidden">
      <img
        src={images.Logo}
        onClick={() => navigate("/")}
        alt=""
        className="w-14 h-14 block lg:hidden mb-6"
      />
      <div className="text-2xl font-semibold mb-3">Welcome back</div>
      <div className="text-base mb-8">Welcome back! Please enter your details.</div>
      <Textfiled
        label="Email"
        type="email"
        name="email"
        onChange={handleChange}
        className="mb-5"
        value={userDetails.email}
        placeholder="Enter your email"
      />
      <Textfiled
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        className="mb-6"
        value={userDetails.password}
        placeholder="••••••••••••••••"
      />
      <TextButton text="Forgot password" className="self-end mb-6" />
      <Button
        text="Login"
        onClick={handleLogin}
        className="bg-[#0578FF] text-white border-[#0578FF] hover:border-[#0578FF] mb-6"
      />
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-sm font-normal">Don’t have an account?</div>
        <TextButton
          text="Sign up"
          className="text-sm font-semibold"
          onClick={() => navigate("/signup")}
        />
      </div>
    </div>
  )
}

const SignupForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const initalUser = {
    id: `user_123`,
    name: "",
    email: "",
    premium: false,
    isVerified: false,
    removed: false,
    password: "",
    uid: "",
    userRole: UserRole.USER,
  }

  const [userDetails, setUserDetails] = useState<AddUserProps>(initalUser)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let field = event.target.name
    let fieldValue = event.target.value
    setUserDetails({ ...userDetails, [field]: fieldValue })
  }

  const handleGetStarted = () => {
    createUser(userDetails, dispatch)
  }

  return (
    <div className="px-6 py-12 md:p-44 flex-1 flex flex-col md:justify-center overflow-auto overflow-x-hidden">
      <img src={images.Logo} alt="" onClick={() => navigate("/")} className="w-14 h-14 block xl:hidden mb-6" />
      <div className="text-2xl font-semibold mb-3">Sign up</div>
      <div className="text-base mb-8">Welcome back! Please enter your details.</div>
      <Textfiled
        label="Name"
        type="text"
        name="name"
        value={userDetails?.name}
        onChange={handleChange}
        className="mb-5"
        placeholder="Enter your name"
      />
      <Textfiled
        label="Email"
        type="email"
        name="email"
        value={userDetails?.email}
        onChange={handleChange}
        className="mb-5"
        placeholder="Enter your email"
      />
      <Textfiled
        label="Password"
        type="password"
        name="password"
        value={userDetails?.password}
        onChange={handleChange}
        className="mb-6"
        placeholder="Create a password"
      />
      <TextButton text="Forgot password" className="self-end mb-6" />
      <Button
        text="Get started"
        onClick={handleGetStarted}
        className="bg-[#0578FF] text-white border-[#0578FF] hover:border-[#0578FF] mb-6"
      />
      <div className="flex flex-row gap-1 justify-center items-center">
        <div className="text-sm font-normal">Already have an account?</div>
        <TextButton
          text="Login"
          className="text-sm font-semibold"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  )
}

export default Auth
