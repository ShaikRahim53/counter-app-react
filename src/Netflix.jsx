import "./Netflix.css";
const Details = {
  img: "https://i.ytimg.com/vi/lDVQojLPI4Y/maxresdefault.jpg",
  title: "RRR",
  year: "2022",
  rating: "8.2",
};

export default function Movie() {
  return (
    <div className="movie-container">
      <img className="movie-poster" src={Details.img} alt="RRR"></img>
      <h1>{Details.title}</h1>
      <h2>{Details.year}</h2>
      <h2>{Details.rating}</h2>
    </div>
  );
}
