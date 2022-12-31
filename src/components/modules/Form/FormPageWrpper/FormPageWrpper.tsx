//libraries
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

//components
import { Button, InputField, TextareaField, SelectBox, Loading } from "components/common";

//model & utils
import { Form } from "models";
import { formValidation } from "../utils";
import { useAdjusterAPI, usePostFormAPI } from "../hooks";

import "./style.scss";


export const FormPageWrpper = () => {

  const { isLoading: isSendingForm, mutate: sendForm } = usePostFormAPI();
  const { isLoading: isGettingAdjuster, data: adjuster } = useAdjusterAPI({}, {
    onError: (err) => alert(" دریافت اطلاعات کارشناس ناموفق بود \n" + err.detail),
    //trasform Object to Array for best practices only for this case
    select: (data) => ({ ...data, adjuster: [data.adjuster], branch: [data.branch] }),
  });

  const { control, handleSubmit, formState: { errors } } = useForm<Form>({
    resolver: yupResolver(formValidation),
    defaultValues: {
      branch: undefined,
      adjuster: undefined,
      amount_damages_assessed: 0,
      visit_date: undefined,
      visit_time: undefined,
      covered_distance: 0,
      description: "",
      is_active: true,
      file: 98,
    }
  })


  const onSubmit: SubmitHandler<Form> = (data) => {
    sendForm(data, {
      onError: (e) => alert(`ارسال فرم با خطا مواجه شد 
      ${e.detail}`),
      onSuccess: (data) => alert("ارسال با موفقیت انجام شد \n" + JSON.stringify(data, null, 2))
    });
  }


  return (
    <main>
      <div className="form-page">
        <h1 className="form-page__title">فرم بازدید</h1>

        {isGettingAdjuster ? <Loading /> :
          <form onSubmit={handleSubmit(onSubmit)} className="form-page__form">
            <div className="form-page__form--wrapper">
              <Controller
                name="branch"
                control={control}
                render={({ field }) => (
                  <SelectBox
                    {...field}
                    required
                    placeholder="انتخاب کنید"
                    label="شعبه ایرانیان پوشش"
                    options={adjuster?.branch.map(br => ({ label: br.name, value: br.id }))}
                    isError={!!errors.branch}
                    errorMsg={errors.branch?.message}
                  />
                )}
              />
              <Controller
                name="adjuster"
                control={control}
                render={({ field }) => (
                  <SelectBox
                    {...field}
                    placeholder="انتخاب کنید"
                    label="کارشناس"
                    required
                    options={adjuster?.adjuster.map(ad => ({ label: ad.username, value: ad.id }))}
                    isError={!!errors.adjuster}
                    errorMsg={errors.adjuster?.message}
                  />
                )}
              />
              <Controller
                name="amount_damages_assessed"
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    type="number"
                    required
                    step={5000000}
                    label="مبلغ خسارت"
                    placeholder="ریال"
                    isError={!!errors.amount_damages_assessed}
                    errorMsg={errors.amount_damages_assessed?.message}
                  />
                )}
              />
              <Controller
                name="visit_date"
                control={control}
                render={({ field: { value, ...rest } }) => (
                  <InputField
                    {...rest}
                    type="date"
                    label="تاریخ"
                    required
                    className="date-input-wrapper"
                    inputClassName="date-input"
                    isError={!!errors.visit_date}
                    errorMsg={errors.visit_date?.message}
                  />
                )}
              />
              <Controller
                name="visit_time"
                control={control}
                render={({ field: { value, onChange, ...rest } }) => (
                  <InputField
                    {...rest}
                    type="time"
                    label="ساعت"
                    required
                    onChange={e => onChange(e.target.value + ":00")}
                    className="time-input-wrapper"
                    inputClassName="time-input"
                    isError={!!errors.visit_time}
                    errorMsg={errors.visit_time?.message}
                  />
                )}
              />
              <Controller
                name="covered_distance"
                control={control}
                render={({ field }) => (
                  <InputField
                    {...field}
                    placeholder="Km"
                    label="مسافت رفت و برگشت طی شده"
                    required
                    type="number"
                    isError={!!errors.covered_distance}
                    errorMsg={errors.covered_distance?.message}
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextareaField
                    {...field}
                    label="توضیحات"
                    required
                    inputClassName="textarea"
                    isError={!!errors.description}
                    errorMsg={errors.description?.message}
                  />
                )}
              />
            </div>
            <Button
              variant="contained"
              disabled={isSendingForm}
              isLoading={isSendingForm}
              loadingElement="صبرکنید..."
              className="form-page__form--btn"
            >
              ذخیره
            </Button>
          </form>
        }
      </div>
    </main>
  )
}