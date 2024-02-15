import './App.css';
import Wizard from './components/Wizard/wizardComponent';
import Estrellas from './components/AnswerStar/Estrellas';
import NumComponent from './components/AnswerNumber/numeros';
import Box from './components/textBox/textBox';
import WizardFinishButton from './components/buttonFinish';



const Page1 = () => (
  <div>
    <h1>Question 1</h1>
    <h3>How was the alternate experience after graduation?</h3>
    <Estrellas />
  </div>
);

const Page2 = () => (
  <div>
    <h1>Question 2</h1>
    <h3>How likely are you recomend?</h3>
    <NumComponent />
  </div>
);

const Page3 = () => (
  <div>
    <h1>Question 3</h1>
    <h3>Describe your experience</h3>
    <Box />
    
  </div>
);

const Page4 = () => (
  <div>
    <h1>Resume</h1>
    <h3>Describing questions</h3>
    <WizardFinishButton />
  </div>
)


const App = () => {
  return (
   <Wizard>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
   </Wizard>
  );
}

export default App;
