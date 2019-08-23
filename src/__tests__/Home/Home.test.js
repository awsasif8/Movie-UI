import React,{Component} from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/Components/Home/Home';
describe('when the home component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Home/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
    it('should render the 2 buttons',()=>{
        expect(wrapper.find('button')).toHaveLength(2);
    });
    it('should have called handle click book function', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleClickBook');
        wrapper.instance().forceUpdate();
        wrapper.find('#searchmovie').simulate('click',{
          preventDefault: () => {
          }
         });
        expect(spy).toHaveBeenCalled();
      });
      it('should have called handle click view function', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleClickView');
        wrapper.instance().forceUpdate();
        wrapper.find('#viewticketdetails').simulate('click',{
          preventDefault: () => {
          }
         });
        expect(spy).toHaveBeenCalled();
      });
})

