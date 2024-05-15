import { useState } from "react"

function Layout({children,bg}) {
  return (
    <div className={`w-screen h-screen ${bg} bg-cover`}>
        <img
        className=" py-10 px-6"
        src="svgs/Tata-gluco-logo.svg" alt="Tata-gluco-logo" />\
        {children}
    </div>
  )
}
export default Layout
