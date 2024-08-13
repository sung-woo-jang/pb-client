enum Gender {
  M = 'M',
  W = 'W',
}

export interface IUser {
  id: string;
  createdAt: Date;
  ageRange: string;
  birthday: string;
  birthyear: string;
  gender: Gender;
  email: string;
  mobile: string;
  name: string;
  nickname: string;
  profileImage: string;
}
