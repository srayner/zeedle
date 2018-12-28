const getBoardMenuData = starred => {
  let menuData = {
    id: "BOARD_ACTIONS_MENU",
    title: "Board actions",
    width: "260px",
    position: {
      top: "0px",
      right: "1px"
    },
    onItemClick: null,
    onClose: null
  };

  const starItem = starred
    ? { id: "UNSTAR", caption: "Un-star Board" }
    : { id: "STAR", caption: "Star Board" };
  menuData.items = [
    [starItem, { id: "BACKGROUND", caption: "Change Background" }],
    [{ id: "DELETE", caption: "Delete Board" }]
  ];

  return menuData;
};

export default getBoardMenuData;
