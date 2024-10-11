import React, { useState, useEffect } from "react";
import styles from "./Cardmodal.module.css";
import CalendarPicker from "../Custominput/PrimeCalendar";

function AddCard({
  onClose,
  onSave,
  cardData,
  setCardData,
  setSelectedDate,
  isLoading,
}) {
  const [editedTitle, setEditedTitle] = useState(cardData.title);
  const [editedDescription, setEditedDescription] = useState(
    cardData.description
  );
  const [editedPriority, setEditedPriority] = useState(cardData.priority);
  const [editedDeadline, setEditedDeadline] = useState(
    new Date(cardData.deadline)
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 



  useEffect(() => {
    setSelectedDate(editedDeadline);
  }, [editedDeadline, setSelectedDate]);

  const handleSave = () => {
    const updatedData = {
      title: editedTitle,
      description: editedDescription,
      priority: editedPriority,
      deadline: editedDeadline,
    };
    setCardData(updatedData);
    onSave(); 
    onClose();
  };

  const priorities = [
    {
      value: "No Priority",
      label: "No Priority",
      colorClass: styles.noPriorityCircle,
    },
    { value: "Low", label: "Low", colorClass: styles.lowPriorityCircle },
    {
      value: "Medium",
      label: "Medium",
      colorClass: styles.mediumPriorityCircle,
    },
    { value: "High", label: "High", colorClass: styles.highPriorityCircle },
  ];

  const handleSelectPriority = (priorityValue) => {
    setEditedPriority(priorityValue);
    setIsDropdownOpen(false);
  };

  const selectedPriorityLabel =
    priorities.find((p) => p.value === editedPriority)?.label || "No Priority";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cardContainer}>
          <div className={styles.cardName}>
            <h3>Add Card</h3>
          </div>

          <div className={styles.inputContainer}>
            <input
              className={styles.inputText}
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Card title"
            />
            <textarea
              className={styles.textArea}
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder="Description"
              rows={4}
            />
          </div>

          <div className={styles.statusContainer}>
            <div className={styles.labelContainer}>
              <div>Priority</div>

              <div
                className={styles.priorityDropdown}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className={styles.selectedOption}>
                  <div
                    className={`${styles.priorityCircle} ${
                      priorities.find((p) => p.value === editedPriority)
                        ?.colorClass
                    }`}
                  ></div>
                  <span>{selectedPriorityLabel}</span>
                </div>

                {isDropdownOpen && (
                  <ul className={styles.dropdownList}>
                    {priorities.map((priority) => (
                      <li
                        key={priority.value}
                        className={styles.dropdownItem}
                        onClick={() => handleSelectPriority(priority.value)}
                      >
                        <div
                          className={`${styles.priorityCircle} ${priority.colorClass}`}
                        ></div>
                        <span>{priority.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className={styles.deadlineContainer}>
              <div>Deadline</div>
              <div className={styles.pickerContainer}>
               
                <CalendarPicker
                  value={editedDeadline}
                  onChange={(e) => setEditedDeadline(e.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={handleSave} disabled={isLoading}>
              <span>+</span>
              <div>Save</div>
            </button>
          </div>
        </div>
        {isLoading && <div className={styles.loading}>Loading...</div>}
      </div>
    </div>
  );
}

export default AddCard;
