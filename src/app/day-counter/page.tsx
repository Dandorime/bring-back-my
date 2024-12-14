'use client'
import { Page } from "@/components/Page";
import { Text } from "@telegram-apps/telegram-ui";
import { useState } from "react";

export default function DayCounterPage()  {
    const otkup = 30
    const [xOtkup, setXOtkup] = useState(1)

    const checkOtkup = () => {
        return otkup * xOtkup
    }

    const nextOtkup = () => {
        return checkOtkup() + otkup
    }

    return <Page>
        <div className='flex flex-1 w-full h-full bg-[#FFF07D] border-[#51534F] border-2 justify-center items-center p-[20px] rounded-[20px]'>
            <div className="flex flex-col gap-[50px] w-full">
                <div className='flex justify-between w-full h-full'>
                    <div className="flex justify-center items-center flex-col gap-[6px] text-[#51534F] text-[25px]">
                        <h2>
                            пройдено
                        </h2>
                        <div className="flex justify-center w-[130px] h-[130px] items-center bg-[#EBEEF4] rounded-[20px]">
                                <h2>
                                    2/15
                                </h2>
                        </div>
                        <h2>
                            дней
                        </h2>
                    </div>
                    
                    <div className="flex justify-center items-center flex-col gap-[6px] text-[#51534F] text-[25px]">
                        <h2>
                            пропущено
                        </h2>
                        <div className="flex justify-center w-[130px] h-[130px] items-center bg-[#EBEEF4] rounded-[20px]">
                                <h2>
                                    <span className="text-error">1</span>/5
                                </h2>
                        </div>
                        <h2>
                            дней
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col w-full justify-center items-center gap-4">
                    <button onClick={() => setXOtkup(xOtkup + 1)} className="btn bg-[#51534F] py-3 h-fit rounded-[20px] text-[20px] text-[#EBEEF4] border-none shadow-none hover:bg-[#51534F] hover:shadow-none">
                        <h2>
                            Откупиться {checkOtkup()}
                        </h2>
                    </button>
                    {/* <div className="bg-primary rounded-sm p-4">
                        Будь осторожен, ещё раз пропустишь и будет {nextOtkup()}!!
                    </div> */}
                </div>
            </div>
            
        </div>
        </Page>
}