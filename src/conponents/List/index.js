import React, { PureComponent } from 'react';
import Item from "../Item";

class List extends PureComponent {
    constructor(props) {
        super();
        this.i = 0;
    }
    render() {
        const { listItem, dateStart, dateFinish, information } = this.props;
        return(
            <ul className="list">
                {
                    listItem.map(item => (
                        <Item
                            key={++this.i}
                            data={item}
                            dateStart={dateStart}
                            dateFinish={dateFinish}
                            information={information}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default List;