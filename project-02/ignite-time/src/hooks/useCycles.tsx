import { createContext, ReactNode, useContext, useState } from 'react'

/**
 * TESTANDO GIT
 */

interface IChildrenNode {
  children: ReactNode
}

export interface ICycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finisheddDate?: Date
}

interface CyclesContextTypes {
  activeCycle: ICycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  cycles: ICycle[]
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  addNewCycle: (cicle: ICycle) => void
  changeSetActiveCycleId: (id: string) => void
  handleInterruptCycle: () => void
}

const CyclesContext = createContext({} as CyclesContextTypes)

function CyclesProvider({ children }: IChildrenNode) {
  // eslint-disable-next-line no-unused-vars
  const [activeCycle, setActiveCycle] = useState<ICycle | undefined>(undefined)

  // eslint-disable-next-line no-unused-vars
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [cycles, setCycles] = useState<ICycle[]>([])
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finisheddDate: new Date(),
          }
        } else {
          return cycle
        }
      }),
    )
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function addNewCycle(cicle: ICycle) {
    setCycles((state) => [...state, cicle])
    setActiveCycle(cicle)
  }

  function changeSetActiveCycleId(id: string) {
    setActiveCycleId(id)
  }

  return (
    <>
      <CyclesContext.Provider
        value={{
          activeCycle,
          activeCycleId,
          markCurrentCycleAsFinished,
          cycles,
          amountSecondsPassed,
          setSecondsPassed,
          addNewCycle,
          changeSetActiveCycleId,
          handleInterruptCycle,
        }}
      >
        {children}
      </CyclesContext.Provider>
    </>
  )
}

function useCycles() {
  return useContext(CyclesContext)
}

export { CyclesProvider, useCycles }
