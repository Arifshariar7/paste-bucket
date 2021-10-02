import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import {Snippet} from '../utils/models/Snippets'
import {connect} from '../utils/db'
import * as copy from 'clipboard-copy'
export default function createSnippet({snippetText}){

return (
    <div className="text-center mt-4">
        <h1>
        Snippet
        </h1>
        <Button
            onClick={()=>copy(window.location)}
          className="mb-4 mt-2"
          variant="outline-info"
        >
          Copy link to clipboard
        </Button>
 
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
     <Form.Control 
     style={{margin:"0 auto" ,width:'400px',height:"300px" }} 
     disabled
     value={snippetText}
     as="textarea" rows={3} />
   </Form.Group>
   </Form>
    
    
    
    
    
    
    
    </div>
 

)}
export async function getServerSideProps(context) {
    await connect();

    const slug=context.params.slug
    const snippetObject=await Snippet.findOne({
        slug,
    })
    return {
      props: {
          snippetText:snippetObject.snippet,
      }, // will be passed to the page component as props
    }
  }


