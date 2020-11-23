import React, {useState} from 'react';
import { render } from 'react-dom';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);

    axios.post(`/search`, {searchTerm: e.target.value })
      .then(res => {
        setResult(res.data);
      }).catch(err => {
      console.log(err)
    })
  }

  function getHighlights(r, searchTerm) {
    var idx = r.toLowerCase().indexOf(searchTerm.toLowerCase());
        
    let highlight = [];

    for (let i = 0;i < r.length;i++) {
      if (idx === -1) {
        highlight.push(false);
      } else if (i < idx) {
        highlight.push(false);
      } else if (i === (idx + searchTerm.length - 1)) {
        highlight.push(true);
        idx = r.toLowerCase().indexOf(searchTerm.toLowerCase(), idx+1);   
      } else if (i >= idx && i < (idx + searchTerm.length)) {
        highlight.push(true);
      } 
    }

    return highlight;
  }

  const zip = (a, b) => a.map((k, i) => [k, b[i]]);

  return (  
    <div className="app">
      <h1>G Search</h1>
      <form> 
        <input type="text" name='searchTerm' placeholder="Search" value={searchTerm} onChange={handleChange}/>
      </form>
      {result.length > 0 && <ul className="dropdownContent">
        {result.map(r => <li>{
          zip(r.split(''), getHighlights(r, searchTerm)).map((char, h) => <span className={h ? 'searched' : ''}>{char}</span>)
        }</li>)
        }          
      </ul>}
    </div>
  );
}

render(<App />, document.getElementById('app'));
