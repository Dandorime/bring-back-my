import { Page } from "@/components/Page";
import Game from '@/components/ForGame/Game/Game'
import Constants from '@/utils/constants'


export default function GamePage() {
    return <Page>
        <div className="bg-[#705896] rounded-[20px] border-2 border-[#FFF07D] flex flex-1 w-full h-full">
        <Game
            numberOfBalloons={Constants.gameCells}
            gameDuration={Constants.gameDuration}
            />
        </div>
        
    </Page>
}