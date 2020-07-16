import React, { Component } from "react";

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allMemesImgs: [],
  };
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log(memes[0]);
        this.setState({
          allMemesImgs: memes,
        });
      });
    console.log(this.state.allMemesImgs);
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemesImgs.length);
    const randMeme = this.state.allMemesImgs[randNum].url;
    this.setState({ randomImg: randMeme });
  };
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            name="topText"
            placeholder="Top text"
            value={this.state.topText}
          ></input>
          <br></br>
          <br></br>
          <input
            type="text"
            onChange={this.handleChange}
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
          ></input>
          <br></br>
          <br></br>
          <button>Submit</button>
        </form>
        <p>{this.state.bottomText}</p>
      </div>
    );
  }
}

export default MemeGenerator;
