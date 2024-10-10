import React, { useState, useEffect } from "react";
import TrolloloCards from "../../Components/Cards/TrolloloCards";
import styles from "./Boards.module.css";
import AddCard from "../../Components/AddCardModal/Cardmodal";
import { useToggle } from "../../Components/Usetoggle/Usetoggle";

const Boards = ({ boardName }) => {
  const [columns, setColumns] = useState([]);
  const { isOpen, open, close } = useToggle(); // Folosirea hook-ului pentru a controla modalul
  const [modalMode, setModalMode] = useState("add"); // "add" sau "edit"
  const [activeColumnIndex, setActiveColumnIndex] = useState(null); // Coloana activă pentru adăugare/editare
  const [selectedCard, setSelectedCard] = useState(null); // Cardul selectat pentru editare
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const handleAddColumn = () => {
    if (newColumnTitle.trim() === "") {
      alert("Please enter a column title.");
      return;
    }

    setColumns([...columns, { title: newColumnTitle, cards: [] }]);
    setNewColumnTitle("");
  };
  const openAddCardModal = (columnIndex) => {
    setActiveColumnIndex(columnIndex);
    setModalMode("add");
    setSelectedCard(null);
    open();
  };

  const openEditCardModal = (columnIndex, cardIndex) => {
    setActiveColumnIndex(columnIndex);
    setSelectedCard(columns[columnIndex].cards[cardIndex]);
    setModalMode("edit");
    open();
  };

  const handleSaveCard = (cardData) => {
    const updatedColumns = [...columns];

    if (modalMode === "add") {
      updatedColumns[activeColumnIndex].cards.push(cardData);
    } else if (modalMode === "edit") {
      const cardIndex = updatedColumns[activeColumnIndex].cards.findIndex(
        (card) => card.title === selectedCard.title
      );
      updatedColumns[activeColumnIndex].cards[cardIndex] = cardData;
    }

    setColumns([...columns, { title: newColumnTitle, cards: [] }]);
    setNewColumnTitle("");
  };

  return (
    <div className={styles.boardContainer}>
        <div className={styles.boardName}>{boardName}</div>

        <div className={styles.columnContainer}>
        
            <div className={styles.columnWrapper} >

            <div className={styles.columnContent}>
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className={styles.columnContainer}>
                    <div className={styles.column}>
                        <div className={styles.columnTitle}>{column.title}</div>
                        <div className={styles.cardsContainer}>
                        {column.cards.map((card, cardIndex) => (
                            <TrolloloCards
                            key={cardIndex}
                            content={card}
                            onClick={() => openEditCardModal(colIndex, cardIndex)}
                            />
                        ))}
                        </div>
                    </div>
                    <div className={styles.addCardContainer}>
                        <button
                        onClick={() => openAddCardModal(colIndex)}
                        className={styles.addCardButton}
                        >
                        Add Card
                        </button>
                    </div>
                    </div>
                ))}
                </div>
               

     
     <div className={styles.addBtnContainer}>
               <div className={styles.addColumnContainer}>
                    <div 
                    onClick={handleAddColumn} 
                    className={styles.addColumnButton}
                    >
                        <span>
                        +
                        </span>
                    </div>

                    <div 
                    className={styles.addColumnText}
                    >
                        <input
                        type="text"
                        value={newColumnTitle}
                        onChange={(e) => setNewColumnTitle(e.target.value)}
                        placeholder="Add another column"
                        className={styles.addColumnInput}
                        />
                    </div>
                </div>
            </div>





            </div>


      






        </div>

        {isOpen && (
            <AddCard
            onClose={close}
            cardData={
                selectedCard || {
                title: "",
                description: "",
                priority: "",
                deadline: "",
                }
            }
            setCardData={handleSaveCard}
            setSelectedDate={() => {}}
            isLoading={false}
            />
        )}






    </div>
  );
};

export default Boards;
