import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { Counter } from "../../Components/Counter";


it("should start count at 0", () => {
    render(<Counter />)

    const paragraph = document.querySelector("p")
    expect(paragraph).toHaveTextContent("Count is 0")
})

it("should start increment when + button is clicked", () => {
    render(<Counter />)

    expect(document.querySelector("p")).toHaveTextContent("Count is 0")
    fireEvent.click(screen.getByText("+"))
    expect(document.querySelector("p")).toHaveTextContent("Count is 1")
})

it("should start decrement when - button is clicked", () => {
    render(<Counter />)

    expect(document.querySelector("p")).toHaveTextContent("Count is 0")
    fireEvent.click(screen.getByText("-"))
    expect(document.querySelector("p")).toHaveTextContent("Count is -1")
})

it("should just worked", () => {
    render(<Counter />)

    expect(document.querySelector("p")).toHaveTextContent("Count is 0")
    fireEvent.click(screen.getByText("+"))
    console.log(document.querySelector("p").textContent)
    fireEvent.click(screen.getByText("+"))
    console.log(document.querySelector("p").textContent)
    fireEvent.click(screen.getByText("+"))
    console.log(document.querySelector("p").textContent)
    fireEvent.click(screen.getByText("-"))
    console.log(document.querySelector("p").textContent)
    expect(document.querySelector("p")).toHaveTextContent("Count is 2")
})