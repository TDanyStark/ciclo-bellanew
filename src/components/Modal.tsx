import { useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal = ({ isOpen, onClose, message }: Props) => {
  if (!isOpen) return null;
  const modalRef = useRef<HTMLDivElement>(null);
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-[4px] bg-black/30"
      onMouseDown={(e) => {
        // Si el clic ocurre fuera del modal, se cierra
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
          onClose();
        }
      }}
    >
      <div className="w-full h-full grid place-content-center">
        <div
          ref={modalRef}
          className="relative bg-white rounded-xl w-full max-h-[600px] p-4 md:p-8"
        >
          <p className="text-center text-2xl">{message}</p>
          <button
            className="absolute -top-12 right-0 grid place-content-center bg-black  rounded-full w-8 h-8 text-white hover:bg-gray-900 transition-all duration-300 cursor-pointer"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="currentColor"
              data-darkreader-inline-fill=""
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
