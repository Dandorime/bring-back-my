import { PropsWithChildren } from "react";

export default function FoundBoxLayout({ children }: PropsWithChildren) {
    return <div className="flex flex-1 p-2 max-h-[500px]">
        {children}
    </div>
}