import React from "react";
import styles from "./Cardmodal.module.css";

import ReactDatePicker from "react-datepicker";
import CustomInput from "../Custominput/CustomInput";
import "react-datepicker/dist/react-datepicker.css";

function Modal({ onClose, selectedDate, setSelectedDate, isLoading }) {
  const formatDate = (dateInput) => {
    let date;

    if (dateInput instanceof Date) {
      date = dateInput;
    } else {
      date = new Date(dateInput);
    }

    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    return date.toISOString();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
       

        <div className={styles.cardContainer}>

            <div className={styles.cardName}>
            <h3>Edit card </h3>
            </div>

          <div className={styles.inputContainer}>
            <input className={styles.inputText} type="text" placeholder="Card title" />
            <input className={styles.inputText} type="text" placeholder="Description" textarea="textarea" />
          </div>

          

          <div className={styles.statusContainer}>
                    <div className={styles.labelContainer}> 
                        <div>Label Color</div>
                        <div className={styles.labelColor}>
                            <div className={styles.labelColor1}></div>  
                            <div className={styles.labelColor2}></div>
                            <div className={styles.labelColor3}></div>
                            <div className={styles.labelColor4}></div>
                        </div>
                    </div>
                    <div className={styles.deadlineContainer}>
                        <div>Deadline</div>

                        <div className="date-picker-container">
                        <ReactDatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        customInput={
                        <CustomInput
                            value={selectedDate ? formatDate(selectedDate) : ""}
                        />
                        }
                        dateFormat="dd-MM-yy"
                        className="date-picker"
                    />
                </div>
               </div>
          </div>

          <div className={styles.buttonContainer}>
                <button disabled={isLoading}>
                <span>+</span>
                <div>Edit</div>
                </button>
          </div>
        </div>
        {isLoading && <div className={styles.loading}>Loading...</div>}
      </div>
    </div>
  );
}

export default Modal;
