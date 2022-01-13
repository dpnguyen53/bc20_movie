import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  content: {
    backgroundColor: "red",
    color: "#ffffff",
    "& span": {
      fontSize: 15,
    },
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    fontSize: 50,
  },
}));

export default useStyle;
