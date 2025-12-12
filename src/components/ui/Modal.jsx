import { Dialog } from "@headlessui/react";

export default function Modal({ isOpen, setIsOpen, title, children }) {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Dialog open={isOpen} onClose={close} className="relative z-10">
        <div className="fixed inset-0 flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
            <Dialog.Title className="text-white text-base font-medium">
              {title}
            </Dialog.Title>

            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
