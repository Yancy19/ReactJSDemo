/* main.js */
'use strict';
import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { TestOne } from './TestOne.js';
import TestTwo from './TestTwo.js';

class App extends React.Component{
    constructor() {
        super();
        this.state = {switch: true};
    };
    _toggle(){
    	this.setState({
            switch: !this.state.switch
        });
    }
    render() {
        //JSX here!
        return (
        	<div>
        		<div>
		            <input type="button" onClick={this._toggle.bind(this)} value="Press Me!"/>
		        </div>
		        <div>
		        	{this.state.switch ? <TestOne /> : <TestTwo />}
		        </div> 
        	</div>
            
        )
        // return (
        //     <div>
	       //      <input type="button" onClick={this._toggle()} value="Press Me!"/>
	       //      {this.state.switch ? <TestOne /> : <TestTwo />}
	       //  </div> 
        // )
    }
};
// ReactDOM.render(<App />, document.body);
render(<App />, document.body);
