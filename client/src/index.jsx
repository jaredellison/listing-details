import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import Details from "./components/Details.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      clicks: 0
    };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    let id = document.location.pathname;
    id = parseInt(id.match(/\d+/g));

    Axios.get(`/api/details/${id}`).then(({ data }) => {
      this.setState({
        details: data
      });
    });
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <Details
            details={this.state.details}
            show={this.state.show}
            handleClose={this.hideModal}
            showShare={this.state.showShare}
            handleShareClose={this.hideShareModal}
            showProblem={this.state.showProblem}
            handleProblemClose={this.hideProblemModal}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('details-container'));
