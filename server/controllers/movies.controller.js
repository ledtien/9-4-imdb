const Movie = require("../models/Movie");

const moviesController = {};

const {
  AppError,
  catchAsync,
  sendResponse,
} = require("../helpers/utils.helper");

moviesController.create = catchAsync(async (req, res, next) => {
  const movie = await new Movie({
    ...req.body,
    user: req.userId,
  });
  await movie.save();
  sendResponse(res, 201, "true", { movie }, null, "Movie created!!");
});

moviesController.list = catchAsync(async (req, res, next) => {
  const pageNumber = 1;
  const nPerPage = 10;

  const movie = await Movie.find({})
    .skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
    .limit(nPerPage)
    .populate("user", ["name"]);
  sendResponse(res, 200, "true", { movie }, null, "Get all movies!");
});

moviesController.update = catchAsync(async (req, res, next) => {
  const tokenMovieId = { _id: req.params.id, user: req.userId };
  const movie = await Movie.findOneAndUpdate(
    tokenMovieId,

    { ...req.body },
    { new: true }
  );
  sendResponse(res, 200, "true", { movie }, null, "Movie updated!");
});

moviesController.delete = catchAsync(async (req, res, next) => {
  const tokenMovieId = { _id: req.params.id, user: req.userId };
  const movie = await Movie.findOneAndDelete(tokenMovieId);
  sendResponse(res, 200, "true", { movie }, null, "Movie Deleted!");
});

module.exports = moviesController;
