import { memberType } from "./getEnabledMemberLength";

const memberTypeToArray = (src: memberType[]) => {
    const array: string[] = []
    for (const i of src) {
        if (!i.status) continue;
        array.push(i.value);
    }

    return array;
}

export default memberTypeToArray;