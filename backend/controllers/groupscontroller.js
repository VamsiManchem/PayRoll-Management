const Group = require("../models/groupmodel");



exports.createGroup = (req, res, next) => {
  const group = new Group({
    title: req.body.title,
    creator: req.userData.userId
  });
  console.log(group);
  group.save().then(result => {
    res.status(201).json({
      message: 'Group added successfully',
  });

  })
  .catch(error => {
    res.status(500).json({
      message: "Creating a Group Failed!"
    });
  });
};

exports.updateGroup = (req, res, next) => {
  const group = new Group({
    _id: req.body.id,
    title: req.body.title,
    //content: req.body.content,
   // creator: req.userData.userId
  });
  console.log(group);
  Group.updateOne({_id: req.params.id }, group)
  .then(result => {
    //res.status(200).json({ message: 'Update uccessful!' });

      if (result.n > 0) {
      res.status(200).json({ message: 'Update Successful!' });
    }
    else {
      res.status(401).json({ message: 'Not Authorized!' });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Couldn't updated Group!"
    });
  });
};

exports.getGroups = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const groupQuery = Group.find();
  let fetchedGroups;
  if (pageSize && currentPage) {
    groupQuery
      .skip(pageSize * (currentPage - 1))
      .limit(pageSize);
  }
  groupQuery
    .then(documents => {
    fetchedGroups = documents;
     return Group.count();
  })
    .then(count => {
      res.status(200).json({
        message: "Groups fetched successfully!",
        groups: fetchedGroups,
        maxGroups: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching groups Failed!"
      });
    });
  };

  exports.getGroup = (req, res, next) => {
    Group.findById(req.params.id).then(group => {
     if (group) {
       res.status(200).json(group);
     }
     else {
       res.status(404).json({ message: 'Group not found!'});
     }
    })
    .catch(error => {
     res.status(500).json({
       message: "Fetching groups Failed!"
     });
  });
 };

 exports.deleteGroup = (req, res, next) => {
  Group.deleteOne({ _id: req.params.id }).then(result => {
   console.log(result);
     res.status(200).json ({ message: "Group deleted!" });
  /*  if (result.n > 0) {
     res.status(200).json({ message: 'Deletion uccessful!' });
   }
   else {
     res.status(401).json({ message: 'Not Authorized!' });
   } */
  })
  .catch(error => {
   res.status(500).json({
     message: "Groups deleted Failed!"
   });;
 });
}
