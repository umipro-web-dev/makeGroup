interface memberType {
  value: string,
  status: boolean
}

const getEnabledMemberLength = (Val: memberType[]) => {
    let length = 0;
    for (const i of Val) {
        if (i.status) length++;
    }

    return length;
}

export default getEnabledMemberLength;
export { memberType };