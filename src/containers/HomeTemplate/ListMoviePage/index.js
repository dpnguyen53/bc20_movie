import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";
import {
  actListMovieRequest,
  actListMovieSuccess,
  actListMovieFailed,
} from "./modules/action";
import { connect } from "react-redux";

class ListMoviePage extends Component {
  componentDidMount() {
    //request
    this.props.listMovieRequest();

    //call api
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
    })
      .then((result) => {
        //success
        this.props.listMovieSuccess(result.data);
      })
      .catch((err) => {
        //failed
        this.props.listMovieFailed(err);
      });
  }

  renderListMovie = () => {
    return this.props.data?.map((movie) => {
      return <Movie key={movie.maPhim} movie={movie} />;
    });
  };

  render() {
    const { loading } = this.props;
    if (loading) return <div>Loading...</div>;

    return (
      <div className="container">
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieRequest: () => {
      dispatch(actListMovieRequest());
    },

    listMovieSuccess: (data) => {
      dispatch(actListMovieSuccess(data));
    },

    listMovieFailed: (error) => {
      dispatch(actListMovieFailed(error));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
