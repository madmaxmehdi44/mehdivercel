import Head from "next/head"
import React, { FC } from "react"
import { BlitzLayout } from "@blitzjs/next"
import NavBar from "../components/NavBar"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "mehdivercel"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col h-screen  justify-between bg-slate-700">
        <header className=" ">
          <NavBar />
        </header>
        <main className="mb-auto no-scrollbar overflow-scroll font-display">{children}</main>
        <footer className="flex flex-col">
          <a href="https://Arput.com" target="_blank" rel="noopener noreferrer">
            Powered by Arput.com
          </a>
        </footer>
      </div>
    </>
  )
}

export default Layout
