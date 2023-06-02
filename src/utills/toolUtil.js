exports.formatTime=(timestamp)=> {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');


    const formattedTime = `${year}-${month}-${day}`;
    return formattedTime;
}

