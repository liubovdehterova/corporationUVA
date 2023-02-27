import React, {Component} from "react";

class ButtonAdd extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <button type="button" className="btn_add"
                    onClick={this.props.addBlock}
            >
                Add
            </button>
        )
    }
}

export default ButtonAdd;