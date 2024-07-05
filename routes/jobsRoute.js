const express = require("express");
const { register } = require("../controllers/authController");
const router = express.Router();
const {
  getAllJobs,
  createJob,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobsController");

router.route("/").get(getAllJobs).post(createJob);
router.route(":id").get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router;
