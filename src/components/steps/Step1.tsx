import {  ErrorMessage, Field,  } from "formik"

export default function Step1() {
  return (
    <div className="flex flex-col h-full gap-3 mid:gap-5 border-b-2 border-[#E5E7EB] ">
                        <div className="font-poppins   ">
                          <p className="text-[12px] lg:text-[13px] xl:text-xl mid:text-xl large:text-2xl 3xl:text-[28px] lg:mb-2 3xl:mb-2 font-medium">Personel İnformation</p>
                          <p className="text-[8px] lg:text-[10px]  mid:text-xs large:text-[14px] 3xl:text-[17px] text-[#6B7280]">Please provide your personal details so we can get to know you better.</p>
                        </div>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-y-[4%] sm:gap-y-[10%] mid:gap-y-[15%] gap-x-[8%] mb-9 lg:mb-14 large:mb-20  ">
                          <div className=" flex  flex-col gap-2 ">
                            <label className="label"> Full Name</label>
                            <Field className="step-input" type="text" name="name" placeholder="Mertcan Taçyıldız" />
                            <ErrorMessage component="small"  render={msg => <div className="error">{msg}</div>}  name="name"></ErrorMessage>
                          </div>

                          <div className=" flex  flex-col  gap-2">
                            <label className="label"> Email Address</label>
                            <Field className="step-input" type="email" name="email" placeholder="name@email.com" />
                            <ErrorMessage component="small"  render={msg => <div className="error">{msg}</div>} name="email"></ErrorMessage>
                          </div>

                          <div className=" flex  flex-col gap-2">
                            <label className="label"> Phone Number</label>
                            <Field className="step-input" type="tel" name="phone" placeholder="+91 1234567890" />
                            <ErrorMessage component="small" render={msg => <div className="error">{msg}</div>} name="phone"></ErrorMessage>
                          </div>
                          
                          <div className=" flex  flex-col gap-2">
                            <label className="label">Portfolio/GitHub Link</label>
                            <Field className="step-input" type="text" name="git" placeholder="github.com/mertcantacyldz" />
                            <ErrorMessage component="small"  render={msg => <div className="error">{msg}</div>} name="git"></ErrorMessage>
                          </div>

                        </div>
                      </div>
  )
}
