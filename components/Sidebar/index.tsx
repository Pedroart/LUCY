import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Slidebaritem from "./SlidebarIten";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
            DISPOSITIVOS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
              <Slidebaritem name="Tablero" activeCondition={pathname === "/tablero"}>
              <svg
                    fill="white" width="18" height="18" version="1.1" id="lni_lni-indent-decrease" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" viewBox="0 0 64 64">
                 <g>
                   <path d="M9.7,6.3h45.8c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3H9.7c-1.2,0-2.3,1-2.3,2.3S8.4,6.3,9.7,6.3z"/>
                   <path d="M55.5,57.8H9.7c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h45.8c1.2,0,2.3-1,2.3-2.3S56.7,57.8,55.5,57.8z"/>
                   <path d="M17.4,42.9c0.5,0.4,1.2,0.7,1.9,0.7c0.4,0,0.8-0.1,1.2-0.2c1.1-0.4,1.8-1.4,1.9-2.5l0-17.5c0-1.2-0.7-2.4-1.8-2.9
                     c-1-0.5-2.2-0.3-3.1,0.4l-10,8.5c-0.7,0.6-1.2,1.5-1.2,2.4c0,0.9,0.4,1.8,1.1,2.4L17.4,42.9L17.4,42.9z M17.9,26.5v10.9l-6.4-5.5
                     L17.9,26.5z"/>
                   <path d="M55.5,15.7H33.6c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h21.8c1.2,0,2.3-1,2.3-2.3S56.7,15.7,55.5,15.7z"/>
                   <path d="M55.5,29.8H33.6c-1.2,0-2.3,1-2.3,2.3s1,2.2,2.3,2.2h21.8c1.2,0,2.3-1,2.3-2.2S56.7,29.8,55.5,29.8z"/>
                   <path d="M55.5,43.8H33.6c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h21.8c1.2,0,2.3-1,2.3-2.3S56.7,43.8,55.5,43.8z"/>
                 </g>
                    
                  </svg>
              </Slidebaritem> 
              </li>
              <li>
              <Slidebaritem name="Dispositivo" activeCondition={pathname === "/dispositivo"}>
              <svg
                    fill="white" width="18" height="18" version="1.1" id="lni_lni-stop" xmlns="http://www.w3.org/2000/svg" x="0px"
                    y="0px" viewBox="0 0 64 64" >
                 <g clipPath="url(#clip0_130_9801)">
                   <g>
                     <path d="M56,62.3H8c-3.4,0-6.3-2.8-6.3-6.3V8c0-3.4,2.8-6.3,6.3-6.3h48c3.4,0,6.3,2.8,6.3,6.3v48C62.3,59.4,59.4,62.3,56,62.3z
                        M8,6.3C7,6.3,6.3,7,6.3,8v48c0,1,0.8,1.8,1.8,1.8h48c1,0,1.8-0.8,1.8-1.8V8c0-1-0.8-1.8-1.8-1.8H8z"/>
                   </g>
                 </g>
                    
                  </svg>
              </Slidebaritem> 
              </li>
              <li>
              <Slidebaritem name="Alarmas" activeCondition={pathname === "/alarmas"}>
              <svg class="fill-current duration-300 ease-in-out" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z" fill=""></path></svg>
              </Slidebaritem> 
              </li>
              <li>
              <Slidebaritem name="Configuracion" activeCondition={pathname === "/configuracion"}>
              <svg
                    fill="white" width="18" height="18" version="1.1" id="lni_lni-cog" xmlns="http://www.w3.org/2000/svg" x="0px"
                    y="0px" viewBox="0 0 64 64">
                 <g>
                   <path d="M32.1,19.6c-6.8,0-12.4,5.6-12.4,12.4c0,6.9,5.6,12.4,12.4,12.4S44.5,38.9,44.5,32C44.5,25.2,38.9,19.6,32.1,19.6z
                      M32.1,40c-4.4,0-7.9-3.6-7.9-7.9c0-4.4,3.5-7.9,7.9-7.9S40,27.7,40,32C40,36.4,36.4,40,32.1,40z"/>
                   <path d="M60.7,38.1l-5.6-3.1c0.2-1.1,0.3-2.2,0.3-3.3c0-1.2-0.1-2.3-0.2-3.4l5.7-3.2c1.3-0.7,1.8-2.3,1.2-3.7l-5.8-9.8
                     c-0.7-1.2-2.3-1.7-3.6-1.2l-6,3.3c-0.3-0.2-0.6-0.5-0.8-0.7c-1.1-0.9-2.1-1.8-3.7-2.6c-0.1,0-0.2-0.1-0.2-0.3V6.5
                     c0-2.6-2.1-4.8-4.8-4.8H26.9c-2.6,0-4.8,2.2-4.8,4.8l0,3.9c0,0.1-0.1,0.2-0.2,0.3c-1.5,0.7-2.6,1.7-3.8,2.6
                     c-0.2,0.2-0.5,0.4-0.7,0.6l-5.3-3c-2-1.1-3.7-0.4-4.4,0.8l-5.5,9.5C1.9,22,1.8,22.8,2,23.6c0.2,0.8,0.7,1.4,1.4,1.8L9,28.4
                     c-0.2,1-0.2,2.1-0.2,3.4c0,1.1,0.1,2.2,0.2,3.3l-5.8,3.2C1.9,39,1.4,40.6,2,42l5.8,9.8C8.5,53,10,53.5,11.4,53l6-3.3
                     c0.3,0.2,0.5,0.4,0.8,0.7c1.1,1,2.2,1.9,3.8,2.6c0.1,0,0.2,0.1,0.2,0.3v4.3c0,2.6,2.1,4.8,4.8,4.8h10.2c2.6,0,4.8-2.2,4.8-4.8V53
                     c0-0.1,0.1-0.2,0.2-0.3c1.5-0.7,2.5-1.6,3.7-2.6c0.3-0.2,0.5-0.4,0.8-0.7l5.3,3c2,1.1,3.6,0.4,4.4-0.8l5.6-9.5
                     c0.4-0.7,0.5-1.5,0.3-2.2S61.4,38.5,60.7,38.1z M53.1,48l-4.8-2.7c-1.4-0.8-3-0.6-4.2,0.4c-0.5,0.4-0.9,0.7-1.3,1.1
                     c-1,0.9-1.7,1.5-2.7,1.9c-1.6,0.8-2.7,2.5-2.7,4.3v4.4c0,0.2-0.1,0.3-0.3,0.3H26.9c-0.2,0-0.3-0.1-0.3-0.3v-4.3
                     c0-1.8-1.1-3.5-2.7-4.3c-1-0.5-1.8-1.1-2.8-2c-0.4-0.3-0.8-0.7-1.3-1c-0.7-0.5-1.5-0.8-2.4-0.8c-0.6,0-1.3,0.2-1.9,0.5l-4.8,2.7
                     l-4-6.8l4.7-2.6c1.4-0.8,2.2-2.3,2-4c-0.1-1-0.2-2-0.2-3c0-1.1,0.1-2.1,0.2-2.9c0.3-1.7-0.5-3.4-2-4.2L7,22.2l3.9-6.7l4.8,2.7
                     c1.4,0.8,3,0.6,4.2-0.4c0.4-0.3,0.8-0.7,1.2-1c1-0.9,1.8-1.5,2.8-2c1.7-0.8,2.7-2.5,2.7-4.3l0-3.9c0-0.2,0.1-0.3,0.3-0.3h10.2
                     c0.2,0,0.3,0.1,0.3,0.3v3.8c0,1.8,1.1,3.5,2.7,4.3c1,0.5,1.7,1.1,2.7,1.9c0.4,0.4,0.8,0.7,1.3,1.1c1.2,1,2.9,1.1,4.2,0.3l4.8-2.7
                     l4,6.8l-4.6,2.6c-1.4,0.8-2.2,2.5-1.9,4.2c0.1,0.9,0.2,1.9,0.2,2.9c0,1-0.1,2-0.3,3c-0.3,1.7,0.5,3.3,2,4.1l4.5,2.5L53.1,48z"/>
                 </g>
                    
                  </svg>
              </Slidebaritem> 
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}
              <li><SidebarLinkGroup
                activeCondition={
                  pathname === "/auth" || pathname.includes("auth")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/auth" || pathname.includes("auth")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_130_9814)">
                            <path
                              d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
                              fill=""
                            />
                            <path
                              d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_130_9814">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Authentication
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/auth/signin"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/auth/signin" && "text-white"
                              }`}
                            >
                              Sign In
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/auth/signup"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/auth/signup" && "text-white"
                              }`}
                            >
                              Sign Up
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup></li>
              {/* <!-- Menu Item Ui Elements --> */}

              
            </ul>
            
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
            SISTEMA
            </h3>
            <ul>
            <SidebarLinkGroup
                activeCondition={
                  pathname === "/auth" || pathname.includes("auth")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/auth" || pathname.includes("auth")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_130_9814)">
                            <path
                              d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
                              fill=""
                            />
                            <path
                              d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_130_9814">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Authentication
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/auth/signin"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/auth/signin" && "text-white"
                              }`}
                            >
                              Sign In
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/auth/signup"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/auth/signup" && "text-white"
                              }`}
                            >
                              Sign Up
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
