import React from "react"
import { NavHeader } from "../navigations/nav-header"
import { NavFooter } from "../navigations/nav-footer"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavHeader />
      {children}
      <NavFooter />
    </>
  )
}
