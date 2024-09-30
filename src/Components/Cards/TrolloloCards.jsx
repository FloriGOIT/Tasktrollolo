import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import styles from "./TrolloloCards.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdCircle } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Modal from "../CardModal/Cardmodal";

function TrolloloCards() {
  // const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const toggleModal = () => {
    setShowModal(!showModal);
  };


    // const formatDate = dateInput => {
    //   let date;
    //   if (dateInput instanceof Date) {
    //     date = dateInput;
    //   } else {
    //     date = new Date(dateInput);
    //   }
    //   if (isNaN(date.getTime())) {
    //     return 'Invalid date';
    //   }
    //   const day = String(date.getDate()).padStart(2, '0');
    //   const month = String(date.getMonth() + 1).padStart(2, '0');
    //   const year = String(date.getFullYear()).slice(-2);
    //   return `${day}-${month}-${year}`;
    // };


  return (
    <>
      <div className={styles.containerCard}>
        <div className={styles.colorStatus}></div>
        <div className={styles.cardWrapper}>
          <div className={styles.containerContent}>
            <div className={styles.titleCard}>
              <span className={styles.titleText}> The Watch Spot Design</span>
            </div>
            <div className={styles.commentCard}>
              <span className={styles.commentText}>
                Create a viasualy stunning and eye-catching watch dial design
                that embodies our brands..
              </span>
            </div>
          </div>

          <div className={styles.statusContainer}>
            <div className={styles.statusWrapper}>
              <div className={styles.priorityContainer}>
                <span className={styles.priorityText}>Priority</span>
                <div className={styles.priorityStatus}>
                  <MdCircle className={styles.cardIcons} />
                  <span>Low</span>
                </div>
              </div>

              <div className={styles.deadlineContainer}>
                <span className={styles.deadlineText}>Deadline</span>
                <div className={styles.deadlineDate}>25.12.2033</div>
              </div>
            </div>

            <div className={styles.buttonsContainer}>
              <div className={styles.buttonBell}>
                <FaRegBell className={styles.button} />
              </div>

              <div className={styles.buttonWrapper}>
              <div>
                <MdOutlineArrowCircleRight className={styles.button} />
              </div>
              <div onClick={toggleModal}>
                <MdOutlineModeEdit className={styles.button} />
              </div>
              <div>
                <MdOutlineDelete className={styles.button} />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {showModal && (
          <Modal
            onClose={toggleModal}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}
    </>
  );
}

export default TrolloloCards;
