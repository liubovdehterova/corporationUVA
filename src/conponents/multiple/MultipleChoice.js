import React, {Component} from 'react';

class MultipleChoice extends Component {
    constructor(props, create_at = null) {
        super(props, create_at);
        this.i = 0;
        this.localHtml = '';
        this.create_at = create_at ? create_at : Date.now().toString();

        this.addBlock = this.addBlock.bind(this);
        this.buttonList = this.buttonList.bind(this);
    }
    static  storage = window.localStorage;
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

    addBlock() {
        const mul = document.querySelector('.multiple');
        const mulInn = MultipleChoice.createElement(
            'div',
            ['multiple__inner'],
            {id: `${++this.i}`}
        );
        const inputMultipleStart = MultipleChoice.createElement(
            'input',
            [],
            {type: 'date', id: 'dateFrom'}
        );
        const labelMultipleStart = MultipleChoice.createElement(
            'label',
            [],
            {for: 'dateFrom'},
            `${this.props.dateStart}`
        );
        const inputMultipleEnd = MultipleChoice.createElement(
            'input',
            [],
            {type: 'date', id: 'dateTo'});

        const labelMultipleEnd = MultipleChoice.createElement(
            'label',
            [],
            {for: 'dateTo'},
            `${this.props.dateFinish}`
        );
        const textareaMultiple = MultipleChoice.createElement(
            'textarea',
            [],
            {id: 'workplace'}
        );
        const labelTextareaMultiple = MultipleChoice.createElement(
            'label',
            [],
            {for: 'workplace'},
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
        mulInn.addEventListener('click', this.buttonList);
        return mulInn;
    }

    render() {
        return (
            <>
                <h2 className="title__block">{this.props.title}</h2>
                <div className="multiple">
                    <div className="multiple__inner" id={this.i}>
                        <label htmlFor="dateFrom">{this.props.dateStart}</label>
                        <input type="date" id="dateFrom"/>
                        <label htmlFor="dateTo">{this.props.dateFinish}</label>
                        <input type="date" id="dateTo"/>
                        <label htmlFor="workplace">{this.props.information}</label>
                        <textarea id="workplace"/>
                    </div>


                </div>
                <button type="button" className="btn_add" onClick={this.addBlock}>Add</button>
            </>
        )
    }
}

export default MultipleChoice;