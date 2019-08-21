import React from 'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            listing: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDelete = this.onDelete.bind(this)
    }

    onChange(event) {
        this.setState({ listing: event.target.value })
        // console.log(event.target.value);
    }

    onSubmit(event) {
        let newArray = this.state.list.slice()
        newArray.push({text: this.state.listing})
        this.setState({list: newArray, listing: ""}, () => console.log("NEW STATE: ", this.state))
    }

    onDelete(event, listing) {
        console.log(listing)
        let newArray = [];
        let i;
        for(i = 0; i < this.state.list.length; i++ ) {
            if ( this.state.list[i].text != listing.text) {
                newArray.push(this.state.list[i])
            }
            this.setState({list: newArray})
        }
        // initialize empty array 
                // this.state.list[i] === {text: 1}
                // this.state.list[i].text = 1
        // loop through state list 
            // if the current text value != the deleted text 
                // then push to empty array 
        
        // set the new state of the list 
    }

    render() {
        return (
            <div>
                <hr></hr>
                <div>Sub Component</div>
                <p>Enter to-do list</p>
                <div>{this.state.list.map((lists, index) =>
                    (
                        <div key={index} >{lists.text} 
                            <button onClick={(event) => this.onDelete(event, lists)}>DELETE</button>
                        </div>
                        
                    )
                )
                }</div>
                <input onChange={this.onChange} value={this.state.listing} name="listing"></input>
                <button onClick={this.onSubmit}>Sumbit!</button>
            </div>
        )
    }
}

export default TodoList