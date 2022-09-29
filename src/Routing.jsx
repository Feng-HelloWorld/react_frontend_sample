import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home/Home"
import User from "./pages/User/User"
import NotFound from "./pages/Error/NotFound"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route index path="/home" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routing
