'use strict';
const mongoose = require('mongoose')
const DreamList = mongoose.model('Dreams')

exports.list_all_dreams = function(req, res) {
  DreamList.find({}, function(err, list) {
    if (err)
      res.send(err);
    res.json(list)
  })
}

exports.create_a_dream = function(req, res) {
  let new_list = new DreamList(req.body)
  new_list.save(function(err, list) {
    if (err)
      res.send(err)
    res.json(list)
  })
}

exports.read_a_dream = function(req, res) {

  DreamList.findById(req.params.dreamId, function(err, list) {
    if (err)
      res.send(err)
    res.json(list)
  })
}

exports.update_a_dream = function(req, res) {
  DreamList.findOneAndUpdate({_id: req.params.dreamId}, req.body, { new: true }, function(err, list) {
    if (err)
      res.send(err)
    res.json(list)
  })
}

exports.delete_a_dream = function(req, res) {
  DreamList.remove({
    _id: req.params.dreamId
  }, function(err, list) {
    if (err)
      res.send(err)
    res.json({ message: 'Dreams list successfully deleted' })
  })
}
