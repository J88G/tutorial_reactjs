import express from 'express';
import validateInput from '../shared/validations/signup';

let router = express.Router();



router.post('/', (req, res) => {
setTimeout(() => {
    const {errors, isValid} = validateInput(req.body);

    if(isValid){
      res.json({success: true});
    }else{
      res.status(400).json(errors);
    }
  },0);
});



export default router;
