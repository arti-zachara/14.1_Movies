// array with info on movies
var movies = [
  {
    id: 1,
    title: "Thor: Ragnarok",
    desc:
      "Thor mierzy się w walce bogów, podczas gdy Asgard jest zagrożony Ragnarokiem, nordycką apokalipsą. ",
    release: "10.10.2017",
    poster: "images/Thor_Ragnarok.jpg"
  },
  {
    id: 2,
    title: "Avengers: Infinity War",
    desc:
      "Potężny Thanos zbiera Kamienie Nieskończoności w celu narzucenia swojej woli wszystkim istnieniom we wszechświecie. Tylko drużyna superbohaterów znanych jako Avengers może go powstrzymać.",
    release: "23.04.2018",
    poster: "images/avengers_infinity.jpg"
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    desc:
      "Po wymazaniu połowy życia we Wszechświecie przez Thanosa, Avengersi starają się zrobić wszystko co konieczne, aby pokonać szalonego tytana.",
    release: "24.04.2019",
    poster: "images/avengers.jpg"
  }
];

// mapping movies array to create ReactDOM elements
var moviesElements = movies.map(function(movie) {
  return React.createElement(
    "li",
    { key: movie.id },
    React.createElement("img", { src: movie.poster }),
    React.createElement("h2", {}, "Tytuł: " + movie.title),
    React.createElement("p", {}, "Opis: " + movie.desc),
    React.createElement("p", {}, "Data wydania: " + movie.release)
  );
});

// ReactDOM elements encompasing moviesElements
var element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement("ol", {}, moviesElements)
);

// render DOM
ReactDOM.render(element, document.getElementById("app"));
