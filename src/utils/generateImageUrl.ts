export const generateProfileImageUrl = (profileImageUrl: string): string =>
  `http://localhost:8000/dummy/profile_image/${profileImageUrl}`;

export const generatePostImageUrl = (profileImageUrl: string): string =>
  `http://localhost:8000/dummy/${profileImageUrl}`;
