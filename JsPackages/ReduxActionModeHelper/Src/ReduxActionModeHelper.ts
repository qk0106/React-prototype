import { generateId } from "IdGenerator";

export enum ActionMode {
    InstanceOnly = 0,
    Broadcast = 1
}

// Action Type
export const BROADCAST: string = "BROADCAST";

// Action Creator
export const broadcast = actionParamsObj => ({
    type: BROADCAST,
    targetMode: ActionMode.Broadcast,
    requestId: generateId(),
    ...actionParamsObj
});
