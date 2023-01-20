import React from 'react'
import './Tasks.css'
import SelectQuizType from '../SelectQuizType/SelectQuizType'

class Tasks extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTask: 0,
			totalScores: 0
		}
	}

	changeQuestionForWrong = () => {
		this.setState({
			currentTask: this.state.currentTask + 1
		})
	}

	changeQuestionForCorrect = () => {
		this.setState({
			currentTask: this.state.currentTask + 1,
			totalScores: this.state.totalScores + 20
		})
	}

	restartQuiz = () => {
		this.setState({currentTask: 0, totalScores: 0})
	}

	shuffleFourAnswer = () => {
		const { currentTask } = this.state
		const { QAarray } = this.props
		let num = Math.floor(Math.random() * 4)
		if (num == 0 ) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 1) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 2) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[2]}</button>
				</div>
			)
		} else if(num == 3) {
			return (
				<div className='answers'>
					<button onClick={this.changeQuestionForWrong}  className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[1]}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[2]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
				</div>
			)
			
		} else {
			return (
				<div><h1> error </h1></div>
			)
		}
	}

	shuffleTwoAnswer = () => {
		const { currentTask } = this.state
		const { QAarray } = this.props
		let num = Math.floor(Math.random() * 2)
		if(num == 0) {
			return (
				<div className='answers tc'>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
				</div>
			)
		} else if(num == 1) {
			return (
				<div className='answers tc'>
					<button onClick={this.changeQuestionForWrong} className='answer' >{QAarray[currentTask].incorrect_answers[0]}</button>
					<button onClick={this.changeQuestionForCorrect} className='answer' >{QAarray[currentTask].correct_answer}</button>
				</div>
			)
		} else {
			return (
				<div><h1> error </h1></div>
			)
		}
	}

	render() {
		// destructure states
		const { currentTask, totalScores } = this.state
		const { QAarray, getQuiz } = this.props
		return (
		<div className='tc'>
			{
				currentTask < QAarray.length
				? 
				<div className='questionAndAnswers ma2 tc'>
					<div className='question'><h4 className='tc'>{QAarray[currentTask].question}</h4></div>
					{
						QAarray[currentTask].incorrect_answers.length == 1 
						?
						this.shuffleTwoAnswer()
						:
						this.shuffleFourAnswer()
					}
					
				</div>

				: 
				<div className='tc'>
					<h1> YOUR SCORE</h1>
					<h1 className='tc'>{`${totalScores}`}</h1>
					{
						totalScores <= 0 ? <h4>whait... what?</h4> : totalScores <= 40 ? <h4>that's okay</h4> : <h4>Really nice try</h4>
					}
					<button onClick={getQuiz} className='button'>new quiz</button>
					<button onClick={this.restartQuiz} className='button'>reset</button>
				</div>
			}
		</div>
			
		)
	}
} 


export default Tasks;