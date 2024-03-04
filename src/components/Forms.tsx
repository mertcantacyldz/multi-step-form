import { Formik, Form, FormikProps } from "formik"
import { useState } from "react";
import { FormValuesType } from '../types/FormValues'
import Step1 from "./steps/Step1"
import Step2 from "./steps/Step2"
import Step3 from "./steps/Step3"
import Step4 from "./steps/Step4"
import Completed from "./steps/Completed";
import validationSchema from "../validation/validationSchema";








const Forms: React.FC = () => {



  const [isSubmitting, setIsSubmitting] = useState<boolean>(true);


  const initialValues: FormValuesType = {
    //step1
    step: 1,
    name: "",
    email: "",
    phone: "",
    git: "",

    //step2
    skill: "",

    //step3
    framework: "",
  };

 // formun tamamlandıktan sonra gönderme işlemin yapılmasını sağlayacak fonksiyonumuz
  const handleSubmit = (values: FormValuesType) => {

    setIsSubmitting(false)

    console.log(values, "deneme");
    // burda post methodu ile formdan alınan  veriler sunucuya gönderilebilir.

  };

// Form içerisinde stepler arasında ileri ve geri yapabilmek için kullandığımı fonksiyonlar
  const handleNext = (formValues: FormikProps<FormValuesType>) => {
    formValues.setFieldValue('step', formValues.values.step + 1);
  
  }
  const handlePrev = (formValues: FormikProps<FormValuesType>) => {
    formValues.setFieldValue('step', formValues.values.step - 1);
   
  }


  return (
    <div className="w-full bg-white rounded-xl drop-shadow-xl p-[5%] ">
      <div className="h-full ">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {(formValues: FormikProps<FormValuesType>) => (
            <Form className="bg-white flex flex-col h-full  w-full gap-4   mid:gap-7 ">
              {isSubmitting ? (
                <>
                  <div className="flex w-full justify-between items-center h-[15%] pb-3 sm:pb-6  border-b-2 border-[#E5E7EB] ">
                        {/* formun adımlarını sayılar ile gösteren kısım */}          
                    <div className={`${formValues.values.step >= 1 ? ("step-ball") : ("empty-step-ball")}`}>1</div>
                    <div className={`${formValues.values.step >= 2 ? ("step-line") : ("empty-step-line")}`}></div>

                    <div className={`${formValues.values.step >= 2 ? ("step-ball") : ("empty-step-ball")}`}>2</div>
                    <div className={`${formValues.values.step >= 3 ? ("step-line") : ("empty-step-line")}`}></div>

                    <div className={`${formValues.values.step >= 3 ? ("step-ball") : ("empty-step-ball")}`}>3</div>
                    <div className={`${formValues.values.step >= 4 ? ("step-line") : ("empty-step-line")}`} ></div>

                    <div className={`${formValues.values.step >= 4 ? ("step-ball") : ("empty-step-ball")}`}>4</div>
                  </div>
                  {formValues.values.step == 1 && (
                    <>
                      <Step1></Step1>
                    </>
                  )}
                  {formValues.values.step == 2 && (
                    <>
                      <Step2 formValues={formValues}></Step2>
                    </>
                  )}
                  {formValues.values.step == 3 && (
                    <>
                      <Step3 formValues={formValues}></Step3>
                    </>

                  )}
                  {formValues.values.step == 4 && (
                    <>
                      <Step4 formValues={formValues}></Step4>
                    </>

                  )}

                  {formValues.values.step == 1 && (

                    <div className="w-full h-[10%]  lg:h-[15%] flex justify-end items-center">

                      <button disabled={!formValues.isValid || !formValues.dirty} type="button" onClick={() => handleNext(formValues)} className="button-next"> Next Step</button>
                    </div>

                  )}

                  {formValues.values.step > 1 && formValues.values.step < 4 && (

                    <div className="w-full h-[10%]  lg:h-[15%] flex justify-between items-center">
                      <button type="button" onClick={() => handlePrev(formValues)} name="prev" className=" button-pre"> Go Back</button>
                      <button disabled={!formValues.isValid || !formValues.dirty} type="button" onClick={() => handleNext(formValues)} name="next" className="button-next"> Next Step</button>
                    </div>


                  )
                  }
                  {formValues.values.step == 4 && (
                    <div className="w-full  h-[10%]  lg:h-[15%] flex justify-between items-center">
                      <button disabled={!formValues.isValid || !formValues.dirty} type="button" onClick={() => handlePrev(formValues)} name="prev" className=" button-pre"> Go Back</button>
                      <button type="submit" onClick={() => handleSubmit(formValues.values)} name="submit" className="button-next">Submit</button>
                    </div>
                  )}
                </>
              ) : (
              <Completed></Completed>
              )}
            </Form>

          )}
        </Formik>
      </div>
    </div >
  )
}





export default Forms;