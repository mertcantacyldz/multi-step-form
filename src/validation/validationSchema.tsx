import * as yup from 'yup';
import {FormValuesType} from "../types/FormValues"

const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const validationSchema:yup.Schema<FormValuesType> = yup.object().shape({
    step:yup.number().required(),
    //step1
  name: yup.string().default("").when('step',{
    is:1,
    then: schema =>schema.required('Name is required'), 
  }),
  email: yup.string().default("").when("step",{
    is:1,
    then: schema =>schema.email('Invalid email').required('Email is required'),
  }),
  phone:yup.string().default("").when('step',{
    is:1,
    then: schema=>schema.matches(phoneRegExp, 'Invalid phone number').required('Phone number is required'),
  }),
  git:yup.string().default("").when('step', {
    is:1,
    then: schema=>schema.required('Portfolio/GitHub Link is required'),
  }),

  //step2
  skill:yup.string().default("").when('step',{
    is:2,
    then:schema=>schema.required('Skill is required'),
  }),
  // step 3
  framework:yup.string().default("").when('step',{
    is:3,
    then: schema=>schema.required('Framework is required'),
  }),


});

export default validationSchema;