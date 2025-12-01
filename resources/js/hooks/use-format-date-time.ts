import { useEffect, useState } from 'react'

export function useFormatDateAndTime(dateAndTime: string) {
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        setDate(dateAndTime.split(',')[0]);
        setTime(dateAndTime.split(',')[1]);
    }, [dateAndTime]);

    return { date, time };
}