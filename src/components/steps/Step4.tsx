import React from "react";
import { FormikProps } from "formik";
import {FormValuesType} from "../../types/FormValues"

interface StepProps {
  formValues: FormikProps<FormValuesType>;
}


const Step4 : React.FC<StepProps> = ({ formValues })=>{

    const titles = ['.', 'Full Name', 'Email Address', 'Phone Number', 'Portfolio/GitHub Link', 'Skill Level', 'Challenge Preference']

    return(

        <>
        <div className="flex flex-col gap-5  border-b-2 border-[#E5E7EB]">
          <div className="font-poppins">
            <p className="text-[12px] lg:text-[15px] xl:text-xl mid:text-xl large:text-2xl 3xl:text-[28px] lg:mb-2 3xl:mb-2 font-medium">Review and Confirm</p>
            <p className=" text-[10px] lg:text-[12px]  mid:text-xs 2xl:text-[14px] 3xl:text-[17px] text-[#6B7280]">Please review your information to make sure everything is accurate.</p>
          </div>

          <div className="grid grid-cols-3 gap-y-[15%] gap-x-[8%] mb-10 lg:mb-14 large:mb-20">
            {
              Object.values(formValues.values).map((value, index) => (
                typeof value === 'string' && value.trim() !== '' && (
                  <div className="review-box " key={index}>

                    <p className="review-label" >{titles[index]}</p>

                    <p className={`review-value ${value.length >20 ?('truncate'):""} `}> {value}</p>
                  </div>
                )
              ))
            }

          </div>
          
        </div>


      </>
    )
}

export default Step4