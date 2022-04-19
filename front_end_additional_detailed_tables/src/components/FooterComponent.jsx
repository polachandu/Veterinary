import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span className="text-muted">University of Calgary 2500 University Drive NW Calgary Alberta T2N 1N4 CANADA Copyright © 2021</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
