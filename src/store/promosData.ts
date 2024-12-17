import { makeAutoObservable } from "mobx";


const usePromosData = makeAutoObservable({
        promos: [],
    
        setPromos(data: any) {
            this.promos = data
        }
        
})

export default usePromosData
