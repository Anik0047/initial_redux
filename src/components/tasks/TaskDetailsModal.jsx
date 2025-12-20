import React from "react";
import Modal from "../ui/Modal";
import { useSelector } from "react-redux";

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {
  const { userSpecificTasks } = useSelector((state) => state.taskSlice);

  const task = userSpecificTasks.find((item) => item.id === id);

  console.log(userSpecificTasks);
  console.log(task);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      {task?.description}
    </Modal>
  );
};

export default TaskDetailsModal;
