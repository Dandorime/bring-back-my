import { PropsWithChildren } from "react";

export default function PromoLayout({ children }: PropsWithChildren) {
    return <div className="flex flex-1 p-2 h-full max-h-[500px]">
        {children}
    </div>
}