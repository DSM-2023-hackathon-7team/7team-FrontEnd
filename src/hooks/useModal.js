import { useRecoilState } from "recoil";
import { modalsAtomFamily } from "../utils/atom/atom";

export const useModal = (modalName) => {
  const [modal, setModal] = useRecoilState(modalsAtomFamily(modalName));

  const openModal = () => {
    setModal((prev) => ({ ...prev, isOpen: true }));
  };

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  return { modal, openModal, closeModal };
};
