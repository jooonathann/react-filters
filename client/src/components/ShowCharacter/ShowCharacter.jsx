import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import "../../css/index.css";
const ShowCharacter = ({ characters, isActive }) => {
  const { id } = useParams();

  // console.log(characters);
  const indexOfChar = characters.findIndex((ele) => ele.id === parseInt(id));

  useEffect(() => {
    isActive(false);
    const hamburgerButton = document.getElementsByClassName("buttonHamburger");
    console.log("hamburgerButton  ", hamburgerButton[0]);
    hamburgerButton[0].style.display = "none";
  }, []);

  return (
    <div id={id} className="showCharacterDiv">
      <Link to="edit">
        <button className="updateButton">Update</button>
      </Link>

      <div className="fullName">
        <h1>{`${characters[indexOfChar].name} ${characters[indexOfChar].lastname}`}</h1>
      </div>
      <div className="otherCharacterInfo">
        <p>Age: {characters[indexOfChar].age}</p>
        <p>favorite Color: {characters[indexOfChar].favoritecolor}</p>
        <p>Country: {characters[indexOfChar].country}</p>
        <p>Hobbie: {characters[indexOfChar].hobbie}</p>
        <img className="imgShowCharacter" src={characters[indexOfChar].image} />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    isActive: (payload) => dispatch({ type: "hamburger/isActive", payload }),
  };
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCharacter);
