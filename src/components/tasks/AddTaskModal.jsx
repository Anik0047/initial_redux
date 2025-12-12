import React from "react";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Custom Modal">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        exercitationem deserunt placeat explicabo est accusantium, non libero
        mollitia, nihil reprehenderit laborum voluptatum possimus omnis ullam
        sed! Repellat officiis cumque dolorum.
      </p>
    </Modal>
  );
};

export default AddTaskModal;
