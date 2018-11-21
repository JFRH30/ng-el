export interface Room {
  id: string;
  title: string;
  owners: { userId: string; userName: string }[];
  messages?: { userId: string; userName: string; message: string; date: string }[];
}
