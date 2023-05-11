import getEnabledMemberLength from "@/utils/getEnabledMemberLength";
import type { memberType } from "@/utils/getEnabledMemberLength";

test("メンバーリストの有効化された長さが取得できる", () => {
  const members: memberType[] = [{value: "sss", status: false }, { value: "sss", status: false }, {value: "sss", status: true }]

  expect(getEnabledMemberLength(members)).toBe(1);
})