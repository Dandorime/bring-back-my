import { PropsWithChildren } from "react";

export default function GameLayout({ children }: PropsWithChildren) {
    return <div className="flex flex-1 p-2 max-h-[500px] h-full">
        {children}
    </div>
}