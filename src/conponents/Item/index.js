import React, {PureComponent} from 'react';

class Item extends PureComponent {
    constructor(props) {
        super();
    }

    render() {
        const {data, dateStart, dateFinish, information} = this.props;
        return (
            <li className="item">
                <>
                    <header className="item__head">
                        <div>
                            <p className="item__head__title">
                                {dateStart}:
                            </p>
                            <h3 className="item__title">
                                { data.startDate }
                            </h3>
                        </div>
                        <div>
                            <p className="item__head__title">
                                {dateFinish}:
                            </p>
                            <h3 className="item__title">
                                { data.endDate }
                            </h3>
                        </div>
                    </header>
                    <p className="item__head__title">
                        {information}:
                    </p>
                    <p>
                        {data.data}
                    </p>
                </>
            </li>
        );
    }
}

export default Item;