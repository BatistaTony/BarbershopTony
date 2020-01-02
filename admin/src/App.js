import React from 'react';
import './style.css'
import axios from 'axios'

const initialState = [
      {
      nome: '',
      telefone: ''
    }
]

class App extends React.Component {

  state = {
    reservas: initialState
  }

  componentDidMount(){
    axios.get('/cliente/get').then((res)=>{
      this.setState({reservas:res.data.clientes})
    })
  }

  deleteReserv = (telefone)=>{
    axios.post("/cliente/delete", {
      "telefone": telefone
    }).then((res)=>{

      axios.get('/cliente/get').then((res)=>{
        this.setState({reservas:res.data.clientes})
      })

    })
  }

   render(){
      return (
        <div className="App">
          <div className="navbar">
            <h1>BarberShop Tony Reservas</h1>
            </div>

            <div className="res">
            <table className="tableHead">
                    <thead>
                    <tr>
                        <th>NUM</th>
                        <th>NOME</th>
                        <th>TELEFONE</th>
                        
                    </tr>
                    </thead>
                </table>
                
                <table className="tableData">
                        <tbody>
                          {this.state.reservas.map((cl,key)=>
                            <tr key={key}>
                              <td>{key}</td>
                              <td>{cl.nome}</td>
                              <td>{cl.telefone}</td>

                              <button onClick={()=>this.deleteReserv(cl.telefone)}>x</button>
                            </tr>
                            )}
                        </tbody>
                    </table>
              </div>

        </div>
      )
   }
}

export default App;
