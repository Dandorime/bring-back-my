import { makeAutoObservable } from "mobx";

interface ICalendar {
    id: Number,
    date: String,
    found_id: Number,
    found_info: {
        id: Number,
        title: String,
        subtitle: String,
        description: String,
        }
    }

const useCalendarData = makeAutoObservable({
        calendar: [],
    
        setCalendar(data: any) {
            this.calendar = data
        }
        
})

export default useCalendarData
