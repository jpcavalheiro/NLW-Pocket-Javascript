import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Sumary } from './components/summary'

// import { EmptyGoals } from './components/empty-goals'

export function App() {
  return (
    <Dialog>
      {/* <EmptyGoals /> */}
      <Sumary />
      <CreateGoal />
    </Dialog>
  )
}
