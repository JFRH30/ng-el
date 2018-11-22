export interface Room {
  id?: number;
  title: string;
  // owners: { userId: string; userName: string }[];
  messages?: { userId: string; userName: string; message: string; date: string }[];
}
