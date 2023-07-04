import { atomFamily } from "recoil";

export const modalsAtomFamily = atomFamily({
  key: "modalsAtomFamily",
  default: (id) => ({
    id,
    isOpen: false,
    title: "",
  }),
});
