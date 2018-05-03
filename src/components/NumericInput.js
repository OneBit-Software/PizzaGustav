import PropTypes from 'prop-types';
import { TextInput, ViewPropTypes } from 'react-native';
import React, { Component } from 'react';

/**
 * A Numeric input derived from the react-native TextInput.
 * 
 * Does not accept children.
 * 
 * Properties are as follows:
 * - value: optional number or number-returning-function. Initial value of the numeric input. defaults to 0(zero)
 * - - provide a function returning the target value in combination with the onChange function to bind a value.
 * - minValue: optional number. minmum value. defaults to negative infinity
 * - maxValue: optional number. maximum value. defaults to positive infinity
 * - style: optioanl Stylesheet. defaults to null
 * - onChange: optional function. will be called when a change is applied. defaults to null
 * - - Structure: onChange(newValue: number) : void
 * - - use this to apply changes to a bound value
 * - isFloat: optioanl boolean. defaults to false.
 */
class NumericInput extends Component {
	/**
	 * Property types
	 */
	static propTypes = {
		value: PropTypes.oneOfType(
			PropTypes.number,
			PropTypes.func
		),
		minValue: PropTypes.number,
		maxValue: PropTypes.number,
		style: ViewPropTypes.style,
		onChange: PropTypes.func,
		isFloat: PropTypes.bool
	};
	/**
	 * Default values
	 */
	static defaultProps = {
		value: 0,
		minValue: Number.NEGATIVE_INFINITY,
		maxValue: Number.POSITIVE_INFINITY,
		style: null,
		onChange: null,
		isFloat: false
	};
	/**
	 * creates a new NumericInput instance with the given properties.
	 * @param {{value: number|function, minValue: number, maxValue: number, style, onChange: function, isFloat: boolean}} props 
	 * 
	 * - value: optional. Initial value of the numeric input. defaults to 0(zero)
	 * - minValue: optional. minmum value. defaults to negative infinity
	 * - maxValue: optional. maximum value. defaults to positive infinity
	 * - style: optioanl. Stylesheet. defaults to null
	 * - onChange: optional. will be called when a change is applied. defaults to null
	 * - - Structure: onChange(newValue: number) : void
	 * - isFloat: optioanl. defaults to false.
	 */
	constructor(props){ 
		super(props);
		this.state = { value: props.value, editValue: null }
	}
	/**
	 * Will apply the new value and forward it to the potentially available extern onChange function.
	 */
	onApply(){
		let newNum = this.props.isFloat ? parseFloat(this.state.editValue) : parseInt(this.state.editValue);
		this.setState({editValue: null})
		if (Number.isNaN(newNum)) newNum = 0;
		newNum = Math.max(this.props.minValue, Math.min(this.props.maxValue, newNum));

		if (typeof(this.state.value) === 'number' && newValue != this.state.value) 
			this.setState({value: newNum});
		
		if(this.props.onChange !== null)
			this.props.onChange(newNum);
	}
	/**
	 * Stores the changed value for later use
	 * @param {string} newValue The changed value to temporarly store
	 */
	onChange(newValue){ this.setState({editValue: newValue}); }
	/**
	 * Will get the current value from the given number/function
	 * @param {number|function} val A Number or a function returning a number
	 * @returns {number} The stored value
	 */
	parseValue(val){ return typeof(val) === 'number' ? val : val(); }
	/**
	 * Gets the value to display.
	 * This is either the refered function result, the actual value or the current editing value.
	 * @returns {string} The string representation of the value to display
	 */
	getDisplayValue(){
		if (this.state.editValue !== null) return this.state.editValue.toString();
		return this.parseValue(this.state.value).toString();
	}
	render(){ return (
			<TextInput
				keyboardType='phone-pad'
				value={this.getDisplayValue()}
				style={this.props.style}
				onSubmitEditing={this.onApply.bind(this)}
				onChangeText={this.onChange.bind(this)}
			/>);}
}

export default NumericInput;