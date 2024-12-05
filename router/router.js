const mongoose = require("mongoose");
const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const ImportantPeople = require("../models/ImportantPeople");
const PopularAreas = require("../models/PopularAreas");

router.get("/users", async (req, res) => {
  try {
      const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
});
router.get("/user/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
});
router.post("/SignIn", async (req, res) => {
  try {
    const userS = await User.findOne({ email: req.body.email });
    if (userS) {
      if (userS.password === req.body.password) {
        res.status(200).json(userS);
      }
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
});
router.post("/SignUp", async (req, res) => {
  try {
    const Users = await User.findOne({ email: req.body.email });
    if (Users === null || Users === undefined) {
      const user = await User.create(req.body);
      // user.save();
      res.status(200).json(user);
    } else {
      res.status(400).json({
        message: "Email already exists",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
});

router.put("/User/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      updatedAt: Date.now(),
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
});
router.delete("Delete/User/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
});

router.delete("/Delete/Users", async (req, res) => {
  try {
    const users = await User.deleteMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal server error" });
  }
});

router.get("/ImportantPeople", async (req, res) => {
  try {
    const importantPeople__S = await ImportantPeople.find();
    res.status(200).json(importantPeople__S);
  } catch {
    res.status(400).json({
      message: "Internal server error",
    });
  }
});
router.post("/ImportantPeople__Create", async (req, res) => {
  try {
    const importantPeople__C = await ImportantPeople.create(req.body);
    res.json(importantPeople__C);
  } catch {
    res.status(400).json({
      message: "Internal server error",
    });
  }
});

router.get("/PopularAreas", async (req, res) => {
  try {
    const popularAreas__S = await PopularAreas.find();
    res.status(200).json(popularAreas__S);
  } catch {
    res.status(400).json({
      message: "Internal server error",
    });
  }
});
router.post("/PopularAreas__Create", async (req, res) => {
  try {
    const popularAreas__C = await PopularAreas.create(req.body);
    res.json(await PopularAreas.find());
  } catch {
    res.status(400).json({
      message: "Internal server error",
    });
  }
});
router.put("/PopularAreas/:id", async (req, res) => {
  try {
    const popularAreas__U = await PopularAreas.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(await PopularAreas.find());
  } catch {
    res.status(400).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
