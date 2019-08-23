import React, { Component } from 'react'
import './SearchTicket.css'
import axios from 'axios'
import url from '../../config.json'
export class SearchTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: {
                movieId: '',
                movieName: '',
                allMoviesList: [],
                allTheatreList: [],
                theatreId: '',
                theatreName: '',
                date: '',
                dateError: ''
            },
            movieId: '',
            movieName: '',
            allMoviesList: [],
            allTheatreList: [],
            theatreId: '',
            theatreName: '',
            date: '',
            dateError: '',
            isValid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this);
        this.onTheatreChange = this.onTheatreChange.bind(this);
        this.onMovieChange = this.onMovieChange.bind(this);

    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
            // localStorage.setItem("data",this.state.emailId)
        });

    }
    componentDidMount() {
        axios.get(`${url.url}/getAllMovies`)
            .then(res => {
                console.log("res inside component did mount get all movies", res)
                this.setState({
                    allMoviesList: res.data
                });
            })
        axios.get(`${url.url}/getAllTheatres`)
            .then(res => {
                console.log("res inside component did mount breach", res)
                if (res.status === 200 && res.data.status === "SUCCESS"){
                    this.setState({
                        allTheatreList: res.data.data
                    });
                } else {
        
                }
            })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.validate().then((res) => {
            console.log("res", res)
            const { movieId, theatreId, date } = this.state
            const movie = {
                movieId: movieId,
                theatreId: theatreId,
                date: date
            };
            console.log("Movie details for api", movie)
            this.props.history.push({
                pathname: '/search-result'
            })
            // if (res) {

            //     this.getData().then((response) => {
            //         if (response.status === 200 && response.data.status === "SUCCESS") {
            //             this.props.validateUser(true);
            //             this.props.history.push({
            //                 pathname: '/search-result'
            //             })
            //         } else{
                //         alert(`Sorry we do not find any movies available on this date`);
                    // }
           // }
            //     })
            // }
        });

    }
    onTheatreChange(e) {
        this.setState({
            theatreId: this.state.allTheatreList[e.target.value - 1].theatreId,
            theatreName: this.state.allTheatreList[e.target.value - 1].theatreName
        })

    }
    onMovieChange(e) {

        this.setState({
            movieId: this.state.allMoviesList[e.target.value - 1].movieId,
            movieName: this.state.allMoviesList[e.target.value - 1].movieName
        })

    }
    handleCancel(e) {
        e.preventDefault();
        this.setState(() => this.initialState)
        document.getElementById("searchform").reset();
        console.log("state after reset", this.state)
    }
    getData(movie) {
        let res = {
            status: 200
        }
        // return new Promise((resolve, reject) => {
        //     axios.post(`${url.url}/login`, user)
        //         .then(res => {
        //             resolve(res)
        //         }).catch(err => {
        //             reject(err)
        //         })
        // });
        return Promise.resolve(res)
    }
    validate() {
        console.log("Inside validate")
        let isValid = true;
        const errors = {
            dateError: ''
        }
        var UserDate = this.state.date
        var ToDate = new Date();

        if (new Date(UserDate).getTime() >= ToDate.getTime()) {
            console.log("Date is valid")
        } else {
            isValid = false;
            errors.dateError = "Please select valid date either today or future date"
        }

        this.setState({
            ...this.state,
            ...errors
        })
        console.log("isValid inside validate", isValid)
        return Promise.resolve(isValid);

    }
    render() {
        let movieList = this.state.allMoviesList.map((item, i) => {
            return (
                <option key={i} value={item.movieId}>{item.movieName}</option>
            )
        }, this);
        let theatreList = this.state.allTheatreList.map((item, i) => {
            return (
                <option key={i} value={item.theatreId}>{item.theatreName}</option>
            )
        }, this);
        return (
            <div>
                <header >
                    <h1> Book your ticket</h1>
                </header>
                <form id="searchform" className="searchform">
                    <div className="form-group">
                        <br></br>
                        <div className="form-group col-xs-3">
                            <label htmlFor="movieName" style={{ "font-weight": "bold" }}>Select the movie</label>
                            <br></br>
                            <select
                                className="form-control"
                                id="movieName"
                                onChange={this.onMovieChange}
                            >
                                <option>select</option>
                                {movieList}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <br></br>
                        <div className="form-group col-xs-3">
                            <label htmlFor="theatreName" style={{ "font-weight": "bold" }}>Select the theatre</label>
                            <br></br>
                            <select
                                className="form-control"
                                id="theatreName"
                                onChange={this.onTheatreChange}
                            >
                                <option>select</option>
                                {theatreList}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <span className="pull-right text-danger " ><small>{this.state.dateError}</small></span>
                        <br></br>
                        <label htmlFor="date" style={{ "font-weight": "bold" }}>Enter the date</label>
                        <input
                            type="date"
                            id="date"
                            onChange={this.handleChange}
                            value={this.state.date}
                            className="form-control"
                            placeholder="Enter the date" />
                    </div>
                    <br></br>
                    <span>
                        <button id="submitsearch" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                    </span>
                    <span>&nbsp;&nbsp;
                <button id="submitcancel" type="submit" className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                    </span>

                </form>
            </div>
        )
    }
}

export default SearchTicket
