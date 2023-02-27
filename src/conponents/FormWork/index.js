import React, {Component} from 'react';

class FormWork extends Component {
    constructor(props) {
        super();
        this.i = 0;
        this.state = {
            form: {
                startDate: '',
                endDate: '',
                data: ''
            },
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = key => e => {
        let newForm = {
            ...this.state.form,
            [key]: e.target.value
        }
        this.setState({
            form: newForm
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { startDate, endDate, data } = this.state.form;
        const { dataItem } = this.props;

        const dataInfo = {
            id: dataItem.id,
            startDate: startDate,
            endDate: endDate,
            data: data,
        };

        this.props.addFromProps(dataInfo);
        // this.clearForm();
    }

    render() {
        let {startDate, endDate, data} = this.state.form;
        return (
            <form action="#" className="formApp"
                  onSubmit={this.handleSubmit}
            >
                <h2 className="title__block">{this.props.title}</h2>
                <div className="multiple">
                    <div className="multiple__inner" id={this.i}>
                        <label htmlFor={"dateFrom" + this.i}>
                            {this.props.dateStart}
                        </label>
                        <input type="date"
                               id={"dateFrom" + this.i}
                               name={this.props.dateStart}
                               value={startDate}
                               onChange={this.handleChange('startDate')}
                        />
                        <label htmlFor={"dateTo" + this.i}>
                            {this.props.dateFinish}
                        </label>
                        <input type="date"
                               id={"dateTo" + this.i}
                               name={this.props.dateFinish}
                               value={endDate}
                               onChange={this.handleChange('endDate')}
                        />
                        <label htmlFor={"workplace" + this.i}>
                            {this.props.information}
                        </label>
                        <textarea id={"workplace" + this.i}
                                  name={this.props.information}
                                  value={data}
                                  onChange={this.handleChange('data')}
                        />
                    </div>
                </div>
                <button className="button">post</button>
            </form>
        );
    }
}

export default FormWork;