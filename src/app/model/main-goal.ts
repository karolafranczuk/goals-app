import { IGoalable } from "./i-goalable";
import { SubGoal } from "./sub-goal";

export type MainGoal = IGoalable & { subgoals: SubGoal[] }