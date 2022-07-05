import React, { SyntheticEvent } from "react";
import { ModalPortal } from "./modal";

const TestModal = ({ show, onClose }: { show: boolean, onClose: ()=> void }) => {
  const close = (e:SyntheticEvent) => {
    if(!((e.target as HTMLElement).className === 'modal__inner' )){
      onClose();
    }
  }
  return show ? (
    <ModalPortal>
      <div onClick={close} className={`modal ${show ? "show" : ""}`}>
        <div className={'modal__inner'}>test 모달</div>
      </div>
    </ModalPortal>
  ) : null;
};

export default TestModal;
