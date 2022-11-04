import { createSlice } from "@reduxjs/toolkit";

const currentUser = {
  firstName: 'Saket',
  lastName: 'Kumar',
  handle: 'voonic',
  profilePicture: 'js.png',
  bannerPicture: 'banner.jpeg',
  bio: 'Student, Software Engineer, Game development, Space, and Coding enthusiast. Retuits and likes are not endorsements.',
  website: 'https://stackoverflow.com/users/2261259/voonic',
  location: 'Boston, MA',
  dateOfBirth: '7/7/1968',
  dateJoined: '4/2009',
  followingCount: 340,
  followersCount: 223,
  tuitsCount: 3267,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: currentUser,
  reducers: {
    editProfile(state, action) {
      state.unshift({
        ...currentUser,
        ...action.payload,
      })
    },
  }
});

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;