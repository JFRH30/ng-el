export interface Room {
  id?: number;
  title: string;
  owners?: User[];
  messages?: { userId: string; userName: string; content: string; date: string }[];
}

export interface User {
  id: string;
  name: string;
}
