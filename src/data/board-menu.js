export default {
  id: "BOARD_ACTIONS_MENU",
  title: "Board actions",
  width: "260px",
  position: {
    top: "0px",
    right: "1px"
  },
  items: [
    [
      { id: "STAR", caption: "Star Board" },
      { id: "BACKGROUND", caption: "Change Background" }
    ],
    [{ id: "DELETE", caption: "Delete Board" }]
  ],
  onItemClick: null,
  onClose: null
};
