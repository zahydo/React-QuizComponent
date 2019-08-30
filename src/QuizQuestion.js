import React, {Component} from 'react'

class QuizQuestion extends Component {
  render () {
    return(
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li key={this.props.quiz_question.id}>{this.props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion