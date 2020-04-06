import React from 'react';
import { Component } from 'react';
import './imageBar.style.css';
import pic1 from './parasite.jpg';
import pic2 from './sonic.jpg';
import pic3 from './starwars.jpg';
import pic4 from './nanoze.jpg';
class ImageBar extends Component {

    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 1,
            num3: 2,
            num4: 3,
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState(() => ({
                num1: this.state.num1 + 1,
                num2: this.state.num2 + 1,
                num3: this.state.num3 + 1,
                num4: this.state.num4 + 1
            }));
        }, 5000);
        console.log(this.state.num);
    }
    render() {
        const pics = [pic1, pic2, pic3, pic4];
        return (
            <div class="image-bar">
                <img alt="" src={pics[this.state.num1 % 4]} />
                <img alt="" src={pics[this.state.num2 % 4]} />
                <img alt="" src={pics[this.state.num3 % 4]} />
                <img alt="" src={pics[this.state.num4 % 4]} />
            </div>
        )
    }
}

export default ImageBar;