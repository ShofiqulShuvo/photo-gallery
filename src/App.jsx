
import { DndProvider } from 'react-dnd'
import Main from './components/Main'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>

        <Main />

      </DndProvider>
    </>
  )
}

export default App