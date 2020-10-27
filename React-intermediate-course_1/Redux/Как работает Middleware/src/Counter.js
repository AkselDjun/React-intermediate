import React from 'react'
import { connect } from "react-redux"

class Counter extends React.Component {
    render() {
        return (
            <div style={{ padding: 20, border: "1px solid #ccc" }}>
                <h1>Counter {this.props.counter}</h1>
                <hr />
                <div>
                    <button onClick={() => this.props.onChange(1)}>Add</button>
                    <button onClick={() => this.props.onChange(-1)}>Sub</button>
                    <button onClick={() => this.props.onChange(2)}>Add +2</button>
                    <button onClick={() => this.props.onChange(-2)}>Sub -2</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (number) => dispatch({ type: "ADD2", payload: number })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
