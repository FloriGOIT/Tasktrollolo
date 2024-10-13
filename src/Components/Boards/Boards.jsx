import React, { useState, useEffect } from "react";
import TrolloloCards from "../../Components/Cards/TrolloloCards";
import styles from "./Boards.module.css";
import Modal from "../../Components/CardModal/Cardmodal";
import { useToggle } from "../../Components/Usetoggle/Usetoggle";
import aiPlanetsDesk from "./Children/Pics/aiPlanets-desk.jpg";
import aiPlanetsTablet from "./Children/Pics/aiPlanets-tablet.jpg";
import aiPlanetsMob from "./Children/Pics/aiPlanets-mob.jpg";
import pinkTreeDesk from "./Children/Pics/pinkTree-desk.jpg";
import pinkTreeTablet from "./Children/Pics/pinkTree-tablet.jpg";
import pinkTreeMob from "./Children/Pics/pinkTree-mob.jpg";
import skyCloudDesk from "./Children/Pics/skyCloud-desk.jpg";
import skyCloudTablet from "./Children/Pics/skyCloud-tablet.jpg";
import skyCloudMob from "./Children/Pics/skyCloud-mob.jpg";
import { TfiPencil } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";

const images = {
  img2: {
    desk: pinkTreeDesk,
    tablet: pinkTreeTablet,
    mob: pinkTreeMob,
  },
  img3: {
    desk: skyCloudDesk,
    tablet: skyCloudTablet,
    mob: skyCloudMob,
  },
  img4: {
    desk: aiPlanetsDesk,
    tablet: aiPlanetsTablet,
    mob: aiPlanetsMob,
  },
};

const Boards = ({ boardName, listOfBoards }) => {
  const [columns, setColumns] = useState([]);
  const { isOpen, open, close } = useToggle();
  const [modalMode, setModalMode] = useState("add");
  const [activeColumnIndex, setActiveColumnIndex] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const boardDetails =
    listOfBoards.find((board) => board.title === boardName) || {};

  const setBackgroundImage = () => {
    let imageKey = "";

    switch (boardDetails.image) {
      case "img2":
        imageKey = images.img2;
        break;
      case "img3":
        imageKey = images.img3;
        break;
      case "img4":
        imageKey = images.img4;
        break;
      default:
        return ""; // Return empty string for no background
    }

    if (windowWidth <= 768) {
      return `url(${imageKey.mob})`;
    } else if (windowWidth <= 1024) {
      return `url(${imageKey.tablet})`;
    }
    return `url(${imageKey.desk})`;
  };

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
    setSelectedCard({
      title: "",
      description: "",
      priority: "No Priority",
      deadline: new Date(),
    });
    open();
  };

  const handleSaveCard = (cardData) => {
    const updatedColumns = [...columns];

    if (modalMode === "add") {
      updatedColumns[activeColumnIndex].cards.push({
        ...cardData,
        priorityc: cardData.priority,
      });
    } else if (modalMode === "edit") {
      const cardIndex = updatedColumns[activeColumnIndex].cards.findIndex(
        (card) => card.title === selectedCard.title
      );
      updatedColumns[activeColumnIndex].cards[cardIndex] = {
        ...cardData,
        priorityc: cardData.priority,
      };
    }

    setColumns(updatedColumns);
    close();
  };

  return (
    <div
      className={styles.boardContainer}
      style={{
        backgroundImage: setBackgroundImage(),
        backgroundSize: "cover",
      }}
    >
      <div className={styles.boardName}>{boardName}</div>

      <div className={styles.columnContainer}>
        <div className={styles.columnWrapper}>
          <div className={styles.columnContent}>
            {columns.map((column, colIndex) => (
              <div key={colIndex} className={styles.columnContainer}>
                <div className={styles.column}>
                  <div className={styles.columnTitle} name={column.title}>

                    <p>{column.title}</p>

                    <div className={styles.modifytitle}>
                      <TfiPencil />
                      <IoTrashOutline />
                    </div>

                  </div>
                  <div className={styles.cardsContainer}>
                    {column.cards.map((card, cardIndex) => (
                      <TrolloloCards
                        key={cardIndex}
                        cardData={card}
                        onEdit={(updatedCard) => {
                          const updatedColumns = [...columns];
                          updatedColumns[colIndex].cards[cardIndex] =
                            updatedCard;
                          setColumns(updatedColumns);
                        }}
                        onDelete={() => {
                          const updatedColumns = [...columns];
                          updatedColumns[colIndex].cards.splice(cardIndex, 1);
                          setColumns(updatedColumns);
                        }}
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
              <div onClick={handleAddColumn} className={styles.addColumnButton}>
                <span>+</span>
              </div>

              <div className={styles.addColumnText}>
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
        <Modal
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
