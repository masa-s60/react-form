import './styles/bluma/bulma.css';
import './styles/animation.css';
import './styles/bluma/fontawesome-free-6.4.0-web/css/all.css';
import Form from './components/templates/form';
function App() {
  return (
    <div className='hero is-fullheight'>
      <div className='hero-body'>
        <div className='container'>
        <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;