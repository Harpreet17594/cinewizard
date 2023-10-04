import React, { useState } from "react";
import "./searchmovie.css";

// importing chakra components
import { Heading, Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

function Searchmovie() {
  const [searchValue, setSearchValue] = useState("");
  const [movieData, setMovieData] = useState();

  // =======================================================
  // useEffect(()=>{
  //     $("#clickme").on("click", function (event) {
  //       //get input
  //       event.preventDefault();
  //       var q = $("#query").val();
  //       console.log("type of q ---" + typeof q);

  //       $.getJSON(
  //         "https://api.themoviedb.org/3/search/multi?api_key=facd715cb8739df160c6d90595cd8893&language=en-US&query=" +
  //           q +
  //           "&page=1&include_adult=false",
  //         function (data) {
  //           console.log(data.results[0]);
  //           $("#loadImage").attr(
  //             "src",
  //             "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path
  //           );
  //           $("#movieName").html(data.results[0].title);
  //           $("#movieDesc").html(data.results[0].overview);
  //           $("#media_type").html(data.results[0].media_type);
  //           $("#release_date").html(data.results[0].release_date);

  //           release_date

  //         }
  //       );
  //     });
  //     $("#clear").on("click",function(){
  //       $("#query").val("");
  //       $("#loadImage").attr("style","visibility:none");
  //       $("#movieName").val="";
  //       $("#movieDesc").val="";
  //       $("#media_type").val="";
  //       $("#release_date").val="";

  //     });

  //     },[])

  const getMovieData = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=facd715cb8739df160c6d90595cd8893&language=en-US&query=${searchValue}&page=1&include_adult=false`
    );
    const data = await resp.json();
    // input = data.results[0].title;
    // overview = data.results[0].overview;
    // imgPath = `https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`;
    // releaseDate = data.results[0].release_date;
    // const desc = data.results[0].;
    console.log(data);
    // console.log(input); //movie name
    // console.log(overview);
    // console.log(`https://image.tmdb.org/t/p/w500${imgPath}`);
    // console.log(releaseDate);
    setMovieData(data);

    //set data
  };

  // ========================================================
  return (
    <div>
      <Input
        placeholder="Search here"
        size="md"
        htmlSize={50}
        width="auto"
        
        id="query"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <br />

      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue" onClick={getMovieData}>
          Search
        </Button>
        <Button colorScheme="blue" id="clear">
          Clear
        </Button>
      </ButtonGroup>
      <br />
      <br />
      {movieData && (
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Stack direction="row">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movieData.results[0].backdrop_path}`}
                  alt="Image Loading...."
                  id="loadImage"
                  boxSize="350px"
                  objectFit="cover"
                />
              </Stack>
            </div>
            <div className="col-lg-8">
              <Heading fontSize="2xl">Movie name</Heading>
              <Text fontSize="2xl" id="movieName">
                {movieData.results[0].title}
              </Text>
              <Heading fontSize="2xl">Movie description</Heading>
              <Text fontSize="2xl" id="movieDesc">
                {movieData.results[0].overview}
              </Text>
              <Heading fontSize="2xl"> media Type</Heading>
              <Text fontSize="2xl" id="media_type">
                {movieData.results[0].media_type}
              </Text>
              <Heading fontSize="2xl">Release date</Heading>
              <Text fontSize="2xl" id="release_date">
                {movieData.results[0].release_date}
              </Text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Searchmovie;
