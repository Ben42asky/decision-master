export interface GameState {
    completedScenarios: string[]
    totalPoints: number
    isWinner: boolean
  }
  
  let gameState: GameState = {
    completedScenarios: [],
    totalPoints: 0,
    isWinner: false,
  }
  
  export function getGameProgress(): GameState {
    return { ...gameState }
  }
  
  export function updateGameProgress(environment: string, points: number): GameState {
    if (!gameState.completedScenarios.includes(environment)) {
      gameState.completedScenarios.push(environment)
    }
    gameState.totalPoints += points
    gameState.isWinner = gameState.totalPoints >= 100
  
    return getGameProgress()
  }
  
  export function resetGameProgress(): void {
    gameState = {
      completedScenarios: [],
      totalPoints: 0,
      isWinner: false,
    }
  }
  
  