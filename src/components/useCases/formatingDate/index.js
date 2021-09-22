function returnDate(date = new Date()) {
    let today = new Date(date+" EDT");
    console.log(today)
    let dayOfWeek = today.toLocaleDateString("en-us", { weekday: "short" });
    let month = today.toLocaleDateString("en-us", { month: "short" });
    today = today.toLocaleDateString().split("/");
    return [
            today[0],
            dayOfWeek,
            month
    ]   
    
}

export { returnDate }