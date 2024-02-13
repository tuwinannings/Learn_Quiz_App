import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Questions from '../data/Questions'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ReactImageAppear from 'react-image-appear';
import { Img } from 'react-image-loading';
import ImageFadeIn from "react-image-fade-in";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron'
import PlaySound from '../components/PlaySound'
import useSound from 'use-sound';
import winSound from '../sounds/10coins1.mp3';
import loseSound from '../sounds/coinlose.mp3';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';

class Quiz extends Component {
    
    constructor(props) {
        super(props)
    
        this.questionsData = Questions.questions.sort(function (a, b) { return 0.5 - Math.random() })

        this.state = {
          languageToLearn: -1,
          questionNumber: 0,
          currentQuestion: this.questionsData[0],
          rightAnswer: -1,
          clickedAnswer: -1,
          answered: false,
          gameState: 0,
          goodAnswers: 0,
          imageLoaded: false,
          pastQuestions: []
        }

        this.newAnswers = []
        this.newAnswers = this.generateAnswers();

        this.showAllQuestions = this.showAllQuestions.bind(this);
        
    }
    
    onLoad = () => {
      this.setState({
        imageLoaded: true
      })
  }

    generateAnswers(){
        var question = this.state.currentQuestion
        var allAnswers = this.questionsData.map((q) => q.answers[this.state.languageToLearn])
        var rightAnswer = question.answers[this.state.languageToLearn];
        allAnswers = this.removeItemOnce(allAnswers, rightAnswer)
        allAnswers = this.getRandom(allAnswers, 3);
        allAnswers.push(rightAnswer);
        allAnswers.sort(function (a, b) { return 0.5 - Math.random() })
        return allAnswers;
    }

    componentDidMount(){
      console.log('componentDidMount');
    }

    componentDidUpdate(){
      console.log('componentDidUpdate');
    }

    getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    removeItemOnce(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }
    
