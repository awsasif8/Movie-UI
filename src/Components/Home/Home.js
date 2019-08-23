import React, { Component } from 'react'
import './Home.css'
export class Home extends Component {
    constructor(props){
        super(props)
        this.handleClickBook=this.handleClickBook.bind(this)
        this.handleClickView=this.handleClickView.bind(this)
    }
    handleClickBook(e){
        e.preventDefault();
        this.props.history.push('/search-movie')
    }
    handleClickView(e){
        e.preventDefault();
        this.props.history.push('/view-ticket')
    }
    render() {
        return (
            <div>
                <div className="homebut">
                    <span > <button id="searchmovie" type="button" className="btn btn-primary btn-lg" onClick={this.handleClickBook}>Book Tickets</button></span>
                    <span > <button id="viewticketdetails" type="button" className="btn btn-primary btn-lg"  onClick={this.handleClickView}>View Ticket Details</button></span>
                </div>
            </div>
        )
    }
}

export default Home
