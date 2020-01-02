import React, {useState} from 'react';
import './style/main.css'
import $ from 'jquery'
import axios from 'axios'




function App() {

  const [telefone, setT] = useState()
  const [nome, setN] = useState('')
  const [sms, setSM] = useState('')

  const reservar = (e)=>{
    e.preventDefault()

    if(nome === "" || telefone === ""){
        setSM("Um ou mais campos vazios")
    }else{
    axios.post('/cliente/reservar', {
      "nome": nome,
      "telefone":telefone
    }).then((res)=>{
        if(res.data.message){
          setSM(res.data.message)
        }else{
          setSM("Reserva feita com sucesso")
        }
    })

  }
  }
  const handleSubmit = e =>{
    e.preventDefault()
  }

  const handleT = e=>{
    setT(e.target.value)
  }

  const handleN = e=>{
    setN(e.target.value)
  }

  const showRs = ()=>{
    $('.overlay').slideToggle(()=>{
      $('.overlay').css({display: 'flex'})
    })
  }

  const cancel = ()=>{
    
    setSM('')

    $('.overlay').slideToggle(()=>{
      $('.overlay').css({display: 'none'})
    })


    
  }

  return (
    <div className="App">

      <div className="overlay">

          <form onSubmit={handleSubmit}>
              
              {sms === "" ? null:
                <h1 className="title_sucess">{sms}</h1>
              }

              <h1 className="title_rs">Reserva agora</h1>
              
              <div>
                <h1>Nome: </h1>
                <input type="text" onChange={handleN} placeholder="Nome do cliente" />
              </div>

              <div>
                <h1>Telefone: </h1>
                <input type="number" onChange={handleT} placeholder="Numero do telefone" />
              </div>

             
              <button onClick={reservar} className="btn_rs">Reservar</button>
              <button  onClick={cancel} className="btn_rs">Ok</button>
             

          </form>
        </div>


       <div className="root">

        <div className="navbar">
            <div className="logo">
                <h1>BarBershop Tony</h1>
            </div>
                     
        </div>


        <div className="hero">

            <div className="title_hero">
                <h1>BarBershop</h1>
                <p>Vem e vamos fazer o teu corte do jeito que você gosta.</p>
                <button onClick={showRs}  className="btn_hero">Fazer reservar</button>
            </div>

            <div className="horario">
                <ul>
                    <li>
                        <img src="img/icons8_phone_50px.png" alt="" />
                        <span>(+244) 941551087</span>
                        <p>ate Baka passed a drug test, we gotta celebrate I'm in bed awake, thinkin </p>
                    </li>

                    <li>
                        <img src="img/icons8_location_50px.png" alt="" />
                        <span>Maianga, Mutamba</span>
                        <p>Rua Albano Machado Casa Predio N.23</p>
                    </li>

                    <li>
                        <img src="img/icons8_time_machine_50px.png" alt="" />
                        <span>Aberto de Segunda a Sexta</span>
                        <p>08:00 AM - 9:00 PM</p>
                    </li>
                  
                </ul>
            </div>
            
            </div>
            
            </div>
    </div>
  );
}

export default App;
