import React, { Component } from 'react'
import './ViewTicket.css'
import axios from 'axios'
import url from '../../config.json'
import SearchResult from '../SearchResults/SearchResult';
export class ViewTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: {
                ticketNo: ''
            },
            ticketNo:'',
            ticketData: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleCancel = this.handleCancel.bind(this);

    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
            // localStorage.setItem("data",this.state.emailId)
        });

    }

    getData() {
        // let res = {
        //     status: 200,
        //     data: {
        //         movieName: 'Mission Mangal',
        //         theatreName: 'Paradise Movies',
        //         date: '27-8-2019',
        //         noOfSeats: 5
        //     }
        // }
        return new Promise((resolve, reject) => {
            axios.get(`${url.url}/getTicketDetail/${this.state.ticketNo}`)
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        });

    }
    handleSubmit(e) {
        e.preventDefault()
        this.validate().then((res) => {
            console.log("res", res)
            if (res) {
                this.getData().then((response) => {
                    console.log(response)
                    if (response.status === 200 && response.data.status === "SUCCESS") {
                       this.setState({
                           ticketData: response.data.data
                       }) 
                    } else{
                        alert (`Error in fetching ticket details, ${response.data.message}`)
                    }
                })
            }
        });

    }
    validate() {
        console.log("Inside validate")
        let isValid = true;
        const errors = {
            ticketNoError: ''
        }

        if (this.state.ticketNo.length === 6) {
            console.log("ticketNo is valid")
        } else {
            isValid = false;
            errors.ticketNoError = 'Ticket Number should be 6 digits'
        }

        this.setState({
            ...this.state,
            ...errors
        })
        console.log("isValid inside validate", isValid)
        return Promise.resolve(isValid);

    }
    render() {
        return (
            <div>
                <div>
                    <header >
                        <h2> View your ticket Details</h2>
                    </header>
                    <form id="searchform" className="searchform">
                        <div className="form-group">
                            <br></br>
                            <span className="pull-right text-danger " ><small>{this.state.ticketNoError}</small></span>
                            <br></br>
                            <label htmlFor="ticktNo" style={{ "font-weight": "bold" }}>Enter the ticket number</label>
                            <input
                                type="ticketNo"
                                id="ticketNo"
                                onChange={this.handleChange}
                                value={this.state.ticketNo}
                                className="form-control"
                                placeholder="Enter the ticketNo" />
                        </div>
                        <br></br>
                        <span>
                            <button id="submitsearch" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                        </span>
                        <span>&nbsp;&nbsp;
                <button id="submitcancel" type="submit" className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                        </span>

                    </form>
                    <br></br><br></br>
                    {
                        this.state.ticketData.length >= 1  ? (<table className="breachtable">
                            <thead className="tableheading">
                                <tr>
                                    <th scope="col">Movie Name</th>
                                    <th scope="col">Theatre Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Number of Seats</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.ticketData.map((each, index) => (
                                        <tr className="datarow" scope="row">
                                            <td> {each.movieName}</td>
                                            <td> {each.theatreName}</td>
                                            <td> {each.bookedDate}</td>
                                            <td> {each.noOfSeats}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>) : (
                                <div></div>
                            )
                    }
                </div>

            </div>
        )
    }
}

export default ViewTicket
