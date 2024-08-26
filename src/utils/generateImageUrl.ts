export const generateProfileImageUrl = (profileImageUrl: string): string =>
  `http://localhost:8000/uploads/profile_image/${profileImageUrl}`;

export const generatePostImageUrl = (profileImageUrl: string): string =>
  `http://localhost:8000/uploads/${profileImageUrl}`;
