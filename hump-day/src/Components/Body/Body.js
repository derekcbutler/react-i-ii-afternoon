import React from "react";
import Foot from "../Foot/Foot";
import "./body.css";
import data from "../../data";

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      index: 0
    };
  }
  handleNext = () => {
    if (this.state.index < this.state.data.length - 1) {
      this.setState({ index: this.state.index + 1 });
    }
  };
  handlePrevious = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  render() {
    console.log(data);
    return (
      <div className="black">
        <div className="body">
          <article>
              <div className="number-tracker">{this.state.index + 1 } / 25</div>
            <div className="full-name">
              {data[this.state.index].name.first} {data[this.state.index].name.last}
            </div>
            <div className="from">
              From: <div>
                {data[this.state.index].city} , {data[this.state.index].country}
                    </div>
            </div>
            <div className="job">Job Title: {data[this.state.index].title}</div>
            <div className="employer">employer: {data[this.state.index].employer}</div>
            <ol className="favorite-movies">
              Favorite Movies:{" "}
              {data[this.state.index].favoriteMovies.map((e, i) => {
                return <li key={`item ${i}`}>{e}</li>;
              })}
            </ol>
           
          </article>
          <div className="movie-box">
        </div>     

          <Foot className="buttons" 
            handlePrevious={this.handlePrevious}
            handleNext={this.handleNext} />
        </div>
      </div>
    );
  }
}
export default Body;
