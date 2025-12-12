import { Dialog } from "@headlessui/react";

export default function Modal({ isOpen, setIsOpen }) {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Dialog open={isOpen} onClose={close} className="relative z-10">
        <div className="fixed inset-0 flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
            <Dialog.Title className="text-white text-base font-medium">
              Payment successful
            </Dialog.Title>

            <p className="mt-2 text-sm text-white/50">
              Your payment has been successfully submitted.
            </p>

            <div className="mt-4">
              <button
                onClick={close}
                className="rounded-md bg-gray-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-600"
              >
                Got it, thanks!
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
