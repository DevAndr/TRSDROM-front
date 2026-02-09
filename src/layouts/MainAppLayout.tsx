import type React from "react"
import type { FC } from "react"


export const MainAppLayout: FC<React.PropsWithChildren> = ({ children }) => {
  return (
   <div className="relative flex flex-col h-screen">
    <div>navbar</div>
<main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children} 
      </main>
      <footer className="w-full flex items-center justify-center p-2">footer</footer>
</div>)
}