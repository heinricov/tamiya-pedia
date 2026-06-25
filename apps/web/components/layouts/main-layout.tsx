import React from "react"
import { NavHeader } from "../navigations/nav-header"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavHeader />
      {children}
    </>
  )
}
