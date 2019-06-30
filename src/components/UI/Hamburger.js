import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class Hamburger extends Component {

    render() {
        return (
            <div >
                <HamburgerMenu
                    isOpen={this.props.slideoutVisible}
                    menuClicked={this.props.toggleSlideout.bind(this)}
                    width={23}
                    height={20}
                    strokeWidth={2}
                    rotate={0}
                    color='#3954a5'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </div>
        )
    }
}

export default Hamburger;