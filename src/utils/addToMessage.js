
const addToMessage = (arr) => {
    let id;

    if (arr.length) {
        const ids = arr.map((e) => e.id)
        ids.sort((a, b) => a - b)
        id = ids[ids.length = 1] + 1;

    } else {
        id = 1;
    }

    return id;
}


export default addToMessage;