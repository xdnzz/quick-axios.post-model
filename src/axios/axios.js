import axios from 'axios'

import {useState} from 'react'


function Postar(){

const url = '';
const [data, setData] = useState({
    nome: '',

})

function handle(e){
   
    const newData={...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData)

}


function submit(e){
    e.preventDefault();
    axios.post(url, {
        nome: data.nome
    })
    .then(res=>{
        console.log(res.data)
    })
}



    return(

        <form onSubmit={(e)=>submit(e)}>
            <input onChange={(e)=>handle(e)} type="text" id="nome" value={data.nome}/>
            <button type="submit">Enviar Dados</button>
        </form>
    )

}



export default Postar;

//Fiz esse modelo para usar frequentemente com o método POST usando a lib Axios
//Tenho usado bastante esse modelo pra fazer CRUDS, então, para facilitar 
//resolvi criar um modelo simples porém bem útil pra trabalhar mais rápido.
//Dependendo da API, terã que fazer implementação de Headers, tokens de autenticação, etc..
//Futuramente irei adicionar os modelos de patch/put, delete e edit
