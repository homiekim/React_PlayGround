import { ReactNode } from 'react';

export type SidebarType = {
  label: string;
  path: string;
  icon: ReactNode;
};

export type User = {
  account_id: number;
  email: string;
  nickname: string;
  dateJoin: string;
  lastLogin: string;
  profile_img: HTMLImageElement;
  role: 'ADMIN' | 'USER';
  video: Video[];
};

export type Video = {
  video_id: number;
  show_id: number;
  account_id : number;
  type: string;
  description: string;
  thumbnail: string;
  url: string;
  title: string;
  account_nickname: string;
  view: number;
  like: number;
  created_date: string;
};

export type Category = {
  category_id: number;
  account_id: number;
  category_name : string;
}

export type Comment = {
  comment_id : number;
  video_id : number;
  account_id : number;
  content : string;
  created_date : Date;
}