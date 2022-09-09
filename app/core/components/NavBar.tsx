import Link from "next/link"
// import { Image, Routes, useMutation } from "blitz"
import { Suspense, useState } from "react"
import { useCurrentUser } from "../hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
// import ProfileLogin from "./navbarSupComponents/ProfileLogin"
// import { SkewLoader, ScaleLoader } from "react-spinners"
import { useEffect } from "react"
import { Routes } from "@blitzjs/next"
// import { themeChange } from "theme-change"
// import { SunIcon, MoonIcon, MenuIcon, LockClosedIcon, XCircleIcon } from "@heroicons/react/solid"
// import ModalIndex from "./ModalCompnent"
// import LinkMenusList from "app/link-menus/components/LinkMenuList"
// import { Button } from "./Button"
// import LinkMenusMobileList from "app/link-menus/components/LinkMenuMobileList"

const MobileProfileLogin = (props) => {
  const { setIsNavOpen } = props

  return (
    <>
      {/* <MenuIcon
        tabIndex={0}
        onClick={() => setIsNavOpen((prev: Boolean) => !prev)}
        className={`bg-indigo-500 btn btn-circle glass avatar w-12 h-12 cursor-pointer hover:bg-teal-500`}
      /> */}
    </>
  )
}
const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="btn btn-warning btn-wide"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          خروج
          {/* <code className="text-sm flex gap-1">
            {currentUser.name}
            <span className="badge badge-secondary">{currentUser.role}</span>
          </code> */}
        </button>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.LoginPage()}>
          <a className="btn btn-primary btn-wide">ورود </a>
        </Link>
      </>
    )
  }
}
export function ToggleTheme() {
  return (
    <label className="swap swap-rotate bg-zinc-500 shadow-lg shadow-zinc-500/50 btn btn-circle glass  avatar w-12 h-12 cursor-pointer hover:bg-teal-500 ">
      {/* <!-- this hidden checkbox controls the state --> */}
      <input type="checkbox" />

      {/* <!-- sun icon --> */}
      <SunIcon
        className="swap-on fill-current w-12 h-12 text-yellow-200 rounded-full glass"
        data-toggle-theme="light,dark"
        data-act-class="ACTIVECLASS"
      />
      {/* <!-- moon icon --> */}
      <MoonIcon
        className="swap-off fill-current w-12 h-12  text-stone-200 rounded-full glass"
        data-toggle-theme="dark,light"
        data-act-class="ACTIVECLASS"
      />
      {/* <!-- moon icon --> */}
    </label>
  )
}

export function ToggleTheme2() {
  return (
    <label className="swap swap-rotate">
      {/* <!-- this hidden checkbox controls the state --> */}
      <input type="checkbox" />

      {/* <!-- sun icon --> */}
      <svg
        className="swap-on fill-current w-10 h-10"
        data-toggle-theme="dark,emerald"
        data-act-class="ACTIVECLASS"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      {/* <!-- moon icon --> */}
      <svg
        className="swap-off fill-current w-10 h-10"
        data-toggle-theme="emerald,dark"
        data-act-class="ACTIVECLASS"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
    // <label className="swap swap-rotate bg-zinc-500 shadow-lg shadow-zinc-500/50 btn btn-circle glass  avatar w-12 h-12 cursor-pointer hover:bg-teal-500 ">
    //   {/* <!-- this hidden checkbox controls the state --> */}
    //   <input type="checkbox" />

    //   {/* <!-- sun icon --> */}
    //   <SunIcon
    //     className="swap-on fill-current w-12 h-12 text-yellow-200 rounded-full glass"
    //     data-toggle-theme="retro,forest"
    //     data-act-class="ACTIVECLASS"
    //   />
    //   {/* <!-- moon icon --> */}
    //   <MoonIcon
    //     className="swap-off fill-current w-12 h-12  text-stone-200 rounded-full glass"
    //     data-toggle-theme="forest,retro"
    //     data-act-class="ACTIVECLASS"
    //   />
    //   {/* <!-- moon icon --> */}
    // </label>
  )
}

