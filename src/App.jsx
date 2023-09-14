import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAluno from './components/repeticao/ListaAluno'
import TabelaProduto from './components/repeticao/TabelaProduto'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                    <TabelaProduto></TabelaProduto>
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAluno></ListaAluno>
                </Card>

                <Card titulo="#05 - Componete com Filhos Aleatório" color="#00C8F8">
                    <Familia sobrenome="do Carmo">
                        <FamiliaMembro nome="Pedro"></FamiliaMembro>
                        <FamiliaMembro nome="Ana"></FamiliaMembro>
                        <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min="1" max="10"></Aleatorio>
                </Card>
                
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>
                
                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParametro 
                        titulo="Situação do Aluno"
                        aluno="David Jeremias"
                        nota="9.2">
                    </ComParametro>
                </Card>
                
                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
    </div>
    )
}