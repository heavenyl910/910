const q = new Map<number,string[]>();
export const getQueue = (id:number) => q.get(id) ?? [];
export const setQueue = (id:number, list:string[]) => q.set(id, list);
