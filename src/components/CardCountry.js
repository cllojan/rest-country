import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Typography from "@mui/material/Typography";
import currenciesData from "./currenciesData";
import CardActions from "@mui/material/CardActions";
import { width } from "@mui/system";
const CardCountry = () => {
  const { handle } = useParams();
  const [handleC, setHandleC] = useState(handle);
  const [url, setUrl] = useState(
    `https://restcountries.com/v3/name/${handleC}?fullText=true`
  );
  const [contry, setContry] = useState([]);
  const [loading, setLoading] = useState(false);
  const datos = async () => {
    const data = await fetch(url);
    const dataJson = await data.json();
    setContry(dataJson);
    setLoading(true);
  };

  useEffect(() => {
    datos();
  }, []);

  return (
    <>
      <Stack sx={{ ml: "60px", mt: "100px" }} spacing={2} direction="row">
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          <Button variant="text">
            <ArrowBackIosIcon sx={{ mb: "2px", fontSize: "large" }} />
            Back
          </Button>
        </Link>
      </Stack>

      <Container
        sx={{
          width: "100vw",
          height: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {contry.map((elm, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
            }}
          >
            <CardMedia
              component="img"
              height="370"
              image={elm.flags[0]}
              alt="green iguana"
            />
            <Container>
              <Typography sx={{ ml: "45px" }} variant="h2">
                {elm.name.common}
              </Typography>
              <Container
                sx={{
                  display: "flex",
                  mt: "30px",
                }}
              >
                <Container sx={{ textAlign: "start" }}>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>Population: </span>
                    {elm.population.toLocaleString().replace(/,/g, " ")}
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>Region: </span>
                    {elm.region}
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>Sub Region: </span>
                    {elm.subregion}
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>Capital: </span>
                    {elm.capital}
                  </Typography>
                </Container>

                <Container>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>
                      Top Level Domain:
                    </span>
                    {elm.tld}
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>Currencies:</span>
                    {Object.values(elm.currencies)[0].name}
                  </Typography>

                  <Typography variant="body2">
                    <span style={{ fontWeight: "bold" }}>Languages: </span>
                    {Object.values(elm.languages)
                      .map((elm) => elm)
                      .join(", ")}
                  </Typography>
                </Container>
              </Container>
              <Container sx={{ mt: "30px" }}>
                <Typography
                  variant="body2"
                  sx={{ ml: "25px", display: "flex", gap: "10px" }}
                >
                  <span style={{ fontWeight: "bold" }}>Border Countries: </span>
                  {elm.borders == undefined ? (
                    <span>No border contries</span>
                  ) : (
                    Object.values(elm.borders).map((elm, index) => (
                      <CardActions key={index}>
                        <Button sx={{ ml: "5px", mb: "5px" }} size="small">
                          {elm}
                        </Button>
                      </CardActions>
                    ))
                  )}
                </Typography>
              </Container>
            </Container>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default CardCountry;
