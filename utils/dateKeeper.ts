const timeOver = new Date("2026-09-25T00:00:00").getTime();
export const timeKeeper = () => {
    let datePast = false
    const now = new Date().getTime();
    if (now >= timeOver) {
        datePast = true
    }
     
    return {timeOver, datePast}
}