import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()})

const fakeState = {
  turnData: {
    books: ['Fake 1', 'Fake 2', 'Fake 3', 'Fake 4'],
    author: {
      name: 'Fake Auhtor',
      imageUrl: 'images/authors/Mark_Twain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Fake 2']
    }
  },
  highlight: ''
};

describe("Auhtor Quiz", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthorQuiz {...fakeState} onAnswerSelected={() => {}}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  describe("When no answer has been selected", () => {
    let wrapper;
    beforeAll( () => {
      wrapper = mount(<AuthorQuiz {...fakeState} onAnswerSelected={() => {}}/>)
    })

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('');
    })

  })

  describe("When the wrong answer has been selected", () => {
    let wrapper;
    beforeAll( () => {
      wrapper = mount(<AuthorQuiz {...(Object.assign({}, fakeState, {highlight: 'red'}))} onAnswerSelected={() => {}}/>)
    })

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('red');
    })

  })

  describe("When the correct answer has been selected", () => {
    let wrapper;
    beforeAll( () => {
      wrapper = mount(<AuthorQuiz {...(Object.assign({}, fakeState, {highlight: 'green'}))} onAnswerSelected={() => {}}/>)
    })

    it("should have no background color", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe('green');
    })

  })

  describe("When the first answer is selected", () => {
    let wrapper;
    const handleAnswerSelected = jest.fn();
    beforeAll( () => {
      wrapper = mount(<AuthorQuiz {...fakeState} onAnswerSelected={handleAnswerSelected}/>)
      wrapper.find('.answer').first().simulate('click')
    })

    it("onAnswerSelected should be called", () => {
      expect(handleAnswerSelected).toHaveBeenCalled()
    })

    it("should receive the first element in the options", () => {
      expect(handleAnswerSelected).toHaveBeenCalledWith("Fake 1")
    })

  })
})

