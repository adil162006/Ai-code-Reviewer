import { useState,useEffect } from 'react'
import './App.css'
import Editor from "react-simple-code-editor"
import "prismjs/themes/prism-tomorrow.css"
import Markdown from 'react-markdown'
import prism from 'prismjs'
import axios from 'axios'

function App() {
const [code, setCode] = useState(``)


const [review, setReview] = useState(``)
  
  useEffect(() => {
    prism.highlightAll()
  },[])


  async function reviewCode(){
  const response = await  axios.post('http://localhost:3000/ai/get-review', { code })
  console.log(response.data);
  setReview(response.data)
  
  }
  return (
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages.js, 'js')}
            padding={10}
            className="editor"
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              height: '100%',
              width: '100%'
            }}
          /> 
        </div>
        <div className="review" onClick={reviewCode}>Review</div>
      </div>
      <div className="right">
        <Markdown>{review}</Markdown>


      </div>

    </main>
    </>
  )
}


export default App
