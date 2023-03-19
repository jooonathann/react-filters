import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../css/index.css";

const FiltersSection = ({
  clearFilters,
  characters,
  hamburgerStatus,
  filtersInUse,
  categoriesInUse,
  addToNameDispatch,
  deleteFromNameDispatch,
  addTolastnameDispatch,
  deleteFromlastnameDispatch,
  addToageDispatch,
  deleteFromageDispatch,
  addTofavoritecolorDispatch,
  deleteFromfavoritecolorDispatch,
  addTocountryDispatch,
  deleteFromcountryDispatch,
  addTohobbieDispatch,
  deleteFromhobbieDispatch,
}) => {
  const [names, setNames] = useState([]);
  const [lastnames, setlastnames] = useState([]);
  const [ages, setAges] = useState([]);
  const [favoritecolors, setfavoritecolors] = useState([]);
  const [countries, setcountries] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [IsfilterMobileButtonOpen, setisfilterMobileButtonOpen] =
    useState(false);

  const [isfilterBoxOpen, setisfilterBoxOpen] = useState({
    name: false,
    lastname: false,
    age: false,
    favoritecolor: false,
    country: false,
    hobbie: false,
  });

  useEffect(() => {
    //for loop to look up for the categories to filter
    for (let i = 0; i < characters.length; i++) {
      if (!names.includes(characters[i].name)) {
        setNames([...names, characters[i].name]);
      }
      if (!lastnames.includes(characters[i].lastname)) {
        FiltersSection;
        setlastnames([...lastnames, characters[i].lastname]);
      }

      if (!ages.includes(characters[i].age)) {
        setAges([...ages, characters[i].age]);
      }

      if (!favoritecolors.includes(characters[i].favoritecolor)) {
        setfavoritecolors([...favoritecolors, characters[i].favoritecolor]);
      }

      if (!countries.includes(characters[i].country)) {
        setcountries([...countries, characters[i].country]);
      }

      if (!hobbies.includes(characters[i].hobbie)) {
        setHobbies([...hobbies, characters[i].hobbie]);
      }
    }
  }, [names]);

  const addOrDeleteFilter = (addOrDelete, categoryName, id) => {
    // console.log("----THEEEEEEE ID ISSSS-----", id);
    if (addOrDelete === "add") {
      if (categoryName === "name") addToNameDispatch(id);

      if (categoryName === "lastname") addTolastnameDispatch(id);
      if (categoryName === "age") addToageDispatch(id);
      if (categoryName === "favoritecolor") addTofavoritecolorDispatch(id);
      if (categoryName === "country") addTocountryDispatch(id);
      if (categoryName === "hobbie") addTohobbieDispatch(id);
    } else {
      if (categoryName === "name") deleteFromNameDispatch(id);
      if (categoryName === "lastname") deleteFromlastnameDispatch(id);
      if (categoryName === "age") deleteFromageDispatch(id);
      if (categoryName === "favoritecolor") deleteFromfavoritecolorDispatch(id);
      if (categoryName === "country") deleteFromcountryDispatch(id);
      if (categoryName === "hobbie") deleteFromhobbieDispatch(id);
    }
  };

  const filterCategories = (characters, categoriesInUse) => {
    // console.log("categories in USESSS", categoriesInUse);
    const filterKeys = Object.keys(categoriesInUse);
    // console.log("FILTEREDDD KEYSSSS", filterKeys);
    return characters.filter((obj1) => {
      return filterKeys.every((key) => {
        if (!categoriesInUse[key].length) return true;

        return categoriesInUse[key].includes(obj1[key]);
      });
    });
  };

  useEffect(() => {
    if (
      !categoriesInUse.name.length &&
      !categoriesInUse.lastname.length &&
      !categoriesInUse.age.length &&
      !categoriesInUse.favoritecolor.length &&
      !categoriesInUse.country.length &&
      !categoriesInUse.hobbie.length
    ) {
      clearFilters();
    } else {
      const filtered = filterCategories(characters, categoriesInUse);
      filtersInUse(filtered);
    }
  }, [categoriesInUse, characters]);

  const handleClickName = (e) => {
    console.log("EEE IS  ", e.target.checked);
    const id = e.target.id;
    const checked = e.target.checked;

    if (checked) {
      addOrDeleteFilter("add", "name", id);
    } else {
      addOrDeleteFilter("delete", "name", id);
    }
  };

  const handleClicklastname = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;

    if (checked) {
      addOrDeleteFilter("add", "lastname", id);
    } else {
      addOrDeleteFilter("delete", "lastname", id);
    }
  };

  const handleClickAge = (e) => {
    const id = parseInt(e.target.id);
    const checked = e.target.checked;
    if (checked) {
      addOrDeleteFilter("add", "age", id);
    } else {
      addOrDeleteFilter("delete", "age", id);
    }
  };

  const handleClickfavoritecolor = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;

    if (checked) {
      addOrDeleteFilter("add", "favoritecolor", id);
    } else {
      addOrDeleteFilter("delete", "favoritecolor", id);
    }
  };

  const handleClickCountry = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;
    if (checked) {
      addOrDeleteFilter("add", "country", id);
    } else {
      addOrDeleteFilter("delete", "country", id);
    }
  };

  const handleClickHobbie = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;
    if (checked) {
      addOrDeleteFilter("add", "hobbie", id);
    } else {
      addOrDeleteFilter("delete", "hobbie", id);
    }
  };

  const filtersByName = names.map((name) => (
    <li key={name}>
      <div className="filterBy">
        {React.createElement("input", {
          id: name,
          onChange: handleClickName,
          type: "checkbox",
          checked: categoriesInUse["name"].includes(name) ? true : false,
        })}
        <label htmlFor={name} className="labelCategoryTitle">
          <span className="liFilterName">{name}</span>
        </label>
      </div>
    </li>
  ));
  const filtersBylastname = lastnames.map((lastname) => (
    <li key={lastname}>
      <div className="filterBy">
        {React.createElement("input", {
          id: lastname,
          onChange: handleClicklastname,
          type: "checkbox",
          checked: categoriesInUse["lastname"].includes(lastname)
            ? true
            : false,
        })}
        <label htmlFor={lastname} className="labelCategoryTitle">
          <span className="liFilterName">{lastname}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByAge = ages.map((age) => (
    <li key={age}>
      <div className="filterBy">
        {React.createElement("input", {
          id: age,
          onChange: handleClickAge,
          type: "checkbox",
          checked: categoriesInUse["age"].includes(age) ? true : false,
        })}
        <label htmlFor={age} className="labelCategoryTitle">
          <span className="liFilterName">{age}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByfavoritecolor = favoritecolors.map((favoritecolor) => (
    <li key={favoritecolor}>
      <div className="filterBy">
        {React.createElement("input", {
          id: favoritecolor,
          onChange: handleClickfavoritecolor,
          type: "checkbox",
          checked: categoriesInUse["favoritecolor"].includes(favoritecolor)
            ? true
            : false,
        })}
        <label htmlFor={favoritecolor} className="labelCategoryTitle">
          <span className="liFilterName">{favoritecolor}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByCountries = countries.map((country) => (
    <li key={country}>
      <div className="filterBy">
        {React.createElement("input", {
          id: country,
          onChange: handleClickCountry,
          type: "checkbox",
          checked: categoriesInUse["country"].includes(country) ? true : false,
        })}
        <label htmlFor={country} className="labelCategoryTitle">
          <span className="liFilterName">{country}</span>
        </label>
      </div>
    </li>
  ));
  const filtersByHobbies = hobbies.map((hobbie) => (
    <li key={hobbie}>
      <div className="filterBy">
        {React.createElement("input", {
          id: hobbie,
          onChange: handleClickHobbie,
          type: "checkbox",
          checked: categoriesInUse["hobbie"].includes(hobbie) ? true : false,
        })}{" "}
        <label htmlFor={hobbie} className="labelCategoryTitle">
          <span className="liFilterName">{hobbie}</span>
        </label>
      </div>
    </li>
  ));

  const handleClickButton = (key) => {
    if (isfilterBoxOpen[key] === false) {
      // console.log(key);
      setisfilterBoxOpen({
        ...isfilterBoxOpen,
        [key]: true,
      });
      setisfilterMobileButtonOpen(true);
    } else {
      setisfilterMobileButtonOpen(false);
      setisfilterBoxOpen({
        ...isfilterBoxOpen,
        [key]: false,
      });
    }
  };

  return (
    <div
      className={`scroller filtersSection  ${
        hamburgerStatus.isActive ? " opened" : ""
      }`}
    >
      <Link to="/create-new-character">
        <button className="createCharacterButton">Create New Character</button>
      </Link>

      <button
        onClick={() => handleClickButton("name")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Name{" "}
          <div
            className={`caret ${isfilterBoxOpen.name ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.name ? "filterBoxIsOpenName" : ""
        }`}
      >
        <ul>{filtersByName}</ul>
      </div>
      <button
        onClick={() => handleClickButton("lastname")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Last Name{" "}
          <div
            className={`caret ${isfilterBoxOpen.lastname ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.lastname ? "filterBoxIsOpenlastname" : ""
        }`}
      >
        <ul>{filtersBylastname}</ul>
      </div>
      <button
        onClick={() => handleClickButton("age")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Age{" "}
          <div
            className={`caret ${isfilterBoxOpen.age ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.age ? "filterBoxIsOpenAge" : ""
        }`}
      >
        <ul>{filtersByAge}</ul>
      </div>
      <button
        onClick={() => handleClickButton("favoritecolor")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by favorite Color{" "}
          <div
            className={`caret ${
              isfilterBoxOpen.favoritecolor ? "rotateCaret" : ""
            }`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.favoritecolor ? "filterBoxIsOpenfavoritecolor" : ""
        }`}
      >
        <ul>{filtersByfavoritecolor}</ul>
      </div>
      <button
        onClick={() => handleClickButton("country")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Country{" "}
          <div
            className={`caret ${isfilterBoxOpen.country ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.country ? "filterBoxIsOpenCountry" : ""
        }`}
      >
        <ul>{filtersByCountries}</ul>
      </div>
      <button
        onClick={() => handleClickButton("hobbie")}
        className={`filtersBtn  ${
          IsfilterMobileButtonOpen ? "filterIsOpen" : ""
        }`}
      >
        <span className="spanTitle">
          Filter by Hobbie{" "}
          <div
            className={`caret ${isfilterBoxOpen.hobbie ? "rotateCaret" : ""}`}
          ></div>
        </span>
      </button>
      <div
        className={`filterBoxBody ${
          isfilterBoxOpen.hobbie ? "filterBoxIsOpenHobbie" : ""
        }`}
      >
        <ul>{filtersByHobbies}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    filters: state.filters,
    categoriesInUse: state.categoriesInUse,
    hamburgerStatus: state.hamburgerStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filtersInUse: (payload) =>
      dispatch({ type: "filters/filtersInUse", payload }),

    addToNameDispatch: (payload) =>
      dispatch({ type: "categories/addToName", payload }),
    deleteFromNameDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromName", payload }),

    addTolastnameDispatch: (payload) =>
      dispatch({ type: "categories/addTolastname", payload }),
    deleteFromlastnameDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromlastname", payload }),

    addToageDispatch: (payload) =>
      dispatch({ type: "categories/addToage", payload }),
    deleteFromageDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromage", payload }),

    addTofavoritecolorDispatch: (payload) =>
      dispatch({ type: "categories/addTofavoritecolor", payload }),
    deleteFromfavoritecolorDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromfavoritecolor", payload }),

    addTocountryDispatch: (payload) =>
      dispatch({ type: "categories/addTocountry", payload }),
    deleteFromcountryDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromcountry", payload }),

    addTohobbieDispatch: (payload) =>
      dispatch({ type: "categories/addTohobbie", payload }),
    deleteFromhobbieDispatch: (payload) =>
      dispatch({ type: "categories/deleteFromhobbie", payload }),
    clearFilters: () => dispatch({ type: "filters/clearFilters" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
