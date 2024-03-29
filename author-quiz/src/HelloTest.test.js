import React from "react"
import ReactDOM from "react-dom"

function Hello(props) {
    return <h1>Hello at {props.now}</h1>
}

const moment = new Date()

describe("When testing directly", () => {
    let result
    beforeAll( () => {
        result = Hello({now : moment.toISOString()})
    })
    
    it("return a value", () => {
        expect(result).not.toBeNull()
    })

    it("is a h1", () => {
        expect(result.type).toBe("h1")
    })

    it("has children", () => {
        expect(result.props.children).toBeTruthy()
    })
})

describe("When testing with REACT DOM", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment.toISOString()}></Hello>, div)
    })
})