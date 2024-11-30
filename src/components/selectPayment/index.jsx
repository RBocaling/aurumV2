/* eslint-disable react/prop-types */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
} from "@nextui-org/react";
import { buyAssets, ConvertAssets } from "../../constants";
import { Search } from "lucide-react";

export default function SelectedPayment({
  isOpen,
  onClose,
  handleSelected,
  type,
}) {
  const assets =
    type === "buy" ? buyAssets : type === "convert" ? ConvertAssets : [];

  return (
    <>
      <Modal size="lg" isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {
            <>
              <ModalHeader className="flex flex-col gap-1">
                Select a token
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-5 pt-4 pb-7 px-4">
                  <Input
                    type="email"
                    placeholder="Search token"
                    labelPlacement="outside"
                    startContent={
                      <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                  />
                  {assets?.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleSelected(item);
                        onClose();
                      }}
                      className="flex items-center justify-between gap-5 text-2xl font-medium text-smoke bg-ash-light/60 p-3 rounded-xl border border-ash-light hover:bg-ash-light hover:text-smoke/50 transition-all ease-in-out"
                    >
                      <div className="flex items-center gap-6">
                        {item.icon}
                        {item.label}
                      </div>
                      <span className="text-base">{12000}</span>
                    </button>
                  ))}
                </div>
              </ModalBody>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
