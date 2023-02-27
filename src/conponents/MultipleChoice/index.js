import React, {Component} from 'react';
import FormWork from "../FormWork";
import List from "../List";
import ButtonAdd from "../ButtonAdd";

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.i = 0;
        this.state = {
            listItem: [
                {
                    id: 1,
                    startDate: "09.01.2020",
                    endDate: "09.01.2021",
                    data: "чего то там такое"
                },
                {
                    id: 2,
                    startDate: "09.01.2020",
                    endDate: "09.01.2021",
                    data: "чего то там такое"
                }
            ],
        };


        this.createItem = this.createItem.bind(this);
        this.buttonList = this.buttonList.bind(this);
        this.addBlock = this.addBlock.bind(this);
    }

    // static  storage = window.localStorage;

    static createElement(tag = 'div', classes = [], attributes = {}, textContent = '') {
        if (typeof tag !== 'string') {
            console.warn('Tag in createElement must be a string');
            let errorEl = document.createElement('div');
            errorEl.textContent = 'Tag in createElement must be a string';
            return errorEl;
        }
        let element = document.createElement(tag);

        if (typeof textContent == 'string') {
            element.textContent = textContent;
        } else {
            console.warn('TextContent in createElement must be a string');
        }
        if (Array.isArray(classes)) {
            classes.forEach(className => {
                    if (typeof className === 'string') {
                        element.classList.add(className);
                    } else {
                        console.warn('Class name in createElement must be a string');
                    }

                }
            )
        }

        if (attributes && typeof attributes === 'object') {
            Object.entries(attributes).forEach(attribute => {
                if (typeof attribute[0] === 'string' && typeof attribute[1] === 'string') {
                    element.setAttribute(attribute[0], attribute[1]);
                } else {
                    console.warn('Element\'s attribute  in createElement must be a string');
                }
            })
        } else {
            console.warn('Attributes in createElement must be an object');

        }
        return element;
    }

    buttonList(e) {
        let card = e.target;
        let cardParent = card.parentElement;
        cardParent.remove();
    }

    addBlock(item) {
        const mul = document.querySelector('.multiple');
        const mulInn = MultipleChoice.createElement(
            'div',
            ['multiple__inner'],
            {id: `${++this.i}`}
        );
        const inputMultipleStart = MultipleChoice.createElement(
            'input',
            [],
            {type: 'date', id: `dateFrom${this.i}`}
        );
        const labelMultipleStart = MultipleChoice.createElement(
            'label',
            [],
            {for: `dateFrom${this.i}`},
            `${this.props.dateStart}`
        );
        const inputMultipleEnd = MultipleChoice.createElement(
            'input',
            [],
            {type: 'date', id: `dateTo${this.i}`});

        const labelMultipleEnd = MultipleChoice.createElement(
            'label',
            [],
            {for: `dateTo${this.i}`},
            `${this.props.dateFinish}`
        );
        const textareaMultiple = MultipleChoice.createElement(
            'textarea',
            [],
            {id: `workplace${this.i}`}
        );
        const labelTextareaMultiple = MultipleChoice.createElement(
            'label',
            [],
            {for: `workplace${this.i}`},
            `${this.props.information}`
        );
        const buttonDeleteMultiple = MultipleChoice.createElement(
            'input',
            ['btn_delete'],
            {type: 'button', value: 'Delete'}
        );
        mul.append(mulInn);
        mulInn.append(
            labelMultipleStart,
            inputMultipleStart,
            labelMultipleEnd,
            inputMultipleEnd,
            labelTextareaMultiple,
            textareaMultiple,
            buttonDeleteMultiple
        );
        mulInn.querySelector('.btn_delete').addEventListener('click', this.buttonList);
        return mulInn;
    }

    createItem(item) {
        const {listItem} = this.state;
        this.setState({
            listItem: [item, ...listItem],
        });
    }

    render() {
        const { listItem } = this.state;
        return (
            <>
                <FormWork
                    dataItem={listItem}
                    addFromProps={this.createItem}
                    buttonList={this.buttonList}
                    title={this.props.title}
                    dateStart={this.props.dateStart}
                    dateFinish={this.props.dateFinish}
                    information={this.props.information}
                />
                <ButtonAdd
                    addBlock={this.addBlock}
                />
                <List
                    listItem={listItem}
                    dateStart={this.props.dateStart}
                    dateFinish={this.props.dateFinish}
                    information={this.props.information}
                />
            </>
        )
    }
}

export default MultipleChoice;