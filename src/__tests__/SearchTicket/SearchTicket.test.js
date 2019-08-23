import React,{Component} from 'react';
import { shallow } from 'enzyme';
import SearchTicket from '../../Components/SearchTicket/SearchTicket';
describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<SearchTicket/>);
    });

})

