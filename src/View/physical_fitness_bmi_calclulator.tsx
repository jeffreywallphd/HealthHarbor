import React, { Component, ChangeEvent, FormEvent } from 'react';
import "../svr/physical_fitness/css_files/physical_fitness_bmi_calclulator.css";

interface State {
    weight: number;
    height: number;
    bmi: number;
    bmiCategory: string;
}

class BMICalculator extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            weight: 0,
            height: 0,
            bmi: 0,
            bmiCategory: ''
        };
    }

    handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
        const weight = parseFloat(e.target.value);
        this.setState({ weight });
    };

    handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
        const height = parseFloat(e.target.value);
        this.setState({ height });
    };

    handleSubmit = (e: FormEvent<HTMLFormElement>) => { // Corrected event type here
        e.preventDefault();
        const { weight, height } = this.state;
        const bmi = weight / (height * height);
        let bmiCategory: string;
        if (bmi < 18.5) {
            bmiCategory = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiCategory = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            bmiCategory = "Overweight";
        } else {
            bmiCategory = "Obesity";
        }
        this.setState({ bmi, bmiCategory });
    };

    render() {
        const { bmi, bmiCategory } = this.state;
        return (
            <div className="bmi_container">
                <h2>BMI Calculator</h2>
                <form id="bmiForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="weight">Weight (kg):</label>
                    <input type="number" id="weight" name="weight" onChange={this.handleWeightChange} required />
                    <label htmlFor="height">Height (m):</label>
                    <input type="number" id="height" name="height" step="0.01" onChange={this.handleHeightChange} required />
                    <input type="submit" value="Calculate BMI" />
                </form>
                <div id="result">
                    {bmi !== 0 && (
                        <div>
                            <p>Your BMI is: {bmi.toFixed(2)}</p>
                            <p>Your BMI category is: {bmiCategory}</p>
                        </div>
                    )}
                </div>
                <div id="bmiCategories">
                    <h3>BMI Categories:</h3>
                    <ul>
                        <li>Underweight: BMI less than 18.5</li>
                        <li>Normal weight: BMI 18.5 - 24.9</li>
                        <li>Overweight: BMI 25 - 29.9</li>
                        <li>Obesity: BMI 30 or greater</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BMICalculator;
