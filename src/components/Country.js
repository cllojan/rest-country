import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Paper";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";

import CircularProgress from "@mui/material/CircularProgress";

import { Link } from "react-router-dom";
const Country = () => {
  const [url, setUrl] = useState("https://restcountries.com/v3/all");
  const [contry, setContry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const [search, setSearch] = useState("");

  const datos = async () => {
    const data = await fetch(url);
    const dataJson = await data.json();
    setContry(dataJson);
    setLoading(true);
  };

  useEffect(() => {
    datos();
  }, [url]);

  const handleChange = (event) => {
    setLoading(false);

    setUrl(event.target.value);
  };
  const handleChangeInput = (evt) => {
    setSearch(evt.target.value);
  };
  const handleChangePage = (page) => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
      setCurrentPage(page);
    }, 400);
  };

  const onClickSearch = async (e) => {
    setLoading(false);
    const data = setUrl(`https://restcountries.com/v3/name/${search}`);
    await setTimeout(() => {
      setLoading(true);
    }, 600);
  };
  const onKeyPressSearch = async (e) => {
    if (e.keyCode === 13) {
      setLoading(false);
      e.preventDefault();
      const data = setUrl(`https://restcountries.com/v3/name/${search}`);
      await setTimeout(() => {
        setLoading(true);
      }, 600);
    }
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = contry.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container sx={{ mt: "30px", width: "100vw", height: "100vh" }}>
      <Box
        sx={{
          boxShadow: "none",
          display: "flex",
          ml: "70px",
          gap: "420px",
          flexDirection: "row",
        }}
      >
        <Paper
          elevation={2}
          component="form"
          sx={{
            border: "1px solid #C4C4C4",
            boxShadow: "none",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <IconButton
            onClick={onClickSearch}
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for a country"
            noValidate
            onChange={handleChangeInput}
            onKeyDown={onKeyPressSearch}
            value={search}
            inputProps={{ "aria-label": "Search for a country" }}
          />
        </Paper>

        <FormControl sx={{ width: "190px" }}>
          <InputLabel id="demo-simple-select-label">
            Filter by continent
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={url}
            label="Filter by continent"
            onChange={handleChange}
          >
            <MenuItem value={"https://restcountries.com/v3/all"}>All</MenuItem>
            <MenuItem value={"https://restcountries.com/v3/region/africa"}>
              Africa
            </MenuItem>
            <MenuItem value={"https://restcountries.com/v3/region/americas"}>
              Americas
            </MenuItem>
            <MenuItem value={"https://restcountries.com/v3/region/asia"}>
              Asia
            </MenuItem>
            <MenuItem value={"https://restcountries.com/v3/region/europe"}>
              Europe
            </MenuItem>
            <MenuItem value={"https://restcountries.com/v3/region/oceania"}>
              Oceania
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "none",
        }}
        component={Box}
        py={3}
      >
        {loading ? (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              mt: "50px",
            }}
          >
            {currentPosts.map((elm, index) => (
              <Grid key={index} item xs={8} sm={2.5} sx={{ m: "15px" }}>
                <Card
                  variant="outlined"
                  sx={{ maxWidth: "445px", maxHeight: "2750px" }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={elm.flags[0]}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        textAlign: "start",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      {elm.name.common}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#000"
                      sx={{ textAlign: "start" }}
                    >
                      <span style={{ fontWeight: "bold" }}>Population: </span>
                      {elm.population.toLocaleString().replace(/,/g, " ")}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#000"
                      sx={{ textAlign: "start" }}
                    >
                      <span style={{ fontWeight: "bold" }}>Region: </span>
                      {elm.region}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#000"
                      sx={{ textAlign: "start" }}
                    >
                      <span style={{ fontWeight: "bold" }}>Capital: </span>
                      {elm.capital}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/${elm.region}/${elm.name.common}`,
                      }}
                    >
                      <Button sx={{ ml: "5px", mb: "5px" }} size="small">
                        Learn More <ChevronRightIcon />
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ mt: "200px", display: "flex", boxShadow: "none" }}>
            <CircularProgress />
          </Box>
        )}
        <Pagination
          sx={{ pt: "90px", mt: "10px", mb: "30px" }}
          count={Math.round(contry.length / postsPerPage)}
          color="secondary"
          variant="outline"
          shape="rounded"
          hideNextButton={true}
          hidePrevButton={true}
          defaultPage={currentPage}
          onChange={(e) => handleChangePage(e.target.textContent)}
        />
      </Container>
    </Container>
  );
};

export default Country;
