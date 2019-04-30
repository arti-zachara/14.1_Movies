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
// MoviesList class - use to create a list of all movies
var MoviesList = React.createClass({
  // validate props - array needed
  propTypes: {
    moviesList: React.PropTypes.array.isRequired
  },
  // render method
  render: function() {
    var movieElement = this.props.moviesList.map(function(movie) {
      return React.createElement(Movie, {
        key: movie.id,
        movie: movie
      });
    });

    return React.createElement("ol", {}, movieElement);
  }
});

// Movie class - use to create a single movie instance
var Movie = React.createClass({
  // validate props - object needed
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  // render method
  render: function() {
    return React.createElement(
      "li",
      {},
      React.createElement(MovieImage, { image: this.props.movie.poster }),
      React.createElement(MovieTitle, { title: this.props.movie.title }),
      React.createElement(MovieDescription, {
        description: this.props.movie.desc
      }),
      React.createElement(MovieDate, { date: this.props.movie.release })
    );
  }
});

// MovieImage class
var MovieImage = React.createClass({
  // validate props - string path needed
  propTypes: {
    image: React.PropTypes.string.isRequired
  },
  // render method
  render: function() {
    return React.createElement("img", { src: this.props.image });
  }
});

// MovieTitle class
var MovieTitle = React.createClass({
  // validate props - string needed
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  // render method
  render: function() {
    return React.createElement("h2", {}, "Tytuł: " + this.props.title);
  }
});

// MovieDescription class
var MovieDescription = React.createClass({
  // validate props - string needed
  propTypes: {
    description: React.PropTypes.string.isRequired
  },
  // render method
  render: function() {
    return React.createElement("p", {}, "Opis: " + this.props.description);
  }
});

// MovieDate class
var MovieDate = React.createClass({
  // validate props - string needed
  propTypes: {
    date: React.PropTypes.string.isRequired
  },
  // render method
  render: function() {
    return React.createElement("p", {}, "Data wydania: " + this.props.date);
  }
});

var element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement(MoviesList, { moviesList: movies })
);

// render DOM
ReactDOM.render(element, document.getElementById("app"));
