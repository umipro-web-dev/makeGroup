interface memberType {
    value: string,
    status: boolean
}

const memberTypeToArray = (src: memberType[]) => {
    const array: string[] = []
    for (const i of src) {
        if (!i.status) continue;
        array.push(i.value);
    }

    return array;
}

export default memberTypeToArray;