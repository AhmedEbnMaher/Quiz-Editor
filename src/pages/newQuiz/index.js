import React,{useEffect, useState} from 'react'
import './index.scss'
import { Row, Col, Card, CardBody, TabContent, TabPane, Progress} from "reactstrap";
import { Link } from "react-router-dom";
import QuizDetails from '../../components/quiz-details'
import QuizNav from '../../components/new-quiz-nav';
import QuizQuestions from '../../components/quiz-question';
import { useDispatch } from 'react-redux';
import {creatNewQuiz} from '../../store/landingPage/actions'
const NewQuiz = props => {

  const [quizTitle,setQuizTitle]= useState('')
  const [quizDescription,setQuizDescription]= useState('')
  const [quizUrl,setQuizUrl]= useState('')
  const [quizScore,setQuizScore]= useState()
  const [questionTwo,setQuestionTwo]= useState('')
  const [questionThree,setQuestionThree]= useState('')
  const [questionFour,setQuestionFour]= useState('')
  const [questionFive,setQuestionFive]= useState('')
  const [questionOne,setQuestionOne]= useState('')
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(25);
  const [tabOne,setTabeOne]= useState(false)
  const [tabTwo,setTabeTwo]= useState(false)
  const [tabThree,setTabeThree]= useState(false)
  const [tabFour,setTabeFour]= useState(false)
  const [tabFive,setTabeFive]= useState(false)
  const [tabSix,setTabeSix]= useState(false)
  const [processCompleted,setProcessCompleted]= useState(false)
  const newQuiz=  {

    title: quizTitle,
    description: quizDescription,
    finalscore: quizScore,
    url: quizUrl,
    questions:[questionOne,questionTwo,questionThree,questionFour,questionFive]
  
  }
  const dispatch=useDispatch();
useEffect(()=>{

if(questionOne!=='' && questionTwo!=='' && questionThree!=='' && questionFour!=='' && questionFive!=='' )
{
  setProcessCompleted(true)
}

},[questionOne,questionTwo,questionThree,questionFour,questionFive])
function toggleTabProgress(tab) {
if (activeTabProgress !== tab) {
    if(tab >= 1 && tab <=7 ){

      setactiveTabProgress(tab);
       
      if(tab === 1) {  setprogressValue(5) }
      if(tab === 2) {  setprogressValue(10) }
      if(tab === 3) {  setprogressValue(20) }
      if(tab === 4) {  setprogressValue(40) }
      if(tab === 5) {  setprogressValue(60) }
      if(tab === 6) {  setprogressValue(80) }
      if(tab === 7) {  setprogressValue(100) }
   
    }
}
}

  return (
    <div className='container'>
      <div className='new-quiz-wrapper'>
        <Row>
      <Col lg="12">          
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">Creating New Quiz</h4>

                                        <div id="progrss-wizard" className="twitter-bs-wizard">
                                           <QuizNav activeTabProgress={activeTabProgress}  toggleTabProgress={toggleTabProgress}/>

                                            <div id="bar" className="mt-4">
                                                <Progress color="success" striped animated value={progressValue} />
                                                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"></div>
                                            </div>
                                            <TabContent activeTab={activeTabProgress} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                <QuizDetails
                                                setQuizTitle = {setQuizTitle}
                                                setQuizDescription = {setQuizDescription}
                                                setQuizUrl = {setQuizUrl}
                                                setQuizScore= {setQuizScore}
                                                quizTitle = {quizTitle}
                                                quizDescription ={quizDescription }
                                                quizUrl={quizUrl}
                                                quizScore ={quizScore}
                                                setTabeOne= {setTabeOne}
                                                />
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                  <QuizQuestions  
                                                  questionNumber={1}
                                                  setQuestionOne = {setQuestionOne}
                                                  setQuestionTwo = {setQuestionTwo}
                                                  setQuestionThree = {setQuestionThree}
                                                  setQuestionFour={setQuestionFour}
                                                  setQuestionFive = {setQuestionFive}
                                                  setTabeTwo={setTabeTwo}
                                                  setTabeTree={setTabeThree}
                                                  setTabeFour={setTabeFour}
                                                  setTabeFive={setTabeFive}
                                                  setTabeSix= {setTabeSix}
                                                  />
                                                </TabPane>
                                                <TabPane tabId={3}>
                                                <QuizQuestions
                                                  questionNumber={2}
                                                  setQuestionOne = {setQuestionOne}
                                                  setQuestionTwo = {setQuestionTwo}
                                                  setQuestionThree = {setQuestionThree}
                                                  setQuestionFour={setQuestionFour}
                                                  setQuestionFive = {setQuestionFive}
                                                  setTabeTwo={setTabeTwo}
                                                  setTabeTree={setTabeThree}
                                                  setTabeFour={setTabeFour}
                                                  setTabeFive={setTabeFive}
                                                  setTabeSix= {setTabeSix}
                                                  />
                                                </TabPane>
                                                <TabPane tabId={4}>
                                                <QuizQuestions 
                                                 questionNumber={3}
                                                 setQuestionOne = {setQuestionOne}
                                                 setQuestionTwo = {setQuestionTwo}
                                                 setQuestionThree = {setQuestionThree}
                                                 setQuestionFour={setQuestionFour}
                                                 setQuestionFive = {setQuestionFive}
                                                 setTabeTwo={setTabeTwo}
                                                  setTabeTree={setTabeThree}
                                                  setTabeFour={setTabeFour}
                                                  setTabeFive={setTabeFive}
                                                  setTabeSix= {setTabeSix}
                                                 />
                                                   </TabPane>
                                                   <TabPane tabId={5}>
                                                   <QuizQuestions  
                                                   questionNumber={4}
                                                   setQuestionOne = {setQuestionOne}
                                                   setQuestionTwo = {setQuestionTwo}
                                                   setQuestionThree = {setQuestionThree}
                                                   setQuestionFour={setQuestionFour}
                                                   setQuestionFive = {setQuestionFive}
                                                   setTabeTwo={setTabeTwo}
                                                  setTabeTree={setTabeThree}
                                                  setTabeFour={setTabeFour}
                                                  setTabeFive={setTabeFive}
                                                  setTabeSix= {setTabeSix}
                                                   />
                                                   </TabPane>
                                                   <TabPane tabId={6}>
                                                   <QuizQuestions 
                                                    questionNumber={5}
                                                    setQuestionOne = {setQuestionOne}
                                                    setQuestionTwo = {setQuestionTwo}
                                                    setQuestionThree = {setQuestionThree}
                                                    setQuestionFour={setQuestionFour}
                                                    setQuestionFive = {setQuestionFive}
                                                    setTabeTwo={setTabeTwo}
                                                  setTabeTree={setTabeThree}
                                                  setTabeFour={setTabeFour}
                                                  setTabeFive={setTabeFive}
                                                  setTabeSix= {setTabeSix}
                                                    />
                                                   </TabPane>
                                                <TabPane tabId={7}>
                                                    <div className="row justify-content-center">
                                                        <Col lg="6">
                                                            <div className="text-center">
                                                                <div className="mb-4">
                                                                    <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                                                </div>
                                                                <div>
                                                                    <h5>Confirm Detail</h5>
                                                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link mt-4">
                                                <li className={activeTabProgress === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { toggleTabProgress(activeTabProgress - 1);} }>Previous</Link></li>
                                                <li className={activeTabProgress === 7? "next disabled" : "next"}><Link to="#" onClick={() => { 
                                                       
                                                       if(tabOne&&activeTabProgress===1&&tabTwo===false )
                                                       {
                                                        
                                                        toggleTabProgress(2)
                                                       }else if(tabTwo&&activeTabProgress===2 &&tabThree===false)
                                                       {
                                                        
                                                        toggleTabProgress(activeTabProgress + 1)
                                                       }else if(tabThree &&activeTabProgress ===3  && tabFour === false)
                                                       {
                                                      
                                                        toggleTabProgress(activeTabProgress + 1)
                                                       }else if(tabFour&&activeTabProgress===4 && tabFive === false)
                                                       {
                                                        
                                                        toggleTabProgress(activeTabProgress + 1) 
                                                       }else if(tabFive&&activeTabProgress===5 && tabSix === false)
                                                       {
                                                        
                                                        toggleTabProgress(activeTabProgress + 1)
                                                       }else if(tabSix&&activeTabProgress===6 && questionFive!=='')
                                                       {
                                                       
                                                        toggleTabProgress(activeTabProgress + 1)
                                                       }
                                                       else if(processCompleted && tabSix=== true)
                                                       {
                                                     
                                                        dispatch(creatNewQuiz(newQuiz))
                                                      
                                                       }
                                                       ;} }>{processCompleted?'Create':' Next'}</Link></li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
      </div>
   </div>

  )
}

export default NewQuiz
