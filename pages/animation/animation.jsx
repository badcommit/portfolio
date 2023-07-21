import RollingDice from './rolling_dice'
export const Animation = {
  RollingDice: <RollingDice />,
}

export function AnimatedBy(props) {
  const { animationName } = props
  return Animation[animationName]
}
