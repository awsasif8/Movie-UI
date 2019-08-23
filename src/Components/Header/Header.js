import React, { Component } from 'react';
//import INGlogo from '../Assets/Images/Logo.png'
import './Header.css'
import { Link, withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';


class Header extends Component {
    selectedLang = (event) => {
        console.log(event.target.value);
        const { i18n } = this.props;
        i18n.changeLanguage(event.target.value);
    }
    render() {
        console.log(this.props)
        let { t } = this.props;
        return (
            <div>
                <div style={{ backgroundColor: 'blue', color: '#fff' }}>
                    <img   src="https://cdn3.ticketnew.com/tn/tn_logo/tn-logo-01.svg" alt='not found' width="200px" height="100px" />
                        <span className='' style={{ color: '#fff', fontSize: '40px', margin: '20%' }}> Book Your Dream Show</span>

                    {/* <span><Link to="/register" data-toggle="tooltip" title="Register" className="link2">Create Account</Link></span>
                    
                    <span><select className="drp" onChange={this.selectedLang}>
                        <option value="en">English</option>
                        <option value="sp">Spanish</option>
                    </select></span> */}


                </div>

            </div>
        )
    }
}
// export default withTranslation()(withRouter(Header));
export default Header
