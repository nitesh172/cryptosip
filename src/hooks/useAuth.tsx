import React, { useEffect } from "react";
import { useAppSelector } from "./redux";
import { listenToAuthChanges } from "api/users";

const useAuth = () => {
  const { currentUser } = useAppSelector((state) => state.userReducer)  

  useEffect(() => {
    listenToAuthChanges()
  })

  return currentUser
};

export default useAuth;
