import { useParams, useNavigate } from "react-router-dom";
import Movies from "./Movies";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const detail = Movies.find((el) => el.Title === id);
  const handleClick = () => navigate("/");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Typography variant="h5" component="div">
          {detail.Title}
        </Typography>
        <iframe
          width="427"
          height="240"
          src={detail.Trailer}
          title={detail.Title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Typography variant="body3" color="text.secondary">
          {detail.Description}
        </Typography>

        <Button variant="outlined" size="large" onClick={handleClick}>
          Back to movies list
        </Button>
      </CardContent>
    </div>
  );
};
export default Details;
