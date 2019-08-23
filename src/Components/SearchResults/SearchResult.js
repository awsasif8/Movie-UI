import React, { Component } from 'react'
import './SearchResult.css'
import axios from 'axios'
import url from '../../config.json'
export class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: {
                movieResult: [{
                    movieId: '1',
                    theatreId: '5',
                    movieName: 'Mission Mangal',
                    theatreName: 'Cinepolis',
                    showId: '4',
                    showName: 'Morning'
                }
                ]
            },
            chooseCategory: false,
            isValid: false
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleCancel = this.handleCancel.bind(this);
        // this.onTheatreChange = this.onTheatreChange.bind(this);
        // this.onMovieChange = this.onMovieChange.bind(this);

    }
    handleBook(e, ticketData) {
        e.preventDefault();
        this.setState({
            chooseCategory: true
        })

    }
    render() {
        return (
            <div>
                <h2 className="openHeading">Select your show</h2>
                <br></br><br></br>
                <table className="breachtable">
                    <thead className="tableheading">
                        <tr>
                            <th scope="col">Movie Name</th>
                            <th scope="col">Theatre Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.initialState.movieResult.map((each, index) => (
                                <tr scope="row">
                                    <td> {each.movieName}</td>
                                    <td> {each.theatreName}</td>
                                    <td> {each.date}</td>
                                    <td>
                                        <button type="button" id="button" className="btn btn-primary " onClick={(e) => {
                                            this.handleBook(e, {
                                                movieId: each.movieId, theatreId: each.theatreId, date: each.date
                                            })
                                        }}>Book</button>
                                    </td>
                                </tr>
                            ))
                        }
                        {
                            this.state.chooseCategory ? (<div>
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
                                                <option key="1">select</option>
                                                <option key="2">1</option>
                                                <option key="3">2</option>
                                                <option key="4">3</option>
                                                <option key="5">4</option>
                                                <option key="6">6</option>
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
                            </div>) : (<div>

                            </div>)
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchResult
