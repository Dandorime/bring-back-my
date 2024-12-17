import { makeAutoObservable } from "mobx";


const useTasksData = makeAutoObservable({
        tasks: [],
    
        setTasks(data: any) {
            this.tasks = data
        }
        
})

export default useTasksData
