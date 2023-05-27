const dateOptions = Object.freeze({ day: "2-digit", month: "short", year: "numeric" });
const timeOptions = Object.freeze({ hour: "2-digit", minute: "2-digit", hour12: false });

export function getDateAndTime(timestamp: string | number) {
    const date = new Date(Number(timestamp));
    return date.toLocaleDateString("en-UK", dateOptions) + " " + date.toLocaleTimeString("en-UK", timeOptions);
}

export function decodeText(text: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
}

// Footer color schema: #3898d4
// Button color: #f7866e
// User type message box color: #fcf6c4
// Other chats box color: #ffffff
// Primary text color: #454b51
// Secondary text color: #b7bdc1