export const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  useEffect(() => {
    // themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
    <>
      {/* <UserInfo /> */}
      <div dir="rtl" className="sticky  shadow-xl top-0 z-50 navbar items-center justify-center ">
        {/* mobil nav */}
        <div className="flex md:hidden">
          <label className="dropdown">
            {/* <Suspense fallback={<ScaleLoader />}> */}
            <Suspense fallback={"درحال بارگزاری..."}>
              <MobileProfileLogin setIsNavOpen={setIsNavOpen} />
            </Suspense>

            {/* {isNavOpen ? ( */}

            <ul
              tabIndex={0}
              className={
                isNavOpen
                  ? "p-1 mt-3 shadow menu menu-title bg-zinc-200 dropdown-content rounded-box "
                  : "hidden"
              }
            >
              {/* <LinkMenusMobileList isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} /> */}
            </ul>
            {/* // ) : null} */}
          </label>
        </div>
        {/* end  mobil nav */}

        <div className="navbar-start">
          <div className="flex flex-row space-x-2">
            <label tabIndex={0} className="mx-1">
              <Suspense fallback={"<ScaleLoader />"}>
                <ToggleTheme2 />
              </Suspense>
            </label>
            {/* 
            <label tabIndex={0} className="dropdown dropdown-content">
              <Suspense fallback={<ScaleLoader />}>
                <ProfileLogin />
              </Suspense>

              <ul
                tabIndex={0}
                className="p-1 mt-3 min-w-max shadow menu menu-normal dropdown-content bg-base-100 rounded-box "
              >
                <li>
                  <label htmlFor="my-modal-4">پروفایل</label>
                </li>
                <li>
                  <label htmlFor="my-modal-5">ثبت نام</label>
                </li>
                <li>
                  <Suspense fallback={"loading..."}>
                    <UserInfo />
                  </Suspense>
                </li>
              </ul>
            </label> */}
          </div>
        </div>
        <div dir="ltr" className="navbar-center">
          <div className="hidden md:flex">
            <Suspense fallback={"<SkewLoader />"}>{/* <LinkMenusList /> */}</Suspense>
          </div>
        </div>

        <div className="navbar-end">
          <label className=" animate-pulse text-primary-focus  ">آرپوت</label>
        </div>
      </div>
    </>
  )
}
export const NavBar2 = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  return (
    <>
      {/* <UserInfo /> */}
      <div className="navbar glass items-center justify-center" dir="rtl">
        {/* mobil nav */}
        <div className="flex md:hidden dropdown">
          {/* <label dir="rtl" className="dropdown"> */}
          <Suspense fallback={""}>
            <MobileProfileLogin />
          </Suspense>

          <ul
            id="menu"
            tabIndex={0}
            className="p-1 mt-3 shadow menu menu-title min-w-max dropdown-content bg-base-100 rounded-box "
          >
            <LinkMenusMobileList />
          </ul>
          {/* </label> */}
        </div>
        {/* end  mobil nav */}

        <div className="navbar-start">
          <div className="flex flex-row space-x-2">
            <label tabIndex={0} className="mx-1">
              <Suspense fallback={<ScaleLoader />}>
                <ToggleTheme />
              </Suspense>
            </label>
            {/* 
            <label tabIndex={0} className="dropdown dropdown-content">
              <Suspense fallback={<ScaleLoader />}>
                <ProfileLogin />
              </Suspense>

              <ul
                tabIndex={0}
                className="p-1 mt-3 min-w-max shadow menu menu-normal dropdown-content bg-base-100 rounded-box "
              >
                <li>
                  <label htmlFor="my-modal-4">پروفایل</label>
                </li>
                <li>
                  <label htmlFor="my-modal-5">ثبت نام</label>
                </li>
                <li>
                  <Suspense fallback={"loading..."}>
                    <UserInfo />
                  </Suspense>
                </li>
              </ul>
            </label> */}
          </div>
        </div>

        <div className="navbar-center">
          <div className="hidden md:flex">
            <Suspense fallback={<SkewLoader />}>
              <LinkMenusList />
            </Suspense>
          </div>
        </div>
        <div className="navbar-end">
          <Link href={Routes.Home()}>
            <a className="btn btn-primary btn-circle">آرپوت</a>
          </Link>
        </div>
      </div>
    </>
  )
}
export default NavBar
