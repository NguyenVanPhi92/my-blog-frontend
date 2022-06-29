import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    getAllBlog: {
      blogList: null,
      isFetching: false,
      error: false,
    },

    getOneBlog: {
      currentBlog: null,
      isFetching: false,
      error: false,
    },
  },

  reducers: {
    getAllBlogStart: (state, action) => {
      state.getAllBlog.isFetching = true;
    },

    getAllBlogSuccess: (state, action) => {
      state.getAllBlog.isFetching = false;
      state.getAllBlog.blogList = action.payload;
      state.getAllBlog.error = false;
    },

    getAllBlogError: (state, action) => {
      state.getAllBlog.isFetching = false;
      state.getAllBlog.error = true;
    },
    getOneBlogStart: (state, action) => {
      state.getOneBlog.isFetching = true;
    },

    getOneBlogSuccess: (state, action) => {
      state.getOneBlog.isFetching = false;
      state.getOneBlog.currentBlog = action.payload;
      state.getOneBlog.error = false;
    },

    getOneBlogError: (state, action) => {
      state.getOneBlog.isFetching = false;
      state.getOneBlog.error = true;
    },
  },
});

export const {
  getAllBlogStart,
  getAllBlogSuccess,
  getAllBlogError,
  getOneBlogStart,
  getOneBlogSuccess,
  getOneBlogError,
} = blogSlice.actions;

export default blogSlice.reducer;