    removeItemAll(arr, value) {
      var i = 0;
      while (i < arr.length) {
        if (arr[i] === value) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
      return arr;
    }

    shouldComponentUpdate(){
      console.log('shouldComponentUpdate');
      return true;
    }

    compareAnswer = (answer, index) =>{
      var answeredRight = false
      if(this.state.rightAnswer == -1 && this.state.imageLoaded)
      {
        let nr = this.state.questionNumber + 1
        if(answer == this.state.currentQuestion.answers[this.state.languageToLearn]){
          answeredRight = true
          let sn = new Audio(winSound);
          sn.play()
          this.setState({
            questionNumber: nr,
            rightAnswer: index,
            clickedAnswer: index,
            answered: true,
            goodAnswers: this.state.goodAnswers + 1
          })
        }
        else{
          let sn = new Audio(loseSound);
          sn.play()
          this.setState({
            questionNumber: nr,
            rightAnswer: -2,
            clickedAnswer: index,
            answered: true
          })
        }

        var pas = this.state.pastQuestions
        var ok = [this.state.currentQuestion.id, answeredRight, answer]
        pas.push(ok);
        this.setState((prevState) => ({
          pastQuestions: pas
        }))
    
        setTimeout(() => {
          this.nextQuestion()
        }, 1000);
      }
      else{
        console.log('already clicked')
      }

    }

    nextQuestion = () =>{
      let nrOfQuestions = this.questionsData.length - 1
      nrOfQuestions = 10
        if(this.state.questionNumber < nrOfQuestions){
          console.log('next question...');
            this.setState({
              currentQuestion: this.questionsData[this.state.questionNumber],
                rightAnswer: -1,
                clickedAnswer: -1,
                imageLoaded: false
            })
        }
        else
        {
          this.setState({
            gameState:1
        })
            //end
        }
    }

    handleClick(e) { if (e) {e.preventDefault()}; }

    chooseAnswerState() {
      let message = 'Select the Correct Word'
      if(this.state.languageToLearn == 1) message = 'Wählen Sie das richtige Wort'
      if(this.state.languageToLearn == 2) message = 'Selecteer het juiste woord'

      const style = this.state.imageLoaded ? {} : {visibility: 'hidden', display: 'none'}
      const style2 = !this.state.imageLoaded ? {} : {visibility: 'hidden', display: 'none'}
      return (
        <Col>              
              <h1>{message}</h1>
              <p>
                <Image style={style} onLoad={this.onLoad} src={`images/quiz/${this.state.currentQuestion.img[1]}.jpg`}  fluid />
                <Image style={style2} src='images/quiz/loading.jpg'  fluid />
              </p>
              {/* <p><Img src={`images/quiz/${this.state.currentQuestion.img[1]}.jpg`} style={{width: 900}} /></p> */}
              {
                this.newAnswers.map(
                (text, index) => (            
                <Button key={index} onClick={()=>{this.compareAnswer(text, index)}} onMouseDown={this.handleClick} onKeyUp={(e) => {if (e.keyCode === 13 || e.keyCode === 32) {this.handleClick()}}} variant={
                this.state.rightAnswer == index ? 'success': 
                this.state.clickedAnswer == index ? 'danger' : 'outline-primary'
                } size="lg" block>
                {text}
                </Button>)
                )}
              
              </Col>
      );
    }

    changeLanguage(lang){
      this.setState({
        languageToLearn: lang
      })
    }

    playAgain = () =>{
      this.questionsData = Questions.questions.sort(function (a, b) { return 0.5 - Math.random() })
      this.setState((prevState) =>({
        questionNumber: 0,
        currentQuestion: this.questionsData[0],
        rightAnswer: -1,
        clickedAnswer: -1,
        answered: false,
        gameState: 0,
        goodAnswers: 0,
        imageLoaded: false,
        pastQuestions: []
      }))
    }


    chooseLanguageToLearn = () =>{
      const detectBrowserLanguage = require('detect-browser-language')
      // this.setState({ userLanguage: detectBrowserLanguage() })

      console.log(detectBrowserLanguage());

      return (<Col>
        <h1>Choose language to learn</h1>
        <button className='flags'><Image onClick={()=> this.changeLanguage(0)} key='0' src='images/flags/united-kingdom-flag-small.jpg'  fluid /></button>
        <button className='flags'><Image onClick={()=> this.changeLanguage(1)} key='1' src='images/flags/germany-flag-small.jpg'  fluid /></button>
        <button className='flags'><Image onClick={()=> this.changeLanguage(2)} key='2' src='images/flags//netherlands-flag-small.jpg'  fluid /></button>
        <p></p>
        <Button onClick={() => {
               this.setState({
                gameState: 2
              }) 
        }} variant='outline-primary' size="lg" block>Show all questions </Button>
        <p></p>
      </Col>)
    }

    showResults = () =>{
      //console.log(Questions.questions.filter(q => q.id === 1)[0].img)
      return (
        <Col>         
          <h1>Results</h1>
          <Alert variant='secondary'><h2>Answered <Badge variant="success">{this.state.goodAnswers}</Badge> good out of {this.state.questionNumber}</h2></Alert>
          <Button onClick={this.playAgain} variant='outline-primary' size="lg" block>Play Again</Button>
          <p></p>
          {/* <h3>Your Answers</h3> */}
          <CardColumns>
          {this.state.pastQuestions.map(
            (q, index) =>
            <Card>
            <Card.Img variant="top" src={`images/quiz/${Questions.questions.filter(x=> x.id === q[0])[0].img[1]}.jpg`} />
            {console.log(Questions.questions.filter(x=> x.id === q[0])[0])}
            <Card.Body>
          <Card.Title>{Questions.questions.filter(x=> x.id === q[0])[0].answers[this.state.languageToLearn]}</Card.Title>
              <Card.Text >
                Your answer: {q[2]}
              </Card.Text>
              {q[1] ? <Button variant="success">RIGHT</Button> : <Button variant="danger">WRONG</Button>}
            </Card.Body>
            </Card>

            )}            
            </CardColumns>
            <p></p>
          <Button onClick={this.playAgain} variant='outline-primary' size="lg" block>Play Again</Button>
          <p></p>
        </Col>    
      )
    }

    

    showAllQuestions = () =>{
      return (
        <Col>         
          <h1>All Questions: {this.questionsData.length}</h1>
          <CardColumns>
          {this.questionsData.map(
            (q, index) =>
            <Card key={q.id}>
            <Card.Img variant="top" src={`images/quiz/${q.img[1]}.jpg`} />
            {/* {console.log(q)} */}
            <Card.Body>
          <Card.Title></Card.Title>
              <Card.Text >
                <ul>
                {q.answers.map(x => <li key={x}>{x}</li>)}
                </ul>
              </Card.Text>
              {/* {q[1] ? <Button variant="success">RIGHT</Button> : <Button variant="danger">WRONG</Button>} */}
            </Card.Body>
            </Card>

            )}            
            </CardColumns>
            <p></p>
          {/* <Button onClick={this.playAgain} variant='outline-primary' size="lg" block>Play Again</Button> */}
        </Col>    
      )
    }
    
    render() {
        if(this.state.rightAnswer == -1 && this.state.imageLoaded){
          this.newAnswers = this.generateAnswers()
          console.log('check')
        }

        return (
          <Container fluid>
            {this.state.gameState == 0 && this.state.languageToLearn == -1 ? (
              this.chooseLanguageToLearn()
            ) 
            : this.state.gameState == 0 ?
            (
              this.chooseAnswerState()
            ) 
            :this.state.gameState == 1 ?
            (
              this.showResults()
            )
            :this.state.gameState == 2 ?
            (
              this.showAllQuestions()
            ) : null}
          </Container>
        )
    }
}

export default Quiz