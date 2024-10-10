import React, { useState, useEffect } from 'react';
import styles from "./TrolloloCards.module.css";
import { MdOutlineModeEdit, MdOutlineDelete, MdOutlineArrowCircleRight, MdCircle } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Modal from "../CardModal/Cardmodal";

function TrolloloCards({ cardData, onEdit, onDelete }) { // Modifică aici
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDeadlineToday, setIsDeadlineToday] = useState(false); 

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const checkIfDeadlineIsToday = () => {
    const today = new Date();
    const deadline = new Date(cardData.deadline);
    return (
      today.getDate() === deadline.getDate() &&
      today.getMonth() === deadline.getMonth() &&
      today.getFullYear() === deadline.getFullYear()
    );
  };

  useEffect(() => {
    setIsDeadlineToday(checkIfDeadlineIsToday());
  }, [cardData.deadline]);

  const handleSaveChanges = (updatedData) => {
    onEdit(updatedData); // Apelează funcția pentru a actualiza cardul
    setShowModal(false);
  };

  const getPriorityClass = () => {
    switch (cardData.priority) {
      case "Low":
        return styles.priorityLow;
      case "Medium":
        return styles.priorityMedium;
      case "High":
        return styles.priorityHigh;
      case "No Priority":
        return styles.priorityNo;
      default:
        return "";
    }
  };

  return (
    <>
      <div className={styles.containerCard}>
        <div className={`${styles.colorStatus} ${getPriorityClass()}`}></div>

        <div className={styles.cardWrapper}>
          <div className={styles.containerContent}>
            <div className={styles.titleCard}>
              <span className={styles.titleText}>{cardData.title}</span>
            </div>
            <div className={styles.commentCard}>
              <div className={styles.commentText}>{cardData.description}</div>
            </div>
          </div>

          <div className={styles.statusContainer}>
            <div className={styles.statusWrapper}>
              <div className={styles.priorityContainer}>
                <span className={styles.priorityText}>Priority</span>
                <div className={styles.priorityStatus}>
                  <MdCircle className={`${styles.cardIcons} ${getPriorityClass()}`} /> 
                  <span>{cardData.priority}</span>
                </div>
              </div>

              <div className={styles.deadlineContainer}>
                <span className={styles.deadlineText}>Deadline</span>
                <div className={styles.deadlineDate}>
                  {new Date(cardData.deadline).toLocaleDateString('en-GB')}
                </div>
              </div>
            </div>

            <div className={styles.buttonsContainer}>
              <div className={styles.buttonBell}>
                <FaRegBell className={`${styles.button} ${isDeadlineToday ? styles.greenBell : ""}`} />
              </div>

              <div className={styles.buttonWrapper}>
                <div>
                  <MdOutlineArrowCircleRight className={styles.button} />
                </div>
                <div onClick={toggleModal}>
                  <MdOutlineModeEdit className={styles.button} />
                </div>
                <div>
                  <MdOutlineDelete className={styles.button} onClick={() => onDelete(cardData)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal
          onClose={toggleModal}
          cardData={cardData} 
          setCardData={handleSaveChanges} 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
    </>
  );
}

export default TrolloloCards;
