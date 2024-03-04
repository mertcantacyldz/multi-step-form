import React from "react";
import { FormikProps } from "formik";
import { useState } from "react";
import {FormValuesType} from "../../types/FormValues"


interface StepProps {
  formValues: FormikProps<FormValuesType>;
}

const Step3 : React.FC<StepProps> = ({ formValues })=>{

    const [selectedFramework, setSelectedFramework] = useState<string | null>(null);

    const handleCheckBox = (value: string, formValues: FormikProps<FormValuesType>) => {

        // Formik form alanını güncelle
        formValues.setFieldValue('framework', value);
        setSelectedFramework(value);
    
    
    
      };

    return(
        <>
        <div className="flex flex-col gap-5  border-b-2 border-[#E5E7EB] mb-2">
          <div className="font-poppins   large:mb-0 3xl:mb-0 ">
            <p className="text-[12px] lg:text-[15px] xl:text-xl mid:text-xl large:text-2xl 3xl:text-[28px] lg:mb-2 3xl:mb-2 font-medium">Skill Level</p>
            <p className=" text-[10px] lg:text-[12px]  mid:text-xs large:text-[14px] 3xl:text-[17px] text-[#6B7280]">Please tell us about your skill level in frontend development.</p>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-y-[8%] sm:gap-y-[10%] mid:gap-y-[15%] gap-x-[8%] mb-14 large:mb-20 ">
            {['HTML/CSS/JS', 'ReactJs', 'AngularJs', 'Vue.js'].map((framework, index) => (
              <div className="step-2" key={index} onClick={() => handleCheckBox(framework, formValues)}>
                <div onClick={() => handleCheckBox(framework, formValues)} className={`w-3 h-3 lg:w-5 lg:h-5 border-[#111827] border-[1px]  rounded-sm lg:rounded-md  flex justify-center items-center ${selectedFramework === framework ? "bg-[#FC6C4C] border-[#FC6C4C]" : "null"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,255.99609,255.99609" width="13px" height="40px"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' } as React.CSSProperties} ><g transform="scale(5.12,5.12)"><path d="M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z" /></g></g></svg>
                </div>
                <p>{framework}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    )
}

export default Step3